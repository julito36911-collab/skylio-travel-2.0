import { useState, useEffect } from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { demoNews } from '../../data/demoNews';

// CONFIGURACIÓN DE NEWSAPI
const API_KEY = process.env.REACT_APP_NEWS_API_KEY || '';
const ENABLE_NEWS = true; // Se activa automáticamente si hay API key
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 horas
const USE_DEMO_MODE = false; // Cambiar a false en producción con dominio real

// DEBUG: Verificar que se carga correctamente
console.log('🔍 NewsSection - API_KEY:', API_KEY ? 'Configurada ✅' : 'NO configurada ❌');
console.log('🔍 NewsSection - ENABLE_NEWS:', ENABLE_NEWS);
console.log('🔍 NewsSection - USE_DEMO_MODE:', USE_DEMO_MODE);

// FILTROS INTELIGENTES POR IDIOMA
const KEYWORDS = {
  es: '(viajes OR turismo OR vacaciones) AND (destinos OR aerolíneas OR hoteles OR vuelos OR aeropuerto OR pasajeros)',
  en: '(travel OR tourism OR vacation) AND (destination OR airlines OR hotels OR flights OR airport)',
  he: 'נסיעות OR יעד OR תיירות OR חברות תעופה OR בתי מלון OR טיסות OR חופשה'
};

const NewsSection = () => {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCustomSearch, setIsCustomSearch] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async (query = null) => {
    setLoading(true);
    if (query) setIsSearching(true);
    
    const currentLanguage = i18n.language;
    
    // MODO DEMO: Usar noticias de ejemplo (solo para noticias generales)
    if (USE_DEMO_MODE && !query) {
      setTimeout(() => {
        const demoArticles = demoNews[currentLanguage] || demoNews.en;
        setNews(demoArticles);
        setLoading(false);
        setIsSearching(false);
      }, 800);
      return;
    }

    // MODO PRODUCCIÓN: Usar NewsAPI real
    const searchLanguage = currentLanguage === 'he' ? 'en' : currentLanguage;
    
    // Verificar caché por idioma (SOLO si NO es búsqueda personalizada)
    const cacheKey = `skylio_news_${currentLanguage}`;
    const cacheTimeKey = `skylio_news_time_${currentLanguage}`;
    if (!query) {
      const cachedNews = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(cacheTimeKey);
      const now = Date.now();

      if (cachedNews && cachedTime && (now - parseInt(cachedTime) < CACHE_DURATION)) {
        setNews(JSON.parse(cachedNews));
        setLoading(false);
        return;
      }
    }

    try {
      let url;
      if (query) {
        // Consulta estructurada: Prioriza la ubicación y busca al menos uno de los términos de viaje
        const travelTerms = '(viajes OR travel OR tourism OR turismo OR "guía de viaje" OR vacation)';
        const fullQuery = `"${query}" AND ${travelTerms}`;
        url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(fullQuery)}&language=${searchLanguage}&sortBy=relevancy&pageSize=15&apiKey=${API_KEY}`;
      } else {
        // Usar el backend como proxy para las noticias generales
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
        url = `${backendUrl}/api/news?language=${searchLanguage}`;
      }
      
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'ok' || data.status === 'success') {
        const articles = data.articles || [];
        const validArticles = articles
          .filter(article => article.urlToImage && article.title && article.description);
        
        setNews(validArticles);
        
        // Solo guardar en caché si es la búsqueda general
        if (!query && validArticles.length > 0) {
          localStorage.setItem(cacheKey, JSON.stringify(validArticles.slice(0, 6)));
          localStorage.setItem(cacheTimeKey, Date.now().toString());
        }
      } else {
        throw new Error(data.message || 'Error al obtener noticias');
      }
    } catch (err) {
      console.error("⚠️ Error en NewsAPI:", err);
      if (!query) {
        const demoArticles = demoNews[currentLanguage] || demoNews.en;
        setNews(demoArticles);
      } else {
        setNews([]);
      }
    } finally {
      setLoading(false);
      setIsSearching(false);
    }
  };

  useEffect(() => {
    if (!ENABLE_NEWS) {
      setLoading(false);
      return;
    }
    fetchNews();
  }, [i18n.language]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsCustomSearch(true);
      fetchNews(searchTerm.trim());
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setIsCustomSearch(false);
    fetchNews();
  };

  return (
    <section className="mt-8 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            <Newspaper size={20} className="text-slate-100"/> {t('categories.latest_news')}
          </h3>
          {USE_DEMO_MODE && !isCustomSearch && (
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 border border-blue-400/30">
              Demo
            </span>
          )}
        </div>

        {/* BUSCADOR */}
        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="relative flex-grow md:w-64">
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Busca noticias... ej: Dubai"
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-4 pl-10 text-sm text-slate-200 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
            />
            <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-400">
              <span className="sr-only">Buscar</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </button>
          </form>
          {isCustomSearch && (
            <button 
              onClick={handleReset}
              className="text-xs font-semibold px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              Ver todas
            </button>
          )}
        </div>
      </div>
      
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-2xl border border-white/5 animate-pulse">
          <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-4"></div>
          <span className="text-slate-400 text-sm">{isSearching ? 'Buscando noticias...' : t('messages.loading')}</span>
        </div>
      ) : news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((article, index) => (
            <a 
              key={index} 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card flex flex-col overflow-hidden group no-underline hover:scale-[1.02] transition-transform"
            >
              <div className="h-44 w-full overflow-hidden relative">
                 <img src={article.urlToImage} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => e.target.style.display = 'none'} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                 <span className="absolute bottom-3 right-3 text-[10px] text-slate-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                    {new Date(article.publishedAt).toLocaleDateString()}
                 </span>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between bg-gradient-to-b from-white/5 to-transparent">
                <div>
                  <h4 className="text-[15px] font-bold leading-snug mb-2 text-slate-100 line-clamp-2 group-hover:text-blue-400 transition-colors">{article.title}</h4>
                  <p className="text-xs text-slate-400 mb-4 line-clamp-3 leading-relaxed">{article.description}</p>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/5">
                   <span className="text-[10px] text-slate-500 font-semibold tracking-wide uppercase">{article.source.name}</span>
                   <div className="flex items-center gap-1 text-blue-400/80 group-hover:text-blue-400 transition-colors">
                      <span className="text-[10px] font-bold">LEER MÁS</span>
                      <ExternalLink size={12} />
                   </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-2xl border border-white/5 text-center">
          <div className="bg-slate-800/50 p-4 rounded-full mb-4">
            <Newspaper size={32} className="text-slate-600" />
          </div>
          <h4 className="text-slate-300 font-bold mb-2">No se encontraron noticias</h4>
          <p className="text-slate-500 text-sm max-w-xs px-4">No hemos encontrado resultados para tu búsqueda. Prueba con otros términos o vuelve a las noticias generales.</p>
          <button 
            onClick={handleReset}
            className="mt-6 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors shadow-lg shadow-blue-500/20"
          >
            Volver a noticias generales
          </button>
        </div>
      )}
    </section>
  );
};

export default NewsSection;