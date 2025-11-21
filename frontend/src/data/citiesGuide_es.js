// Guías completas de ciudades con información detallada de transporte público
// 15 ciudades principales con datos prácticos para viajeros

export const citiesGuide = [
  {
    id: 'paris',
    name: 'París',
    country: 'Francia',
    continent: 'Europa',
    flag: '🇫🇷',
    population: '2.2 millones (12M área metropolitana)',
    
    publicTransport: {
      types: [
        {
          name: 'Metro',
          icon: '🚇',
          description: '16 líneas, 308 estaciones. El más rápido para moverse.',
          hours: '5:30 AM - 1:00 AM (hasta 2:00 AM viernes/sábado)',
          frequency: 'Cada 2-8 minutos'
        },
        {
          name: 'RER',
          icon: '🚆',
          description: 'Tren regional rápido. Conecta aeropuertos y suburbios.',
          hours: '5:00 AM - 12:30 AM',
          frequency: 'Cada 10-20 minutos'
        },
        {
          name: 'Bus',
          icon: '🚌',
          description: 'Red extensa. Útil para ver la ciudad.',
          hours: '6:30 AM - 8:30 PM (algunos 24h)',
          frequency: 'Cada 5-15 minutos'
        },
        {
          name: 'Tranvía',
          icon: '🚊',
          description: '9 líneas modernas en zonas periféricas.',
          hours: '5:30 AM - 12:30 AM',
          frequency: 'Cada 4-8 minutos'
        }
      ],
      
      tickets: {
        single: 'Ticket t+ = €2.10 (válido 90 min en metro/bus/tranvía)',
        dayPass: 'Mobilis = €8.45 (zonas 1-2, 1 día ilimitado)',
        multiDay: 'Paris Visite = €13.55 (1 día) / €22.05 (2 días) / €30.10 (3 días) / €43.30 (5 días)',
        weekly: 'Navigo Semaine = €30 (lunes-domingo, todas las zonas)',
        carnet: 'Carnet 10 tickets = €17.35 (ahorro de 15%)',
        airport: 'RER B al aeropuerto CDG = €11.45'
      },
      
      whereToBuy: [
        'Máquinas automáticas en estaciones (aceptan tarjetas)',
        'Taquillas en estaciones grandes',
        'App "Bonjour RATP" - compra digital',
        'App "Île-de-France Mobilités"',
        'Tabacs (tiendas de tabacos) - solo tickets físicos'
      ],
      
      officialMaps: [
        {
          name: 'Mapa Metro PDF Oficial',
          url: 'https://www.ratp.fr/sites/default/files/plans-lignes/Plans-essentiels/Plan-Metro.pdf',
          description: 'Mapa completo del metro de París'
        },
        {
          name: 'Mapa Interactivo RATP',
          url: 'https://www.ratp.fr/en/plans-lignes',
          description: 'Todos los mapas oficiales (metro, RER, bus, tranvía)'
        },
        {
          name: 'App RATP',
          url: 'https://www.ratp.fr/apps',
          description: 'App oficial con mapas offline y tiempo real'
        }
      ],
      
      apps: [
        {
          name: 'Bonjour RATP',
          description: 'App oficial - compra tickets, mapas, tiempo real',
          platforms: 'iOS / Android'
        },
        {
          name: 'Citymapper Paris',
          description: 'Mejor app para rutas. Incluye todos los transportes.',
          platforms: 'iOS / Android'
        },
        {
          name: 'Google Maps',
          description: 'Funciona bien para transporte público en París',
          platforms: 'iOS / Android'
        }
      ],
      
      scams: [
        {
          type: 'Vendedores falsos de tickets',
          description: 'Personas vendiendo "tickets baratos" fuera de estaciones',
          warning: '⚠️ Solo compra en máquinas oficiales o taquillas RATP'
        },
        {
          type: 'Pickpockets en metro',
          description: 'Líneas 1, 4, 9 (turísticas) - grupos organizados',
          warning: '⚠️ Bolsos delante, móviles guardados, atención en aglomeraciones'
        },
        {
          type: 'Revisores falsos',
          description: 'Personas pidiendo ver tu ticket fuera de vagón',
          warning: '⚠️ Solo muestra ticket a uniformados con identificación oficial'
        },
        {
          type: '"Ayudantes" en máquinas',
          description: 'Te "ayudan" a comprar y roban tu tarjeta',
          warning: '⚠️ Rechaza ayuda, usa máquinas con cámara visible'
        },
        {
          type: 'Firma de peticiones',
          description: 'Te piden firmar y luego exigen dinero o roban',
          warning: '⚠️ Nunca firmes nada ni te detengas en estaciones'
        }
      ],
      
      tips: [
        'Valida SIEMPRE tu ticket en torniquetes (multa = €60)',
        'Guarda tickets hasta salir - pueden revisar en cualquier momento',
        'Evita línea 1 en hora pico (súper lleno)',
        'RER B al aeropuerto = más barato que taxi',
        'Último metro 1 AM (2 AM fines de semana)',
        'Domingos = horario reducido en algunos buses',
        'Niños menores 4 años = gratis',
        'Pases de museo no incluyen transporte',
        'WiFi gratis en estaciones principales',
        'App offline = descarga mapas antes'
      ]
    },
    
    topAttractions: [
      'Torre Eiffel',
      'Museo del Louvre',
      'Arco del Triunfo',
      'Notre-Dame',
      'Sacré-Cœur',
      'Campos Elíseos'
    ],
    
    neighborhoods: [
      '1er - Louvre, Tuileries (museos y lujo)',
      '4º - Le Marais (moda, gay-friendly)',
      '5º - Barrio Latino (universitario)',
      '18º - Montmartre (artístico, Sacré-Cœur)',
      '7º - Torre Eiffel (embajadas)',
      '11º - Bastilla (nocturno, moderno)'
    ],
    
    climate: {
      summer: 'Jun-Ago: 20-25°C (puede llegar a 35°C)',
      winter: 'Dic-Feb: 3-8°C (lluvia frecuente)',
      best: 'Abril-Mayo, Sept-Oct (templado, menos turistas)'
    }
  },

  {
    id: 'london',
    name: 'Londres',
    country: 'Reino Unido',
    continent: 'Europa',
    flag: '🇬🇧',
    population: '9 millones (14M área metropolitana)',
    
    publicTransport: {
      types: [
        {
          name: 'Underground (Tube)',
          icon: '🚇',
          description: '11 líneas, 272 estaciones. Icónico metro de Londres.',
          hours: '5:00 AM - 12:30 AM (Night Tube vie/sáb en algunas líneas)',
          frequency: 'Cada 2-5 minutos (hora pico)'
        },
        {
          name: 'Overground',
          icon: '🚊',
          description: 'Tren ligero que conecta zonas externas.',
          hours: '5:00 AM - 1:00 AM',
          frequency: 'Cada 5-15 minutos'
        },
        {
          name: 'Bus',
          icon: '🚌',
          description: 'Icónicos buses rojos de dos pisos. 700+ rutas.',
          hours: '24 horas (buses nocturnos con "N")',
          frequency: 'Cada 5-20 minutos'
        },
        {
          name: 'DLR',
          icon: '🚝',
          description: 'Tren ligero sin conductor. Va a Canary Wharf.',
          hours: '5:30 AM - 12:30 AM',
          frequency: 'Cada 8-15 minutos'
        },
        {
          name: 'Elizabeth Line',
          icon: '🚄',
          description: 'Nueva línea rápida. Conecta Heathrow con centro.',
          hours: '6:00 AM - 11:30 PM',
          frequency: 'Cada 5-10 minutos'
        }
      ],
      
      tickets: {
        single: 'Tube Zonas 1-2 = £6.70 (sin Oyster) / £3.20 (con Oyster)',
        dayPass: 'Oyster Card = £7.70/día máximo (zonas 1-2)',
        weekly: '7 Day Travelcard = £40.70 (zonas 1-2, ilimitado)',
        contactless: 'Tarjeta contactless = mismo precio que Oyster (más fácil)',
        airport: 'Heathrow Express = £25 / Elizabeth Line = £12.80',
        deposit: 'Oyster Card = £7 depósito (reembolsable)'
      },
      
      whereToBuy: [
        'Oyster Card: en cualquier estación de Tube (máquinas o taquilla)',
        'No necesitas comprar - usa tu tarjeta contactless directamente',
        'App TfL "Oyster and contactless"',
        'Online: tfl.gov.uk',
        'Visitor Oyster Card (turistas) - compra antes de viajar'
      ],
      
      officialMaps: [
        {
          name: 'Mapa Tube PDF Oficial',
          url: 'https://content.tfl.gov.uk/standard-tube-map.pdf',
          description: 'Icónico mapa del Underground de Londres'
        },
        {
          name: 'TfL Go App',
          url: 'https://tfl.gov.uk/maps/tfl-go',
          description: 'App oficial con mapas y tiempo real'
        },
        {
          name: 'Mapa Buses',
          url: 'https://tfl.gov.uk/maps/bus',
          description: 'Todas las rutas de buses de Londres'
        }
      ],
      
      apps: [
        {
          name: 'TfL Go',
          description: 'App oficial de Transport for London - tiempo real',
          platforms: 'iOS / Android'
        },
        {
          name: 'Citymapper London',
          description: 'La MEJOR app para Londres. Indispensable.',
          platforms: 'iOS / Android'
        },
        {
          name: 'Google Maps',
          description: 'Funciona perfectamente en Londres',
          platforms: 'iOS / Android'
        }
      ],
      
      scams: [
        {
          type: 'Taxis piratas',
          description: 'Taxis no oficiales (minicabs) cobrando de más',
          warning: '⚠️ Solo Black Cabs oficiales o Uber/Bolt'
        },
        {
          type: 'Tickets falsos',
          description: 'Vendedores de "Oyster Cards baratas" en la calle',
          warning: '⚠️ Solo compra en estaciones oficiales TfL'
        },
        {
          type: 'Carteristas en Tube',
          description: 'Líneas turísticas (Central, Piccadilly) en hora pico',
          warning: '⚠️ Bolsos delante, carteras en bolsillos frontales'
        },
        {
          type: '"Ayuda" en máquinas',
          description: 'Personas ofreciendo ayuda y robando datos',
          warning: '⚠️ Usa máquinas solo, cubre tu PIN'
        }
      ],
      
      tips: [
        'Usa tu tarjeta contactless - NO necesitas Oyster',
        'Toca IN y OUT SIEMPRE (multa máxima si olvidas)',
        'Precio máximo diario (cap) = no pagas más de £7.70/día',
        'Night Tube = viernes/sábado en 5 líneas principales',
        'Buses = solo pago contactless (no efectivo)',
        '"Mind the gap" = cuidado con el espacio al salir',
        'Escaleras de la derecha, caminar por la izquierda',
        'Elizabeth Line = la más nueva y rápida',
        'Heathrow = Tube más barato que tren expreso',
        'Descarga mapa offline (no hay señal en túneles)'
      ]
    },
    
    topAttractions: [
      'Torre de Londres',
      'Big Ben y Parlamento',
      'London Eye',
      'British Museum (gratis)',
      'Tower Bridge',
      'Buckingham Palace'
    ],
    
    neighborhoods: [
      'Westminster - Gobierno, turístico',
      'Soho - Nocturno, teatros',
      'Camden - Alternativo, mercados',
      'Shoreditch - Hipster, arte urbano',
      'Notting Hill - Colorido, mercado Portobello',
      'Canary Wharf - Financiero, moderno'
    ],
    
    climate: {
      summer: 'Jun-Ago: 15-23°C (días largos)',
      winter: 'Dic-Feb: 2-8°C (lluvia constante)',
      best: 'May-Sept (menos lluvia, días soleados)'
    }
  }
];

export const getCityById = (id) => {
  return citiesGuide.find(city => city.id === id);
};

export const getCitiesByContinent = (continent) => {
  return citiesGuide.filter(city => city.continent === continent);
};

export const searchCities = (query) => {
  const lowerQuery = query.toLowerCase();
  return citiesGuide.filter(city => 
    (city.name || '').toLowerCase().includes(lowerQuery) ||
    (city.country || '').toLowerCase().includes(lowerQuery)
  );
};
