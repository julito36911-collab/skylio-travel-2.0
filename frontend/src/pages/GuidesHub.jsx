import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { drivingRestrictions } from '../data/drivingRestrictions';
import { mustSeeDestinations as destinationsEs, continents } from '../data/mustSeeDestinations_es';
import { mustSeeDestinations as destinationsEn } from '../data/mustSeeDestinations_en';

function GuidesHub() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('destinations');
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Cargar datos de países según idioma activo
  const getCountriesData = () => {
    try {
      if (i18n.language === 'es') {
        return require('../data/countriesGuide_es').countriesGuide;
      } else {
        return require('../data/countriesGuide_en').countriesGuide;
      }
    } catch (error) {
      console.error('Error loading countries data:', error);
      return [];
    }
  };

  const countriesData = getCountriesData();

  // Cargar datos de destinos según idioma activo
  const mustSeeDestinations = useMemo(() => {
    if (i18n.language === 'en') {
      return destinationsEn;
    } else {
      // Spanish (default)
      return destinationsEs;
    }
  }, [i18n.language]);

  // Filtrar destinos por continente y búsqueda
  const filteredDestinations = mustSeeDestinations.filter(dest => {
    const matchesContinent = selectedContinent === 'all' || dest.continent === selectedContinent;
    const lowerQuery = searchQuery.toLowerCase();
    const matchesSearch = (dest.name || '').toLowerCase().includes(lowerQuery) ||
                          (dest.city || '').toLowerCase().includes(lowerQuery) ||
                          (dest.country || '').toLowerCase().includes(lowerQuery);
    return matchesContinent && matchesSearch;
  });

  // Filtrar restricciones de conducción
  const filteredDriving = drivingRestrictions.filter(city => {
    const lowerQuery = searchQuery.toLowerCase();
    return (city.city || '').toLowerCase().includes(lowerQuery) ||
           (city.country || '').toLowerCase().includes(lowerQuery);
  });

  // Filtrar países
  const filteredCountries = countriesData.filter(country => {
    const matchesContinent = selectedContinent === 'all' || country.continent === selectedContinent;
    const lowerQuery = searchQuery.toLowerCase();
    const matchesSearch = (country.name || '').toLowerCase().includes(lowerQuery) ||
                          (country.capital || '').toLowerCase().includes(lowerQuery) ||
                          (country.mainCities || []).some(city => city.toLowerCase().includes(lowerQuery));
    return matchesContinent && matchesSearch;
  });

  // Transform driving data for easier rendering
  const transformedDriving = filteredDriving.map(city => {
    // Extract simple details from complex structure
    const details = [];
    if (city.restrictions && city.restrictions.length > 0) {
      city.restrictions.forEach(r => {
        details.push(`${r.type}: ${r.description || r.name}`);
        if (r.schedule) {
          details.push(`Horario: Lun-Vie ${r.schedule.weekdays || 'Variable'}`);
        }
        if (r.fines) {
          details.push(`Multa: ${r.fines.amount} ${r.fines.currency}`);
        }
      });
    }

    // Extract alternatives as strings
    const alternatives = [];
    if (city.alternatives && city.alternatives.length > 0) {
      city.alternatives.forEach(alt => {
        if (alt.type === 'PARKING') {
          alternatives.push(`🅿️ ${alt.name}: ${alt.price} - ${alt.recommendation || alt.distance}`);
        } else if (alt.type === 'PUBLIC_TRANSPORT') {
          alternatives.push(`🚇 Transporte Público: ${alt.options?.join(', ') || ''} - Ticket: ${alt.ticketPrice}`);
        } else if (alt.type === 'BIKE_SCOOTER') {
          alternatives.push(`🛴 Scooters: ${alt.services?.join(', ') || ''}`);
        }
      });
    }

    // Determinar continente basado en el país
    const getContinent = (country) => {
      const europeanCountries = ['Italia', 'Italy', 'Francia', 'France', 'España', 'Spain', 'Reino Unido', 'United Kingdom', 'Alemania', 'Germany', 'Países Bajos', 'Netherlands'];
      const americanCountries = ['Estados Unidos', 'United States', 'USA', 'México', 'Mexico', 'Canadá', 'Canada', 'Brasil', 'Brazil', 'Argentina', 'Chile', 'Colombia', 'Perú', 'Peru'];
      const asianCountries = ['Japón', 'Japan', 'China', 'India', 'Tailandia', 'Thailand', 'Singapur', 'Singapore'];
      
      if (europeanCountries.includes(country)) return 'Europa';
      if (americanCountries.includes(country)) return 'América';
      if (asianCountries.includes(country)) return 'Asia';
      return 'Europa'; // Default
    };

    return {
      ...city,
      name: city.city,
      continent: getContinent(city.country),
      hasLEZ: city.restrictions?.some(r => r.type === 'LEZ'),
      hasZTL: city.restrictions?.some(r => r.type === 'ZTL'),
      hasCongestionCharge: city.restrictions?.some(r => r.type === 'CONGESTION_CHARGE'),
      details,
      alternatives,
      description: city.restrictions?.[0]?.description || `${t('guides.trafficRestrictions')} ${city.city}`
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            {t('guides.title', 'Guías de Viaje')}
          </h1>
          <p className="text-xl text-gray-300">
            {t('guides.subtitle', 'Información esencial para tus próximos destinos')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <button
            onClick={() => { setActiveTab('destinations'); setSelectedContinent('all'); }}
            className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
              activeTab === 'destinations'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            🌍 {t('guides.destinations', 'Destinos Imperdibles')}
          </button>
          <button
            onClick={() => { setActiveTab('countries'); setSelectedContinent('all'); }}
            className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
              activeTab === 'countries'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            🏳️ {t('guides.countries', 'Países')}
          </button>
          <button
            onClick={() => { setActiveTab('driving'); setSelectedContinent('all'); }}
            className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
              activeTab === 'driving'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            🚗 {t('guides.driving', 'Restricciones de Conducción')}
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <input
            type="text"
            placeholder={t('guides.search', 'Buscar destino, ciudad o país...')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Continent Filter (para destinos y países) */}
        {(activeTab === 'destinations' || activeTab === 'countries') && (
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            <button
              onClick={() => setSelectedContinent('all')}
              className={`px-6 py-2 rounded-xl font-medium transition-all ${
                selectedContinent === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {t('guides.all', 'Todos')}
            </button>
            {continents.map(continent => (
              <button
                key={continent}
                onClick={() => setSelectedContinent(continent)}
                className={`px-6 py-2 rounded-xl font-medium transition-all ${
                  selectedContinent === continent
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {continent}
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        {activeTab === 'destinations' && <DestinationsGrid destinations={filteredDestinations} />}
        {activeTab === 'countries' && <CountriesGrid countries={filteredCountries} />}
        {activeTab === 'driving' && <DrivingGrid cities={transformedDriving} />}
      </div>
    </div>
  );
}

// Componente para mostrar los destinos en grid
function DestinationsGrid({ destinations }) {
  const { t } = useTranslation();

  if (destinations.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        {t('guides.noResults', 'No se encontraron resultados')}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {destinations.map(dest => (
        <DestinationCard key={dest.id} destination={dest} />
      ))}
    </div>
  );
}

// Tarjeta individual de destino
function DestinationCard({ destination }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowDetails(true)}
        className="group cursor-pointer bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
            <p className="text-gray-300">{destination.flag} {destination.city}, {destination.country}</p>
          </div>
          <span className="text-4xl">{getCategoryIcon(destination.category)}</span>
        </div>

        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {destination.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full">
            {destination.category}
          </span>
          <span className="text-blue-400 group-hover:text-blue-300 font-medium">
            Ver detalles →
          </span>
        </div>
      </div>

      {showDetails && (
        <DestinationModal destination={destination} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
}

// Modal con detalles completos del destino
function DestinationModal({ destination, onClose }) {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-gray-900 rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h2 className="text-4xl font-bold text-white">{destination.name}</h2>
                
                {/* Wikipedia Button */}
                {destination.wikiLinks && (
                  <a
                    href={destination.wikiLinks[i18n.language] || destination.wikiLinks.en}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all border border-white/30 hover:border-white/50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-white text-sm font-semibold">Wikipedia</span>
                    <svg 
                      className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                
                {/* YouTube Button */}
                {destination.youtubeLinks && (
                  <a
                    href={destination.youtubeLinks[i18n.language] || destination.youtubeLinks.en}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2 bg-red-600/80 hover:bg-red-600 backdrop-blur-sm rounded-full transition-all border border-red-500/50 hover:border-red-400"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-white text-sm font-semibold">YouTube</span>
                    <svg 
                      className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-xl text-blue-100">
                {destination.flag} {destination.city}, {destination.country}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Descripción */}
          <div>
            <p className="text-gray-300 text-lg">{destination.description}</p>
          </div>

          {/* Datos esenciales */}
          <Section title={`📌 ${t('guides.mustKnow')}`} items={destination.mustKnow} />

          {/* Qué hacer */}
          {destination.whatToDo && destination.whatToDo.length > 0 && (
            <Section title={`✨ ${t('guides.whatToDo')}`} items={destination.whatToDo} />
          )}

          {/* Cómo llegar */}
          {destination.howToGetThere && Object.keys(destination.howToGetThere).length > 0 && (
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">🚌 {t('guides.howToGetThere')}</h3>
              <div className="space-y-2">
                {Object.entries(destination.howToGetThere).map(([key, value]) => (
                  <p key={key} className="text-gray-300">
                    <span className="font-semibold capitalize text-blue-400">{key.replace(/_/g, ' ')}:</span> {value}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Tickets */}
          {destination.tickets && Object.keys(destination.tickets).length > 0 && (
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">🎫 {t('guides.prices')}</h3>
              <div className="space-y-2">
                {Object.entries(destination.tickets).map(([key, value]) => (
                  <p key={key} className="text-gray-300">
                    <span className="font-semibold capitalize text-green-400">{key.replace(/_/g, ' ')}:</span> {value}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Mejor momento */}
          {destination.bestTime && Object.keys(destination.bestTime).length > 0 && (
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">📅 {t('guides.bestTimeToVisit')}</h3>
              <div className="space-y-2">
                {Object.entries(destination.bestTime).map(([key, value]) => (
                  <p key={key} className="text-gray-300">
                    <span className="font-semibold capitalize text-yellow-400">{key.replace(/_/g, ' ')}:</span> {value}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Lugares cercanos */}
          {destination.nearby && destination.nearby.length > 0 && (
            <Section title={`📍 ${t('guides.nearbyPlaces')}`} items={destination.nearby} />
          )}

          {/* Tips */}
          <Section title={`💡 ${t('guides.importantTips')}`} items={destination.tips} highlight={true} />

          {/* Info adicional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">♿ {t('guides.accessibility')}</p>
              <p className="text-white">{destination.accessibility}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">⏱️ {t('guides.duration')}</p>
              <p className="text-white">{destination.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente reutilizable para secciones con listas
function Section({ title, items, highlight = false }) {
  return (
    <div className={`rounded-2xl p-5 border ${highlight ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/5 border-white/10'}`}>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-300">
            <span className={`mt-1 ${highlight ? 'text-yellow-400' : 'text-blue-400'}`}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Grid para restricciones de conducción (agrupado por país)
function DrivingGrid({ cities }) {
  const { t } = useTranslation();

  if (cities.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        {t('guides.noResults', 'No se encontraron resultados')}
      </div>
    );
  }

  // Agrupar ciudades por país
  const citiesByCountry = cities.reduce((acc, city) => {
    if (!acc[city.country]) {
      acc[city.country] = {
        cities: [],
        flag: city.flag,
        continent: city.continent || 'Europa'
      };
    }
    acc[city.country].cities.push(city);
    return acc;
  }, {});

  // Agrupar países por continente
  const countriesByContinent = Object.entries(citiesByCountry).reduce((acc, [country, data]) => {
    const continent = data.continent;
    if (!acc[continent]) {
      acc[continent] = [];
    }
    acc[continent].push({ country, ...data });
    return acc;
  }, {});

  // Ordenar continentes
  const continentOrder = ['Europa', 'Europe', 'América', 'Americas', 'Asia', 'África', 'Africa', 'Oceanía', 'Oceania'];
  const sortedContinents = Object.keys(countriesByContinent).sort((a, b) => {
    return continentOrder.indexOf(a) - continentOrder.indexOf(b);
  });

  return (
    <div className="space-y-8">
      {sortedContinents.map(continent => (
        <div key={continent}>
          {/* Título del continente */}
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🌍</span>
            {continent}
          </h2>
          
          {/* Países del continente */}
          <div className="space-y-6">
            {countriesByContinent[continent].map(({ country, flag, cities: countryCities }) => (
              <div key={country}>
                {/* Título del país */}
                <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center gap-2">
                  <span className="text-2xl">{flag}</span>
                  {country}
                  <span className="text-sm text-gray-400">({countryCities.length} {countryCities.length === 1 ? t('guides.city') : t('guides.cities')})</span>
                </h3>
                
                {/* Grid de ciudades */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-6">
                  {countryCities.map(city => (
                    <DrivingCard key={city.id} city={city} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Tarjeta de restricciones de conducción
function DrivingCard({ city }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowDetails(true)}
        className="group cursor-pointer bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
            <p className="text-gray-300">{city.flag} {city.country}</p>
          </div>
          <span className="text-4xl">🚗</span>
        </div>

        <div className="space-y-2 mb-4">
          {city.hasLEZ && (
            <span className="inline-block px-3 py-1 bg-red-500/30 text-red-200 rounded-full text-xs mr-2">
              LEZ
            </span>
          )}
          {city.hasZTL && (
            <span className="inline-block px-3 py-1 bg-orange-500/30 text-orange-200 rounded-full text-xs mr-2">
              ZTL
            </span>
          )}
          {city.hasCongestionCharge && (
            <span className="inline-block px-3 py-1 bg-yellow-500/30 text-yellow-200 rounded-full text-xs">
              Cargo
            </span>
          )}
        </div>

        <p className="text-blue-400 group-hover:text-blue-300 font-medium">
          Ver detalles →
        </p>
      </div>

      {showDetails && (
        <DrivingModal city={city} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
}

// Modal con detalles de restricciones de conducción
function DrivingModal({ city, onClose }) {
  const { t } = useTranslation();
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-gray-900 rounded-3xl max-w-3xl max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">{city.name}</h2>
              <p className="text-xl text-red-100">{city.flag} {city.country}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Descripción */}
          <p className="text-gray-300 text-lg">{city.description}</p>

          {/* Restricciones activas */}
          <div className="flex gap-3 flex-wrap">
            {city.hasLEZ && (
              <span className="px-4 py-2 bg-red-500/30 text-red-200 rounded-full font-semibold">
                ⚠️ LEZ {t('guides.activeRestrictions').split(' ')[1] || 'Active'}
              </span>
            )}
            {city.hasZTL && (
              <span className="px-4 py-2 bg-orange-500/30 text-orange-200 rounded-full font-semibold">
                🚫 ZTL {t('guides.activeRestrictions').split(' ')[1] || 'Active'}
              </span>
            )}
            {city.hasCongestionCharge && (
              <span className="px-4 py-2 bg-yellow-500/30 text-yellow-200 rounded-full font-semibold">
                💰 {t('guides.activeRestrictions')}
              </span>
            )}
          </div>

          {/* Detalles */}
          {city.details && <Section title={`📋 ${t('guides.drivingDetails')}`} items={city.details} />}

          {/* Alternativas */}
          {city.alternatives && <Section title={`🚇 ${t('guides.alternatives')}`} items={city.alternatives} />}

          {/* Tips */}
          {city.tips && <Section title={`💡 ${t('guides.tips')}`} items={city.tips} highlight={true} />}

          {/* Info adicional */}
          {city.payment && (
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">💳 {t('guides.howToPay')}</h3>
              <p className="text-gray-300">{city.payment}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Grid para países
function CountriesGrid({ countries }) {
  const { t } = useTranslation();

  if (countries.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        {t('guides.noResults', 'No se encontraron resultados')}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {countries.map(country => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
}

// Tarjeta individual de país
function CountryCard({ country }) {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowDetails(true)}
        className="group cursor-pointer bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-5xl">{country.flag}</span>
              <div>
                <h3 className="text-2xl font-bold text-white">{country.name}</h3>
                <p className="text-gray-300 text-sm">{country.capital}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-gray-300 text-sm">
            <span className="font-semibold text-blue-400">💬</span> {country.languages.join(', ')}
          </p>
          <p className="text-gray-300 text-sm">
            <span className="font-semibold text-green-400">💰</span> {country.currency.name} ({country.currency.symbol})
          </p>
          <p className="text-gray-300 text-sm">
            <span className="font-semibold text-purple-400">👥</span> {country.population}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {country.mainCities.slice(0, 3).map((city, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full">
              {city}
            </span>
          ))}
          {country.mainCities.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-500/20 text-gray-300 rounded-full">
              +{country.mainCities.length - 3}
            </span>
          )}
        </div>

        <p className="text-blue-400 group-hover:text-blue-300 font-medium text-sm">
          {t('guides.seeFullInfo')} →
        </p>
      </div>

      {showDetails && (
        <CountryModal country={country} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
}

// Modal con detalles completos del país
function CountryModal({ country, onClose }) {
  const { t } = useTranslation();
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-gray-900 rounded-3xl max-w-5xl max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-blue-600 p-6 rounded-t-3xl z-10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <span className="text-6xl">{country.flag}</span>
              <div>
                <h2 className="text-4xl font-bold text-white mb-1">{country.name}</h2>
                <p className="text-xl text-blue-100">{country.capital} • {country.continent}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Información básica */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard icon="💬" title={t('guides.language')} value={country.languages.join(', ')} />
            <InfoCard icon="💰" title={t('guides.currency')} value={`${country.currency.name} (${country.currency.code})`} />
            <InfoCard icon="👥" title={t('guides.population')} value={country.population} />
            <InfoCard icon="🕐" title={t('guides.timezone')} value={country.timezone} />
          </div>

          {/* Ciudades con información detallada */}
          {country.cities && country.cities.length > 0 && (
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-5 border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                🏙️ {t('guides.mainCities')} - {t('cities.title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {country.cities.map((city) => (
                  <CityCard key={city.id} city={city} countryName={country.name} />
                ))}
              </div>
            </div>
          )}

          {/* Ciudades solo nombres (si no hay info detallada) */}
          {(!country.cities || country.cities.length === 0) && (
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                🏙️ {t('guides.mainCities')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {country.mainCities.map((city, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm font-medium">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Visa */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              🛂 {t('guides.visaRequirements')}
            </h3>
            <p className="text-gray-300">{country.visa.requirements}</p>
            {country.visa.schengen && (
              <span className="inline-block mt-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                {t('guides.schengenZone')}
              </span>
            )}
          </div>

          {/* Mejor época */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-5 border border-yellow-500/20">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              ☀️ {t('guides.bestTimeToVisit')}
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><span className="font-semibold text-yellow-300">{t('guides.highSeason')}</span> {country.bestTime.high}</p>
              <p><span className="font-semibold text-green-300">{t('guides.midSeason')}</span> {country.bestTime.shoulder}</p>
              <p><span className="font-semibold text-blue-300">{t('guides.lowSeason')}</span> {country.bestTime.low}</p>
              <p className="text-sm italic mt-2">💡 {country.bestTime.notes}</p>
            </div>
          </div>

          {/* Presupuesto */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              💵 {t('guides.dailyBudget')}
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><span className="font-semibold text-green-400">{t('guides.low')}</span> {country.budget.low}</p>
              <p><span className="font-semibold text-yellow-400">{t('guides.medium')}</span> {country.budget.medium}</p>
              <p><span className="font-semibold text-red-400">{t('guides.high')}</span> {country.budget.high}</p>
            </div>
          </div>

          {/* Información práctica */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              🔌 {t('guides.practicalInfo')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-300 text-sm">
              <div><span className="font-semibold">{t('guides.voltage')}</span> {country.practical.voltage}</div>
              <div><span className="font-semibold">{t('guides.plug')}</span> {country.practical.plugType}</div>
              <div><span className="font-semibold">{t('guides.emergency')}</span> {country.practical.emergency}</div>
              <div><span className="font-semibold">{t('guides.tipping')}</span> {country.practical.tipping}</div>
              <div><span className="font-semibold">{t('guides.bargaining')}</span> {country.practical.bargaining}</div>
            </div>
          </div>

          {/* Cultura */}
          <CountrySection title={`🎭 ${t('guides.cultureAndTraditions')}`} items={country.culture.traditions} />
          <CountrySection title={`🎉 ${t('guides.importantFestivals')}`} items={country.culture.festivals} />
          <CountrySection title={`🤝 ${t('guides.etiquette')}`} items={country.culture.etiquette} highlight={true} />

          {/* Comida */}
          <CountrySection title={`🍽️ ${t('guides.typicalFood')}`} items={country.food.mustTry} />
          <CountrySection title={`💡 ${t('guides.foodTips')}`} items={country.food.foodTips} />

          {/* Lugares destacados */}
          <CountrySection title={`⭐ ${t('guides.highlights')}`} items={country.highlights} />

          {/* Seguridad */}
          <div className={`rounded-2xl p-5 border ${
            country.safety.level.includes('seguro') || country.safety.level.includes('safe')
              ? 'bg-green-500/10 border-green-500/30'
              : 'bg-yellow-500/10 border-yellow-500/30'
          }`}>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              🛡️ {t('guides.safety')}
            </h3>
            <p className="text-lg font-semibold mb-3 text-gray-200">
              {t('guides.safetyLevel')} {country.safety.level}
            </p>
            {country.safety.warnings && country.safety.warnings.length > 0 && (
              <ul className="space-y-2">
                {country.safety.warnings.map((warning, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-yellow-400 mt-1">⚠️</span>
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente para tarjetas de información
function InfoCard({ icon, title, value }) {
  return (
    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
      <p className="text-gray-400 text-xs mb-1 flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        {title}
      </p>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
}

// Componente reutilizable para secciones de país
function CountrySection({ title, items, highlight = false }) {
  return (
    <div className={`rounded-2xl p-5 border ${highlight ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/5 border-white/10'}`}>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-300">
            <span className={`mt-1 ${highlight ? 'text-blue-400' : 'text-green-400'}`}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Tarjeta de ciudad (clickeable para ver detalles)
function CityCard({ city, countryName }) {
  const { t } = useTranslation();
  const [showCityModal, setShowCityModal] = useState(false);

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShowCityModal(true);
        }}
        className="cursor-pointer bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 group"
      >
        <h4 className="text-lg font-bold text-white mb-2">{city.name}</h4>
        <p className="text-sm text-gray-300 mb-2">👥 {city.population}</p>
        <div className="flex items-center justify-between text-xs">
          <span className="text-blue-300">
            {city.airports?.length || 0} aeropuerto(s)
          </span>
          <span className="text-blue-400 group-hover:text-blue-300 font-medium">
            Ver detalles →
          </span>
        </div>
      </div>

      {showCityModal && (
        <CityModal city={city} countryName={countryName} onClose={() => setShowCityModal(false)} />
      )}
    </>
  );
}

// Modal con información completa de la ciudad
function CityModal({ city, countryName, onClose }) {
  const { t } = useTranslation();

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" style={{ zIndex: 9999 }} onClick={onClose}>
      <div
        className="bg-gray-900 rounded-3xl max-w-6xl max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-t-3xl z-10">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white mb-1">{city.name}</h2>
              <p className="text-xl text-green-100">{countryName} • 👥 {city.population}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Aeropuertos y cómo llegar */}
          {city.airports && city.airports.length > 0 && (
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border-2 border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                ✈️ Aeropuertos - Cómo Llegar al Centro
              </h3>
              
              {city.airports.map((airport, idx) => (
                <div key={idx} className="mb-6 last:mb-0">
                  <div className="bg-white/10 rounded-xl p-4 mb-4">
                    <h4 className="text-xl font-bold text-blue-300 mb-2">{airport.name}</h4>
                    <p className="text-gray-300">📍 {airport.distance}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {airport.toCity.map((option, optIdx) => (
                      <div key={optIdx} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-500/50 transition-all">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h5 className="text-lg font-bold text-white mb-1">{option.method}</h5>
                            <p className="text-sm text-gray-400 italic">{option.notes}</p>
                          </div>
                          <span className="text-2xl font-bold text-green-400">{option.price}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 text-sm">
                          <div>
                            <p className="text-gray-400">⏱️ Duración</p>
                            <p className="text-white font-semibold">{option.duration}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">🔄 Frecuencia</p>
                            <p className="text-white font-semibold">{option.frequency}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">🕐 Horario</p>
                            <p className="text-white font-semibold">{option.hours}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">🚏 Paradas</p>
                            <p className="text-white font-semibold text-xs">{option.stops}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Transporte Público */}
          {city.publicTransport && (
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                🚇 {t('cities.publicTransport')}
              </h3>

              {/* Tipos de transporte */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">{t('cities.transportTypes')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {city.publicTransport.types.map((type, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="font-bold text-white mb-1">{type.name}</p>
                      <p className="text-xs text-gray-400 mb-2">{type.lines}</p>
                      <p className="text-xs text-gray-300">🕐 {type.hours}</p>
                      <p className="text-xs text-green-400">🔄 {type.frequency}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Precios de tickets */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-300 mb-3">{t('cities.prices')}</h4>
                <div className="space-y-2">
                  {city.publicTransport.tickets.map((ticket, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <div className="flex-1">
                        <p className="font-semibold text-white">{ticket.type}</p>
                        <p className="text-xs text-gray-400">{ticket.validity}</p>
                      </div>
                      <span className="text-lg font-bold text-green-400">{ticket.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dónde comprar */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-yellow-300 mb-3">{t('cities.howToBuyTickets')}</h4>
                <ul className="space-y-2">
                  {city.publicTransport.whereToBuy.map((place, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <span className="text-yellow-400">•</span>
                      <span>{place}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mapas oficiales */}
              {city.publicTransport.officialMaps && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">{t('cities.officialMaps')}</h4>
                  <div className="space-y-2">
                    {city.publicTransport.officialMaps.map((map, idx) => (
                      <a
                        key={idx}
                        href={map.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-purple-500/20 hover:bg-purple-500/30 rounded-lg p-3 border border-purple-500/30 transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white group-hover:text-purple-300">{map.name}</span>
                          <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Apps recomendadas */}
              {city.publicTransport.apps && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">{t('cities.usefulApps')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {city.publicTransport.apps.map((app, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm">
                        📱 {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Estafas comunes */}
              {city.publicTransport.scams && (
                <div className="mb-6 bg-red-500/10 rounded-xl p-4 border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3 flex items-center gap-2">
                    ⚠️ {t('cities.commonScams')}
                  </h4>
                  <ul className="space-y-2">
                    {city.publicTransport.scams.map((scam, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        {scam}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tips */}
              {city.publicTransport.tips && (
                <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
                  <h4 className="text-lg font-semibold text-green-300 mb-3 flex items-center gap-2">
                    💡 {t('cities.tips')}
                  </h4>
                  <ul className="space-y-2">
                    {city.publicTransport.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-green-400">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Atracciones principales */}
          {city.topAttractions && (
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">{t('cities.topAttractions')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {city.topAttractions.map((attraction, idx) => {
                  const attractionData = typeof attraction === 'string' 
                    ? { name: attraction, wiki: null } 
                    : attraction;
                  
                  return (
                    <a
                      key={idx}
                      href={attractionData.wiki}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between px-4 py-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 hover:from-yellow-500/20 hover:to-orange-500/20 border border-yellow-500/30 hover:border-yellow-500/50 rounded-xl transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">⭐</span>
                        <span className="text-white font-semibold">{attractionData.name}</span>
                      </div>
                      <svg 
                        className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-all group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Barrios */}
          {city.neighborhoods && (
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">{t('cities.neighborhoods')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {city.neighborhoods.map((neighborhood, idx) => (
                  <div key={idx} className="text-sm text-gray-300">
                    📍 {neighborhood}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}

// Helper: iconos según categoría
function getCategoryIcon(category) {
  const icons = {
    'Monumento': '🗿',
    'Monumento Histórico': '🏛️',
    'Arquitectura': '🏗️',
    'Arquitectura / Religioso': '⛪',
    'Sitio Arqueológico': '🏺',
    'Ciudad / Experiencia': '🏙️',
    'Naturaleza': '🌿',
    'Naturaleza / Parque Nacional': '🏞️',
    'Urbano / Experiencia': '🌃',
    'Naturaleza / Montaña': '⛰️',
    'Templo / Arqueología': '🛕',
    'Arqueología': '⚱️',
    'Naturaleza / Safari': '🦁',
    'Naturaleza / Marina': '🐠',
    'Naturaleza / Fiordo': '⛰️',
    'Naturaleza / Sagrado': '🪨',
    'Cine / Experiencia': '🎬'
  };
  return icons[category] || '🌍';
}

export default GuidesHub;
