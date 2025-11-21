import { useState, useEffect } from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// CONFIGURACIÓN DE NEWSAPI
const API_KEY = process.env.REACT_APP_NEWS_API_KEY || '';
const ENABLE_NEWS = !!API_KEY; // Se activa automáticamente si hay API key
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 horas

// DEBUG: Verificar que se carga correctamente
console.log('🔍 NewsSection - API_KEY:', API_KEY ? 'Configurada ✅' : 'NO configurada ❌');
console.log('🔍 NewsSection - ENABLE_NEWS:', ENABLE_NEWS);

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
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!ENABLE_NEWS) {
      setLoading(false);
      return;
    }

    const fetchNews = async () => {
      const currentLanguage = i18n.language;
      // Si el idioma es hebreo, buscar en inglés (más contenido disponible)
      const searchLanguage = currentLanguage === 'he' ? 'en' : currentLanguage;
      
      // Verificar caché por idioma
      const cacheKey = `skylio_news_${currentLanguage}`;
      const cacheTimeKey = `skylio_news_time_${currentLanguage}`;
      const cachedNews = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(cacheTimeKey);
      const now = Date.now();

      // Si hay caché válido (menos de 6 horas), usarlo
      if (cachedNews && cachedTime && (now - parseInt(cachedTime) < CACHE_DURATION)) {
        console.log(`✅ Usando caché para idioma: ${currentLanguage}`);
        setNews(JSON.parse(cachedNews));
        setLoading(false);
        return;
      }

      try {
        console.log(`📡 Obteniendo noticias frescas para idioma: ${currentLanguage}`);
        
        const keywords = KEYWORDS[searchLanguage] || KEYWORDS.en;
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(keywords)}&language=${searchLanguage}&sortBy=publishedAt&pageSize=8&apiKey=${API_KEY}`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'ok' && data.articles) {
          // Filtrar artículos válidos (con imagen, título y descripción)
          const validArticles = data.articles
            .filter(article => article.urlToImage && article.title && article.description)
            .slice(0, 6);
          
          console.log(`✅ ${validArticles.length} noticias guardadas en caché para ${currentLanguage}`);
          
          setNews(validArticles);
          // Guardar en caché por idioma
          localStorage.setItem(cacheKey, JSON.stringify(validArticles));
          localStorage.setItem(cacheTimeKey, now.toString());
        } else {
          throw new Error(data.message || 'Error al obtener noticias');
        }
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("No se pudieron cargar las noticias recientes.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [i18n.language]); // Re-fetch cuando cambia el idioma

  if (!ENABLE_NEWS || error) return null;

  return (
    <section className="mt-8 mb-8">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
        <Newspaper size={20} className="text-slate-100"/> {t('categories.latest_news')}
      </h3>
      
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x -mx-4 px-4 md:mx-0 md:px-0">
        {loading ? (
          [1, 2, 3].map(i => (
            <div key={i} className="glass-card min-w-[280px] h-[200px] flex items-center justify-center snap-center shrink-0 bg-white/5 animate-pulse">
              <span className="text-slate-500 text-sm">{t('messages.loading')}</span>
            </div>
          ))
        ) : news.length > 0 ? (
          news.map((article, index) => (
            <a 
              key={index} 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card min-w-[280px] md:min-w-[320px] snap-center shrink-0 flex flex-col overflow-hidden group no-underline hover:scale-[1.02] transition-transform"
            >
              <div className="h-32 w-full overflow-hidden relative">
                 <img src={article.urlToImage} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => e.target.style.display = 'none'} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <span className="absolute bottom-2 right-2 text-[10px] text-slate-300 bg-black/50 px-1.5 py-0.5 rounded-full">
                    {new Date(article.publishedAt).toLocaleDateString()}
                 </span>
              </div>
              <div className="p-3 flex-grow flex flex-col justify-between bg-white/5">
                <h4 className="text-sm font-bold leading-tight mb-2 text-slate-100 line-clamp-2 group-hover:text-blue-400 transition-colors">{article.title}</h4>
                <div className="flex justify-between items-end mt-auto">
                   <span className="text-[10px] text-slate-400 font-medium">{article.source.name}</span>
                   <ExternalLink size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors"/>
                </div>
              </div>
            </a>
          ))
        ) : null}
      </div>
    </section>
  );
};

export default NewsSection;