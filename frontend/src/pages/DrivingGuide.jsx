import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { drivingRestrictions as drivingRestrictionsEs, searchCities as searchCitiesEs, getCitiesBySeverity as getCitiesBySeverityEs } from '../data/drivingRestrictions';
import { drivingRestrictions as drivingRestrictionsEn, searchCities as searchCitiesEn, getCitiesBySeverity as getCitiesBySeverityEn } from '../data/drivingRestrictions_en';
import { Search, AlertTriangle, Car, DollarSign, FileText, MapPin, TrendingUp } from 'lucide-react';

const DrivingGuide = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Seleccionar datos según el idioma
  const { drivingRestrictions, searchCities, getCitiesBySeverity } = useMemo(() => {
    return i18n.language === 'en' 
      ? { drivingRestrictions: drivingRestrictionsEn, searchCities: searchCitiesEn, getCitiesBySeverity: getCitiesBySeverityEn }
      : { drivingRestrictions: drivingRestrictionsEs, searchCities: searchCitiesEs, getCitiesBySeverity: getCitiesBySeverityEs };
  }, [i18n.language]);

  const extremeCities = getCitiesBySeverity('EXTREME');
  const highCities = getCitiesBySeverity('HIGH');

  const filteredCities = searchQuery 
    ? searchCities(searchQuery)
    : drivingRestrictions;

  const handleCityClick = (cityId) => {
    navigate(`/driving/${cityId}`);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-8 border-b border-white/10">
        <h1 className="text-3xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
          🚗 {t('driving.title', 'Conducir en el Mundo')}
        </h1>
        <p className="text-slate-400 text-sm">
          {t('driving.subtitle', 'Restricciones, multas y consejos para 15 ciudades')}
        </p>
      </div>

      <div className="p-4 md:p-6 max-w-5xl mx-auto">
        
        {/* Buscador */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder={t('driving.search', 'Buscar ciudad o país...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400/50 transition"
            />
          </div>
        </div>

        {/* Herramientas Rápidas */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-white">
            ⚡ {t('driving.quick_tools', 'Herramientas Rápidas')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => navigate('/currency-converter')}
              className="glass-card p-4 text-center hover:scale-105 transition group"
            >
              <DollarSign className="mx-auto mb-2 text-green-400 group-hover:scale-110 transition" size={32} />
              <p className="text-sm font-bold">{t('driving.currency', 'Conversor')}</p>
              <p className="text-xs text-slate-400">{t('driving.currency_sub', 'Monedas')}</p>
            </button>

            <button className="glass-card p-4 text-center hover:scale-105 transition group opacity-50 cursor-not-allowed">
              <FileText className="mx-auto mb-2 text-blue-400" size={32} />
              <p className="text-sm font-bold">{t('driving.visas', 'Visas')}</p>
              <p className="text-xs text-slate-400">{t('driving.visas_sub', 'Próximamente')}</p>
            </button>

            <button className="glass-card p-4 text-center hover:scale-105 transition group opacity-50 cursor-not-allowed">
              <MapPin className="mx-auto mb-2 text-red-400" size={32} />
              <p className="text-sm font-bold">{t('driving.map', 'Mapa')}</p>
              <p className="text-xs text-slate-400">{t('driving.map_sub', 'Próximamente')}</p>
            </button>

            <button className="glass-card p-4 text-center hover:scale-105 transition group opacity-50 cursor-not-allowed">
              <TrendingUp className="mx-auto mb-2 text-orange-400" size=32} />
              <p className="text-sm font-bold">{t('driving.tips', 'Consejos')}</p>
              <p className="text-xs text-slate-400">{t('driving.tips_sub', 'Próximamente')}</p>
            </button>
          </div>
        </section>

        {/* Ciudades con Restricciones Severas */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
            <AlertTriangle className="text-red-400" size={20} />
            {t('driving.extreme_cities', 'Restricciones Extremas')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {extremeCities.map((city) => (
              <button
                key={city.id}
                onClick={() => handleCityClick(city.id)}
                className="glass-card p-4 text-left hover:scale-105 transition group"
                data-testid={`city-card-${city.id}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-3xl">{city.flag}</span>
                  <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[9px] font-bold uppercase rounded-full border border-red-400/30">
                    {t('driving.extreme_badge', 'Extremo')}
                  </span>
                </div>
                <h3 className="font-bold text-white group-hover:text-blue-400 transition">
                  {city.city}
                </h3>
                <p className="text-xs text-slate-400">{city.country}</p>
                <p className="text-[10px] text-slate-500 mt-1">
                  {city.restrictions[0]?.type || t('driving.see_details', 'Ver detalles')}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* Restricciones Altas */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
            <Car className="text-orange-400" size={20} />
            {t('driving.high_cities', 'Restricciones Altas')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {highCities.map((city) => (
              <button
                key={city.id}
                onClick={() => handleCityClick(city.id)}
                className="glass-card p-3 text-left hover:scale-105 transition group"
                data-testid={`city-card-${city.id}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl">{city.flag}</span>
                  <span className="px-1.5 py-0.5 bg-orange-500/20 text-orange-400 text-[8px] font-bold uppercase rounded-full">
                    {t('driving.high_badge', 'Alto')}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition">
                  {city.city}
                </h3>
                <p className="text-[10px] text-slate-400">{city.country}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Todas las Ciudades */}
        {searchQuery && (
          <section>
            <h2 className="text-lg font-bold mb-4 text-white">
              🔍 {t('driving.results', 'Resultados de búsqueda')}
            </h2>
            {filteredCities.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {filteredCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleCityClick(city.id)}
                    className="glass-card p-4 text-left hover:scale-105 transition"
                  >
                    <span className="text-3xl mb-2 block">{city.flag}</span>
                    <h3 className="font-bold text-white">{city.city}</h3>
                    <p className="text-xs text-slate-400">{city.country}</p>
                  </button>
                ))}
              </div>
            ) : (
              <div className="glass-card p-8 text-center">
                <p className="text-slate-400">
                  {t('driving.no_results', 'No se encontraron resultados')}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Info Box */}
        <div className="glass-card p-4 mt-8 border-l-4 border-blue-400">
          <p className="text-sm text-slate-300">
            <span className="font-bold text-blue-400">ℹ️ Nota:</span>{' '}
            {t('driving.demo_note', 'Datos demo actualizados. En producción se conectarán APIs en tiempo real.')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrivingGuide;
