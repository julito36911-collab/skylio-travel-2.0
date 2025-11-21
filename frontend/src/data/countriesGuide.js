// Guías de 35 países más turísticos del mundo organizados por continente
// Con información práctica, cultural y datos útiles para viajeros

export const countriesGuide = [
  // ===== EUROPA (15 países) =====
  {
    id: 'francia',
    name: 'Francia',
    continent: 'Europa',
    flag: '🇫🇷',
    capital: 'París',
    population: '67.8 millones',
    languages: ['Francés'],
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
    timezone: 'CET (UTC+1)',
    
    mainCities: ['París', 'Marsella', 'Lyon', 'Niza', 'Toulouse', 'Burdeos', 'Estrasburgo'],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 días sin visa para muchos países',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'Junio-Agosto (verano)',
      shoulder: 'Abril-Mayo, Sept-Oct (ideal)',
      low: 'Nov-Marzo (frío, menos turistas)',
      notes: 'Primavera y otoño son perfectos para evitar multitudes'
    },
    
    budget: {
      low: '€50-80/día (hostels, comida barata)',
      medium: '€100-200/día (hoteles medios, restaurantes)',
      high: '€250+/día (lujo)'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, E',
      emergency: '112',
      tipping: '5-10% en restaurantes (no obligatorio)',
      bargaining: 'No común, solo en mercados de pulgas'
    },
    
    culture: {
      traditions: [
        'La gastronomía es arte nacional',
        'Beso en ambas mejillas como saludo',
        'Pausa larga para almorzar (12-14h)',
        'Agosto = vacaciones nacionales'
      ],
      festivals: [
        'Día de la Bastilla (14 julio)',
        'Cannes Film Festival (mayo)',
        'Tour de France (julio)',
        'Fête de la Musique (21 junio)'
      ],
      etiquette: [
        'Saluda con "Bonjour" siempre',
        'No hables en voz alta en público',
        'Aprende francés básico (lo aprecian)',
        'Reserva en restaurantes con anticipación'
      ]
    },
    
    food: {
      mustTry: [
        'Croissant y pain au chocolat',
        'Quesos franceses (Brie, Camembert)',
        'Escargots (caracoles)',
        'Coq au vin',
        'Crème brûlée',
        'Vinos de Burdeos y Champagne'
      ],
      foodTips: [
        'Panadería cada mañana',
        'Menú del día = mejor valor',
        'Agua del grifo gratis ("carafe d\'eau")'
      ]
    },
    
    highlights: [
      'Torre Eiffel y París',
      'Costa Azul (Niza, Cannes)',
      'Valle del Loira (castillos)',
      'Mont Saint-Michel',
      'Alpes franceses',
      'Provenza (campos de lavanda)'
    ],
    
    safety: {
      level: 'Seguro en general',
      warnings: [
        'Carteristas en París (metro, Torre Eiffel)',
        'Estafas de "anillo de oro" en turísticas',
        'Cuidado con equipaje en trenes'
      ]
    }
  },

  {
    id: 'espana',
    name: 'España',
    continent: 'Europa',
    flag: '🇪🇸',
    capital: 'Madrid',
    population: '47.4 millones',
    languages: ['Español', 'Catalán', 'Euskera', 'Gallego'],
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
    timezone: 'CET (UTC+1)',
    
    mainCities: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Málaga', 'Bilbao', 'Granada'],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 días sin visa para muchos países',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'Junio-Agosto (muy caluroso)',
      shoulder: 'Abril-Mayo, Sept-Oct (perfecto)',
      low: 'Nov-Marzo (templado, menos turistas)',
      notes: 'Evita agosto si puedes - todo cierra por vacaciones'
    },
    
    budget: {
      low: '€40-70/día',
      medium: '€80-150/día',
      high: '€200+/día'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, F',
      emergency: '112',
      tipping: '5-10% opcional',
      bargaining: 'Solo en mercados'
    },
    
    culture: {
      traditions: [
        'Siesta (14-17h) - muchas tiendas cierran',
        'Cena tarde (21-23h)',
        'Tapas como estilo de vida',
        'Fiesta y vida nocturna hasta tarde'
      ],
      festivals: [
        'La Tomatina (Buñol, agosto)',
        'San Fermín - Running of Bulls (Pamplona, julio)',
        'Semana Santa (marzo/abril)',
        'Feria de Abril (Sevilla)'
      ],
      etiquette: [
        'Saluda con dos besos',
        'Habla en voz alta - es normal',
        'No te apures - ritmo relajado',
        'Aprende "gracias" y "por favor"'
      ]
    },
    
    food: {
      mustTry: [
        'Paella valenciana',
        'Jamón ibérico',
        'Tapas variadas',
        'Gazpacho',
        'Churros con chocolate',
        'Tortilla española'
      ],
      foodTips: [
        'Menú del día = comida completa barata',
        'Tapas gratis con bebida en Sur',
        'Mercados locales = auténtico'
      ]
    },
    
    highlights: [
      'Sagrada Familia (Barcelona)',
      'Alhambra (Granada)',
      'Parque Güell (Barcelona)',
      'Museo del Prado (Madrid)',
      'Camino de Santiago',
      'Ibiza y playas mediterráneas'
    ],
    
    safety: {
      level: 'Muy seguro',
      warnings: [
        'Carteristas en Barcelona (Las Ramblas)',
        'Estafas de pollitos (juego de cartas)',
        'No dejar bolsos en sillas de terraza'
      ]
    }
  },

  {
    id: 'italia',
    name: 'Italia',
    continent: 'Europa',
    flag: '🇮🇹',
    capital: 'Roma',
    population: '60.4 millones',
    languages: ['Italiano'],
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
    timezone: 'CET (UTC+1)',
    
    mainCities: ['Roma', 'Milán', 'Venecia', 'Florencia', 'Nápoles', 'Bolonia', 'Turín'],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 días sin visa para muchos países',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'Junio-Agosto (muy lleno)',
      shoulder: 'Abril-Mayo, Sept-Oct (ideal)',
      low: 'Nov-Marzo (frío, lluvia)',
      notes: 'Primavera = perfecto para ciudades'
    },
    
    budget: {
      low: '€50-80/día',
      medium: '€100-180/día',
      high: '€250+/día'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, F, L',
      emergency: '112',
      tipping: 'Redondear cuenta, no obligatorio',
      bargaining: 'Solo en mercados callejeros'
    },
    
    culture: {
      traditions: [
        'Familia es lo más importante',
        'Paseo vespertino (passeggiata)',
        'Café espresso de pie en barra',
        'Almuerzo principal del día'
      ],
      festivals: [
        'Carnaval de Venecia (feb)',
        'Palio di Siena (carreras de caballos, julio-agosto)',
        'Festival de Cine de Venecia (sept)',
        'Semana Santa en Roma'
      ],
      etiquette: [
        'Saludo con dos besos',
        'Viste bien - apariencia importante',
        'No cappuccino después de 11 AM',
        'No pizza con piña (¡nunca!)'
      ]
    },
    
    food: {
      mustTry: [
        'Pizza napolitana auténtica',
        'Pasta carbonara (Roma)',
        'Gelato artesanal',
        'Risotto (Milán)',
        'Bistecca fiorentina',
        'Tiramisú'
      ],
      foodTips: [
        'Evita restaurantes turísticos',
        'Busca "trattoria" local',
        'Coperto = cargo por cubiertos (normal)',
        'Agua mineral = se paga'
      ]
    },
    
    highlights: [
      'Coliseo y Foro Romano',
      'Canales de Venecia',
      'Galería Uffizi (Florencia)',
      'Costa Amalfitana',
      'Cinque Terre',
      'Vaticano y Capilla Sixtina'
    ],
    
    safety: {
      level: 'Seguro generalmente',
      warnings: [
        'Carteristas en Roma, Milán, Venecia',
        'Estafas de "gladiadores" en Coliseo',
        'Cuidado con taxis no oficiales',
        'ZTL = multas automáticas para autos'
      ]
    }
  },

  {
    id: 'reino-unido',
    name: 'Reino Unido',
    continent: 'Europa',
    flag: '🇬🇧',
    capital: 'Londres',
    population: '67.3 millones',
    languages: ['Inglés', 'Galés', 'Gaélico escocés'],
    currency: { code: 'GBP', symbol: '£', name: 'Libra esterlina' },
    timezone: 'GMT (UTC+0)',
    
    mainCities: ['Londres', 'Edimburgo', 'Manchester', 'Liverpool', 'Glasgow', 'Bristol', 'Oxford'],
    
    visa: {
      schengen: false,
      requirements: 'Visa según nacionalidad - verificar GOV.UK',
      visaOnArrival: 'Depende del país de origen'
    },
    
    bestTime: {
      high: 'Junio-Agosto (mejor clima)',
      shoulder: 'Abril-Mayo, Sept (bueno)',
      low: 'Oct-Marzo (frío, lluvia)',
      notes: 'Siempre lleva paraguas'
    },
    
    budget: {
      low: '£50-80/día',
      medium: '£100-200/día',
      high: '£300+/día'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'G (3 pines)',
      emergency: '999',
      tipping: '10-15% en restaurantes',
      bargaining: 'No común'
    },
    
    culture: {
      traditions: [
        'Té de las 5 (afternoon tea)',
        'Hacer fila = sagrado',
        'Pubs como centro social',
        'Fútbol = religión'
      ],
      festivals: [
        'Edinburgh Fringe Festival (agosto)',
        'Notting Hill Carnival (Londres, agosto)',
        'Wimbledon (tenis, junio-julio)',
        'Bonfire Night (5 nov)'
      ],
      etiquette: [
        'Siempre di "please", "thank you", "sorry"',
        'Respeta las filas - nunca te saltes',
        'Conversa sobre el clima',
        'No hables en transporte público'
      ]
    },
    
    food: {
      mustTry: [
        'Fish & Chips',
        'Full English Breakfast',
        'Roast dinner dominical',
        'Shepherd\'s Pie',
        'Sticky Toffee Pudding',
        'Curry (plato nacional adoptado)'
      ],
      foodTips: [
        'Pubs = comida honesta y barata',
        'Mercados de comida callejera',
        'Cadenas Pret, Greggs = baratas'
      ]
    },
    
    highlights: [
      'Torre de Londres y Big Ben',
      'Stonehenge',
      'Castillo de Edimburgo',
      'Lake District',
      'Cotswolds',
      'Museos gratis en Londres'
    ],
    
    safety: {
      level: 'Muy seguro',
      warnings: [
        'Carteristas en metro de Londres',
        'Cuidado con borrachos los fines de semana',
        'Mira a la derecha al cruzar (conducen al revés)'
      ]
    }
  },

  {
    id: 'alemania',
    name: 'Alemania',
    continent: 'Europa',
    flag: '🇩🇪',
    capital: 'Berlín',
    population: '83.2 millones',
    languages: ['Alemán'],
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
    timezone: 'CET (UTC+1)',
    
    mainCities: ['Berlín', 'Múnich', 'Hamburgo', 'Fráncfort', 'Colonia', 'Stuttgart', 'Dresde'],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 días sin visa para muchos países',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'Mayo-Sept (cálido)',
      shoulder: 'Abril, Oct (agradable)',
      low: 'Nov-Marzo (frío)',
      notes: 'Diciembre = mercados navideños hermosos'
    },
    
    budget: {
      low: '€45-75/día',
      medium: '€90-160/día',
      high: '€200+/día'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, F',
      emergency: '112',
      tipping: '5-10% redondear',
      bargaining: 'No común'
    },
    
    culture: {
      traditions: [
        'Puntualidad = esencial',
        'Domingo = día de descanso (tiendas cerradas)',
        'Cerveza parte de cultura',
        'Reciclaje muy importante'
      ],
      festivals: [
        'Oktoberfest (Múnich, sept-oct)',
        'Carnaval (Colonia, feb)',
        'Mercados Navideños (dic)',
        'Love Parade (Berlín, julio)'
      ],
      etiquette: [
        'Sé puntual siempre',
        'Directo y honesto en comunicación',
        'No cruces semáforo en rojo',
        'Separa tu basura correctamente'
      ]
    },
    
    food: {
      mustTry: [
        'Currywurst',
        'Schnitzel',
        'Pretzels (Brezel)',
        'Bratwurst',
        'Sauerbraten',
        'Black Forest Cake'
      ],
      foodTips: [
        'Cervecerías (biergarten) = experiencia local',
        'Döner kebab = comida rápida favorita',
        'Panadería alemana = increíble'
      ]
    },
    
    highlights: [
      'Muro de Berlín y Puerta de Brandeburgo',
      'Castillo Neuschwanstein',
      'Oktoberfest',
      'Selva Negra',
      'Valle del Rin',
      'Campo de concentración Dachau'
    ],
    
    safety: {
      level: 'Muy seguro',
      warnings: [
        'Carteristas en áreas turísticas',
        'Zonas de fiesta pueden ser rudas de noche'
      ]
    }
  },

  // Continuaré con más países en el siguiente bloque...
  // Faltan: Grecia, Países Bajos, Suiza, Portugal, Austria, Croacia, Turquía, República Checa, Polonia, Noruega
];

// Funciones helper
export const getCountryById = (id) => {
  return countriesGuide.find(country => country.id === id);
};

export const getCountriesByContinent = (continent) => {
  return countriesGuide.filter(country => country.continent === continent);
};

export const searchCountries = (query) => {
  const lowerQuery = query.toLowerCase();
  return countriesGuide.filter(country => 
    country.name.toLowerCase().includes(lowerQuery) ||
    country.capital.toLowerCase().includes(lowerQuery) ||
    country.mainCities.some(city => city.toLowerCase().includes(lowerQuery))
  );
};

export const continentsList = ['Europa', 'América', 'Asia', 'África', 'Oceanía'];
