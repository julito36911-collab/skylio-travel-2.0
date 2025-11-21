import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Navigation, Info } from 'lucide-react';

function ParkingFinder() {
  const { t } = useTranslation();
  const [destination, setDestination] = useState('');
  const [showInfo, setShowInfo] = useState(false);

  const handleSearch = () => {
    if (!destination.trim()) {
      alert(t('parking.inputPlaceholder'));
      return;
    }

    // Buscar parkings seguros (paid + public parking) cerca del destino
    const searchTerms = [
      `paid parking near ${destination}`,
      `public parking near ${destination}`,
      `secure parking near ${destination}`
    ];

    // Usar el primer término para la búsqueda principal
    const parkingUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchTerms[0])}`;
    
    // Abrir en nueva pestaña
    window.open(parkingUrl, '_blank', 'noopener,noreferrer');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="mb-8">
      <div className="glass-card p-8 bg-gradient-to-br from-green-600/20 via-blue-600/10 to-transparent border-2 border-green-500/20 hover:border-green-400/40 transition-all">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500/30 to-blue-500/30 backdrop-blur-sm">
              <MapPin size={32} className="text-green-300" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white flex items-center gap-2">
                {t('parking.title')}
              </h2>
              <p className="text-gray-300 text-sm mt-1">
                {t('parking.subtitle')}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            title={t('parking.howItWorks')}
          >
            <Info size={24} className="text-blue-300" />
          </button>
        </div>

        {/* Info expandible */}
        {showInfo && (
          <div className="mb-6 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/30 animate-slideDown">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Info size={20} className="text-blue-300" />
              {t('parking.howItWorks')}
            </h3>
            <ol className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">1.</span>
                <span>{t('parking.step1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">2.</span>
                <span>{t('parking.step2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">3.</span>
                <span>{t('parking.step3')}</span>
              </li>
            </ol>
            <p className="mt-3 text-xs text-yellow-300 bg-yellow-500/10 p-2 rounded-lg">
              {t('parking.tips')}
            </p>
          </div>
        )}

        {/* Buscador */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('parking.inputPlaceholder')}
              className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-lg"
            />
            <Navigation 
              size={20} 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
            />
          </div>
          
          <button
            onClick={handleSearch}
            disabled={!destination.trim()}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-2xl hover:from-green-600 hover:to-blue-700 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
          >
            <MapPin size={20} />
            {t('parking.buttonSearch')}
          </button>
        </div>

        {/* Ejemplo */}
        <p className="text-xs text-gray-400 italic">
          {t('parking.example')}
        </p>

        {/* Badges informativos */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-green-500/20 text-green-200 rounded-full text-xs font-semibold flex items-center gap-1">
            ✓ Sin costo (gratis)
          </span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs font-semibold flex items-center gap-1">
            ✓ Parkings seguros
          </span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs font-semibold flex items-center gap-1">
            ✓ Google Maps directo
          </span>
        </div>
      </div>
    </section>
  );
}

export default ParkingFinder;
