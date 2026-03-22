import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Youtube, Search, Play, X, Eye, ThumbsUp, Loader2 } from 'lucide-react';
import Modal from '../ui/Modal';

const VideoSection = () => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [error, setError] = useState('');

  const searchLanguage = i18n.language || 'es';

  const fetchVideos = async (searchTerm = '') => {
    setLoading(true);
    setError('');
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
      const q = searchTerm || 'mejores destinos 2024';
      const response = await fetch(`${backendUrl}/api/youtube?q=${encodeURIComponent(q)}&lang=${searchLanguage}`);
      const data = await response.json();
      
      if (data.status === 'success') {
        setVideos(data.videos || []);
      } else {
        setError(t('news.error', 'No se pudieron cargar los videos'));
      }
    } catch (err) {
      console.error('Error fetching videos:', err);
      setError(t('news.error', 'Error al conectar con el servidor'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [searchLanguage]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchVideos(query);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
  };

  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h3 className="text-2xl font-bold flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          <Youtube size={28} className="text-red-500" /> {t('videos.title', 'Videos de Viajes')}
        </h3>
        
        <form onSubmit={handleSearch} className="relative w-full md:w-80">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('videos.placeholder', 'Busca videos... ej: playas Bali')}
            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all placeholder:text-slate-500"
          />
          <button 
            type="submit"
            className="absolute right-1.5 top-1.5 p-1.5 bg-red-500 hover:bg-red-600 rounded-full transition-colors group"
          >
            <Search size={16} className="text-white group-hover:scale-110 transition-transform" />
          </button>
        </form>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-12 text-slate-400 gap-3">
          <Loader2 size={32} className="animate-spin text-red-500" />
          <p className="text-sm font-medium animate-pulse">{t('news.loading', 'Buscando videos increíbles...')}</p>
        </div>
      ) : error ? (
        <div className="text-center py-8 glass-card border-red-500/20">
          <p className="text-red-400">{error}</p>
        </div>
      ) : videos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="glass-card group cursor-pointer overflow-hidden flex flex-col hover:border-red-500/30 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-xl shadow-red-500/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play size={24} className="text-white fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-md rounded text-[10px] font-bold text-white uppercase tracking-wider">
                  HD
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-slate-100 line-clamp-2 mb-3 group-hover:text-red-400 transition-colors">
                  {video.title}
                </h4>
                <div className="mt-auto flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Eye size={14} className="text-slate-500" /> {formatNumber(video.views)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ThumbsUp size={14} className="text-slate-500" /> {formatNumber(video.likes)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 glass-card">
          <p className="text-slate-400">{t('news.no_results', 'No se encontraron videos sobre este tema')}</p>
          <button 
            onClick={() => {setQuery(''); fetchVideos('');}}
            className="mt-4 text-sm text-red-400 hover:text-red-300 font-semibold"
          >
            {t('news.see_all', 'Ver videos recomendados')}
          </button>
        </div>
      )}

      {/* Modal para reproducción de video */}
      <Modal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)}
        title={selectedVideo?.title}
        color="bg-red-500/10 text-red-400"
      >
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-2xl">
          {selectedVideo && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          )}
        </div>
        <div className="mt-6 flex items-center justify-between text-slate-400 bg-white/5 p-4 rounded-xl border border-white/5">
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-widest text-slate-500 mb-1 font-bold">{t('videos.views', 'Vistas')}</span>
              <span className="text-slate-100 font-mono font-bold text-lg">{formatNumber(selectedVideo?.views || 0)}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-widest text-slate-500 mb-1 font-bold">{t('videos.likes', 'Likes')}</span>
              <span className="text-slate-100 font-mono font-bold text-lg">{formatNumber(selectedVideo?.likes || 0)}</span>
            </div>
          </div>
          <button 
            onClick={() => setSelectedVideo(null)}
            className="px-6 py-2.5 bg-white/5 hover:bg-white/10 rounded-full text-slate-300 font-semibold border border-white/10 transition-all active:scale-95"
          >
            {t('common.close', 'Cerrar')}
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default VideoSection;
