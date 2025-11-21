import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { drivingRestrictions } from '../data/drivingRestrictions';
import { mustSeeDestinations, continents } from '../data/mustSeeDestinations';

function GuidesHub() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('destinations');
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
    return (city.name || '').toLowerCase().includes(lowerQuery) ||
           (city.country || '').toLowerCase().includes(lowerQuery);
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
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('destinations')}
            className={`px-8 py-3 rounded-2xl font-semibold transition-all ${
              activeTab === 'destinations'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            🌍 {t('guides.destinations', 'Destinos Imperdibles')}
          </button>
          <button
            onClick={() => setActiveTab('driving')}
            className={`px-8 py-3 rounded-2xl font-semibold transition-all ${
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

        {/* Continent Filter (solo para destinos) */}
        {activeTab === 'destinations' && (
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
        {activeTab === 'destinations' ? (
          <DestinationsGrid destinations={filteredDestinations} />
        ) : (
          <DrivingGrid cities={filteredDriving} />
        )}
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
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-gray-900 rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-3xl">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">{destination.name}</h2>
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
          <Section title="📌 Debes Saber" items={destination.mustKnow} />

          {/* Qué hacer */}
          <Section title="✨ Qué Hacer" items={destination.whatToDo} />

          {/* Cómo llegar */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">🚌 Cómo Llegar</h3>
            <div className="space-y-2">
              {Object.entries(destination.howToGetThere).map(([key, value]) => (
                <p key={key} className="text-gray-300">
                  <span className="font-semibold capitalize text-blue-400">{key.replace(/_/g, ' ')}:</span> {value}
                </p>
              ))}
            </div>
          </div>

          {/* Tickets */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">🎫 Precios</h3>
            <div className="space-y-2">
              {Object.entries(destination.tickets).map(([key, value]) => (
                <p key={key} className="text-gray-300">
                  <span className="font-semibold capitalize text-green-400">{key.replace(/_/g, ' ')}:</span> {value}
                </p>
              ))}
            </div>
          </div>

          {/* Mejor momento */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">📅 Mejor Momento para Visitar</h3>
            <div className="space-y-2">
              {Object.entries(destination.bestTime).map(([key, value]) => (
                <p key={key} className="text-gray-300">
                  <span className="font-semibold capitalize text-yellow-400">{key.replace(/_/g, ' ')}:</span> {value}
                </p>
              ))}
            </div>
          </div>

          {/* Lugares cercanos */}
          <Section title="📍 Lugares Cercanos" items={destination.nearby} />

          {/* Tips */}
          <Section title="💡 Tips Importantes" items={destination.tips} highlight={true} />

          {/* Info adicional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">♿ Accesibilidad</p>
              <p className="text-white">{destination.accessibility}</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-gray-400 text-sm mb-1">⏱️ Duración</p>
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

// Grid para restricciones de conducción
function DrivingGrid({ cities }) {
  const { t } = useTranslation();

  if (cities.length === 0) {
    return (
      <div className="text-center text-gray-400 py-12">
        {t('guides.noResults', 'No se encontraron resultados')}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cities.map(city => (
        <DrivingCard key={city.id} city={city} />
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
                ⚠️ LEZ Activa
              </span>
            )}
            {city.hasZTL && (
              <span className="px-4 py-2 bg-orange-500/30 text-orange-200 rounded-full font-semibold">
                🚫 ZTL Activa
              </span>
            )}
            {city.hasCongestionCharge && (
              <span className="px-4 py-2 bg-yellow-500/30 text-yellow-200 rounded-full font-semibold">
                💰 Cargo por Congestión
              </span>
            )}
          </div>

          {/* Detalles */}
          {city.details && <Section title="📋 Detalles" items={city.details} />}

          {/* Alternativas */}
          {city.alternatives && <Section title="🚇 Alternativas" items={city.alternatives} />}

          {/* Tips */}
          {city.tips && <Section title="💡 Tips" items={city.tips} highlight={true} />}

          {/* Info adicional */}
          {city.payment && (
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">💳 Cómo Pagar</h3>
              <p className="text-gray-300">{city.payment}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
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
