import React, { useEffect, useRef } from 'react';

const InteractiveMap = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  const destinations = {
    es: { 
      name: 'España', flag: '🇪🇸', coords: [40.4, -3.7], color: '#f59e0b',
      cities: [
        { name: 'Barcelona', slug: 'barcelona' },
        { name: 'Madrid', slug: 'madrid' }
      ]
    },
    fr: { 
      name: 'Francia', flag: '🇫🇷', coords: [48.8, 2.3], color: '#3b82f6',
      cities: [{ name: 'París', slug: 'paris' }]
    },
    it: { 
      name: 'Italia', flag: '🇮🇹', coords: [41.9, 12.5], color: '#10b981',
      cities: [
        { name: 'Roma', slug: 'roma' },
        { name: 'Venecia', slug: 'venecia' }
      ]
    },
    gr: { 
      name: 'Grecia', flag: '🇬🇷', coords: [36.4, 25.4], color: '#60a5fa',
      cities: [{ name: 'Santorini', slug: 'santorini' }]
    },
    gb: { 
      name: 'Reino Unido', flag: '🇬🇧', coords: [51.5, -0.1], color: '#8b5cf6',
      cities: [{ name: 'Londres', slug: 'londres' }]
    },
    ae: { 
      name: 'Emiratos Árabes', flag: '🇦🇪', coords: [25.2, 55.3], color: '#facc15',
      cities: [{ name: 'Dubai', slug: 'dubai' }]
    },
    th: { 
      name: 'Tailandia', flag: '🇹🇭', coords: [13.7, 100.5], color: '#f97316',
      cities: [{ name: 'Bangkok', slug: 'bangkok' }]
    },
    id: { 
      name: 'Indonesia', flag: '🇮🇩', coords: [-8.4, 115.2], color: '#2dd4bf',
      cities: [{ name: 'Bali', slug: 'bali' }]
    },
    mv: { 
      name: 'Maldivas', flag: '🇲🇻', coords: [3.2, 73.2], color: '#22d3ee',
      cities: [{ name: 'Maldivas', slug: 'maldivas' }]
    },
    jp: { 
      name: 'Japón', flag: '🇯🇵', coords: [35.7, 139.7], color: '#ef4444',
      cities: [{ name: 'Tokio', slug: 'tokio' }]
    },
    mx: { 
      name: 'México', flag: '🇲🇽', coords: [21.2, -86.8], color: '#ea580c',
      cities: [
        { name: 'Cancún', slug: 'cancun' },
        { name: 'Riviera Maya', slug: 'riviera-maya' }
      ]
    },
    co: { 
      name: 'Colombia', flag: '🇨🇴', coords: [10.4, -75.5], color: '#fbbf24',
      cities: [{ name: 'Cartagena', slug: 'cartagena' }]
    },
    do: { 
      name: 'República Dominicana', flag: '🇩🇴', coords: [18.5, -69.9], color: '#ef4444',
      cities: [{ name: 'Punta Cana', slug: 'punta-cana' }]
    },
    us: { 
      name: 'Estados Unidos', flag: '🇺🇸', coords: [25.8, -80.2], color: '#3b82f6',
      cities: [{ name: 'Miami', slug: 'miami' }]
    }
  };

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Wait for Leaflet to be loaded if it hasn't already
    const initMap = () => {
      const L = window.L;
      if (!L) {
        setTimeout(initMap, 100);
        return;
      }

      mapInstance.current = L.map(mapRef.current, {
        minZoom: 2,
        maxZoom: 12,
        scrollWheelZoom: true,
        zoomControl: false
      }).setView([20, 0], 2);

      L.control.zoom({ position: 'bottomright' }).addTo(mapInstance.current);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(mapInstance.current);

      Object.entries(destinations).forEach(([code, country]) => {
        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: `<div class="w-11 h-11 rounded-full border-2 border-amber-500 bg-black/80 shadow-[0_0_20px_rgba(245,158,11,0.2)] flex items-center justify-center text-2xl hover:scale-110 hover:border-[3px] transition-all duration-300">${country.flag}</div>`,
          iconSize: [44, 44],
          iconAnchor: [22, 22]
        });

        const marker = L.marker(country.coords, { icon: customIcon }).addTo(mapInstance.current);
        
        const popupContent = `
          <div class="p-1 min-w-[200px]">
            <h3 class="text-lg font-bold text-white mb-3 border-b border-white/10 pb-2">${country.flag} ${country.name}</h3>
            <p class="text-[10px] uppercase tracking-wider text-slate-400 mb-2 font-bold">Explorar ciudad:</p>
            <div class="flex flex-col gap-2">
              ${country.cities.map(city => `<a href="/destinos/${city.slug}/" class="bg-amber-500 text-black px-4 py-2 rounded-xl text-xs font-bold text-center hover:translate-y-[-2px] transition-transform shadow-lg shadow-amber-500/20">${city.name}</a>`).join('')}
            </div>
          </div>
        `;

        marker.bindPopup(popupContent, { 
          maxWidth: 280, 
          className: 'dark-popup' 
        });
      });
    };

    initMap();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative z-10">
      <div 
        ref={mapRef} 
        id="map" 
        className="w-full h-[600px] md:h-[700px] rounded-3xl border border-white/10 shadow-2xl saturate-[0.8] contrast-[1.1]" 
      />
      <style>{`
        .leaflet-popup-content-wrapper { 
          background: rgba(10, 15, 22, 0.95) !important; 
          color: #fff !important; 
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(10px) !important;
          border-radius: 20px !important;
          padding: 8px !important;
        }
        .leaflet-popup-tip { background: rgba(10, 15, 22, 0.95) !important; }
        .leaflet-container { font-family: inherit !important; background: #0a0f16 !important; }
        .custom-marker { background: transparent !important; border: none !important; }
      `}</style>
    </div>
  );
};

export default InteractiveMap;
