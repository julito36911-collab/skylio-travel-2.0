// 25 Destinos Imperdibles del Mundo - Datos Demo
// En producción, se enriquecerán con APIs de clima, mapas, etc.

export const mustSeeDestinations = [
  // ===== EUROPA =====
  {
    id: 'torre-eiffel',
    name: 'Torre Eiffel',
    city: 'París',
    country: 'Francia',
    continent: 'Europa',
    flag: '🇫🇷',
    coordinates: { lat: 48.8584, lon: 2.2945 },
    category: 'Monumento',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Torre_Eiffel',
      en: 'https://en.wikipedia.org/wiki/Eiffel_Tower',
      he: 'https://he.wikipedia.org/wiki/%D7%9E%D7%92%D7%93%D7%9C_%D7%90%D7%99%D7%99%D7%A4%D7%9C'
    },
    
    description: 'Icono mundial de París, la "Dama de Hierro" de 330m de altura construida en 1889 para la Exposición Universal.',
    
    mustKnow: [
      'Fue construida por el ingeniero Gustave Eiffel en 1889 como entrada monumental a la Exposición Universal',
      'Recibe más de 7 millones de visitantes al año, siendo el monumento de pago más visitado del mundo',
      'Cada noche, la torre se ilumina con un espectáculo de 20,000 bombillas que centellean durante 5 minutos cada hora',
      'Cuenta con 3 niveles accesibles al público, alcanzando una altura máxima de 276 metros en su cima',
      'Originalmente fue diseñada como estructura temporal y estaba programada para ser desmontada en 1909, pero se salvó gracias a su utilidad como antena de radio'
    ],
    
    whatToDo: [
      'Sube hasta la cima usando el ascensor panorámico o, si te sientes aventurero, las escaleras del primer y segundo piso',
      'Disfruta de una cena romántica en el restaurante Jules Verne, galardonado con estrella Michelin, ubicado en el segundo piso',
      'Relájate con un picnic típicamente parisino en los jardines del Champ de Mars con vista directa a la torre',
      'Captura las mejores fotografías desde la explanada de Trocadéro, considerado el punto de vista más fotogénico',
      'Presencia el mágico espectáculo de luces que ocurre cada hora al anochecer, un momento verdaderamente especial'
    ],
    
    howToGetThere: {
      metro: ['Línea 6: Bir-Hakeim', 'Línea 9: Trocadéro', 'RER C: Champ de Mars'],
      bus: ['Líneas 42, 69, 82, 87'],
      walking: '15 min desde Inválidos, 20 min desde Louvre',
      parking: 'Parking Pullman Tour Eiffel (€4-5/hora)'
    },
    
    tickets: {
      adult: '€29 (cima) / €12 (2do piso)',
      youth: '€14.50 / €6',
      child: '€7.30 / €3',
      free: 'Menores de 4 años',
      booking: 'Reserva online 2-3 meses antes (sold out rápido)',
      url: 'https://www.toureiffel.paris'
    },
    
    bestTime: {
      season: 'Primavera (abril-junio) u otoño (sept-oct)',
      timeOfDay: 'Atardecer para ver día y noche',
      avoid: 'Mediados de verano (muy lleno)'
    },
    
    nearby: [
      'Trocadéro y jardines',
      'Champ de Mars',
      'Río Sena (cruceros)',
      'Inválidos y tumba de Napoleón',
      'Museo del Quai Branly'
    ],
    
    tips: [
      'Reserva tus entradas online con varios meses de anticipación, ya que los cupos se agotan rápidamente, especialmente en temporada alta',
      'Planifica tu visita temprano en la mañana (apertura a las 8:30 AM) o al final de la tarde (después de las 8 PM) para evitar las multitudes',
      'Ten en cuenta que los días entre miércoles y domingo suelen estar más concurridos que los lunes y martes',
      'Lleva algunos snacks y bebidas contigo, ya que los precios dentro de la torre son bastante elevados',
      'Mantén tus pertenencias seguras en todo momento, pues la zona es conocida por la presencia de carteristas que aprovechan las aglomeraciones',
      'Recuerda que está prohibido el uso de drones y palos selfie por razones de seguridad'
    ],
    
    accessibility: 'Ascensores hasta 2do piso. Cima no accesible silla de ruedas.',
    duration: '2-3 horas (con subida y fotos)',
    
    weather: { temp: 15, condition: 'Templado', icon: '⛅' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'coliseo-romano',
    name: 'Coliseo Romano',
    city: 'Roma',
    country: 'Italia',
    continent: 'Europa',
    flag: '🇮🇹',
    coordinates: { lat: 41.8902, lon: 12.4922 },
    category: 'Monumento Histórico',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Coliseo',
      en: 'https://en.wikipedia.org/wiki/Colosseum',
      he: 'https://he.wikipedia.org/wiki/%D7%94%D7%A7%D7%95%D7%9C%D7%95%D7%A1%D7%99%D7%90%D7%95%D7%9D'
    },
    
    description: 'Anfiteatro más grande jamás construido (80 d.C.), símbolo del Imperio Romano donde gladiadores combatían ante 50,000 espectadores.',
    
    mustKnow: [
      'Fue construido entre los años 72 y 80 d.C. bajo el mandato de los emperadores de la dinastía Flavia',
      'Tenía capacidad para albergar entre 50,000 y 80,000 espectadores que presenciaban combates de gladiadores y espectáculos públicos',
      'Declarado Patrimonio de la Humanidad por la UNESCO en 1980, reconociendo su invaluable importancia histórica',
      'Forma parte de las 7 Maravillas del Mundo Moderno, seleccionado por votación mundial en 2007',
      'A lo largo de los siglos ha sufrido daños considerables debido a terremotos devastadores y saqueos durante la época medieval'
    ],
    
    whatToDo: [
      'Tour guiado del anfiteatro (altamente recomendado)',
      'Visitar la arena y subsuelos (hipogeo)',
      'Explorar Foro Romano y Palatino (mismo ticket)',
      'Tour nocturno especial (muy atmosférico)',
      'Realidad virtual para ver como era antes'
    ],
    
    howToGetThere: {
      metro: ['Línea B: Colosseo (salida directa)'],
      bus: ['Líneas 51, 75, 85, 87, 118'],
      walking: '15 min desde Fontana di Trevi',
      parking: 'Evitar auto (ZTL). Parking Colosseo €2.20/hora'
    },
    
    tickets: {
      adult: '€18 (Coliseo + Foro + Palatino)',
      reduced: '€4 (18-25 años UE)',
      free: 'Menores 18 años, primer domingo del mes',
      fullExperience: '€22 (incluye arena y subsuelos)',
      booking: 'Online obligatorio - elige hora específica',
      url: 'https://www.coopculture.it'
    },
    
    bestTime: {
      season: 'Primavera (marzo-mayo) u otoño (sept-nov)',
      timeOfDay: 'Apertura 8:30 AM (menos gente) o última entrada',
      avoid: 'Julio-agosto (calor extremo 40°C+)'
    },
    
    nearby: [
      'Foro Romano (ruinas imperiales)',
      'Monte Palatino (origen de Roma)',
      'Arco de Constantino',
      'Domus Aurea (palacio de Nerón)',
      'Basílica San Clemente'
    ],
    
    tips: [
      'COMPRA ONLINE con días/semanas antes',
      'Tour guiado vale la pena (€30-40)',
      'Combina con Foro y Palatino (mismo día)',
      'Lleva agua (fuentes públicas cerca)',
      'Usa sombrero y protector solar',
      'Filas de seguridad largas (llega 20 min antes)',
      'Evita "gladiadores" falsos (estafa)'
    ],
    
    accessibility: 'Ascensor hasta 2do nivel. Terreno irregular en Foro.',
    duration: '1.5-2 horas Coliseo, +2 horas Foro/Palatino',
    
    weather: { temp: 18, condition: 'Soleado', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'sagrada-familia',
    name: 'Sagrada Familia',
    city: 'Barcelona',
    country: 'España',
    continent: 'Europa',
    flag: '🇪🇸',
    coordinates: { lat: 41.4036, lon: 2.1744 },
    category: 'Arquitectura / Religioso',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Templo_Expiatorio_de_la_Sagrada_Familia',
      en: 'https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia',
      he: 'https://he.wikipedia.org/wiki/%D7%91%D7%96%D7%99%D7%9C%D7%99%D7%A7%D7%AA_%D7%94%D7%A1%D7%92%D7%A8%D7%93%D7%94_%D7%A4%D7%9E%D7%99%D7%9C%D7%99%D7%94'
    },
    
    description: 'Obra maestra de Antoni Gaudí iniciada en 1882 y aún en construcción. Basílica modernista única en el mundo con fachadas surrealistas.',
    
    mustKnow: [
      'Esta obra maestra lleva en construcción continua desde 1882, acumulando ya más de 143 años de trabajo',
      'Fue diseñada por el genial arquitecto modernista Antoni Gaudí, quien dedicó los últimos 15 años de su vida exclusivamente a este proyecto',
      'Se estima que la basílica estará completamente terminada entre 2026 y 2030, coincidiendo con el centenario de la muerte de Gaudí',
      'Ha sido reconocida como Patrimonio de la Humanidad por la UNESCO desde 1984, incluso estando aún inacabada',
      'Cuando esté completa contará con 18 torres monumentales: 12 representando a los apóstoles, 4 a los evangelistas, una a la Virgen María y la más alta a Jesucristo',
      'El propio Antoni Gaudí descansa eternamente enterrado en la cripta de su obra más ambiciosa'
    ],
    
    whatToDo: [
      'Maravíllate con el interior de la basílica y sus espectaculares vitrales que crean un juego de luces único en el mundo',
      'Sube a una de las torres utilizando el ascensor y las escaleras para disfrutar de vistas panorámicas de Barcelona',
      'Admira la fachada de la Natividad en el lado este, la única completada bajo la supervisión directa de Gaudí',
      'Observa la fachada de la Pasión en el lado oeste, diseñada con un estilo más angular y moderno',
      'Visita el museo ubicado en el sótano donde encontrarás maquetas originales y documentación histórica del proyecto',
      'Si es domingo, intenta asistir a la misa con coro que es gratuita, aunque debes llegar temprano para conseguir lugar'
    ],
    
    howToGetThere: {
      metro: ['L2 (púrpura): Sagrada Família', 'L5 (azul): Sagrada Família'],
      bus: ['Líneas 19, 33, 34, 43, 44, 50, 51'],
      walking: '20 min desde Paseo de Gracia',
      parking: 'BSM Sagrada Familia €2.95/hora'
    },
    
    tickets: {
      basic: '€26 (basílica + audioguía)',
      towers: '€36 (basílica + torre)',
      guided: '€30 (tour guiado)',
      booking: 'OBLIGATORIO online - se agota con meses',
      url: 'https://sagradafamilia.org'
    },
    
    bestTime: {
      season: 'Abril-junio o sept-oct',
      timeOfDay: '9 AM apertura (luz mañana en vitrales) o 3-4 PM (luz tarde)',
      avoid: 'Mediodía (más lleno y luz dura)'
    },
    
    nearby: [
      'Hospital de Sant Pau (modernista)',
      'Park Güell (otro Gaudí)',
      'Casa Batlló y Casa Milà (Paseo de Gracia)',
      'Recinte Modernista Sant Pau',
      'Barrio Eixample (cuadrícula urbana única)'
    ],
    
    tips: [
      'Reserva con 2-3 MESES de anticipación',
      'Mejor torre: Natividad (más bonita)',
      'Si tienes miedo alturas, no subas (escaleras estrechas)',
      'Audioguía incluida (muy informativa)',
      'Dress code: hombros y rodillas cubiertos',
      'Prohibido mochilas grandes',
      'Fotos OK pero no flash'
    ],
    
    accessibility: 'Accesible planta baja. Torres NO accesibles silla ruedas.',
    duration: '1.5-2 horas (3 horas con torres)',
    
    weather: { temp: 16, condition: 'Soleado', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'acropolis',
    name: 'Acrópolis de Atenas',
    city: 'Atenas',
    country: 'Grecia',
    continent: 'Europa',
    flag: '🇬🇷',
    coordinates: { lat: 37.9715, lon: 23.7267 },
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Acr%C3%B3polis_de_Atenas',
      en: 'https://en.wikipedia.org/wiki/Acropolis_of_Athens',
      he: 'https://he.wikipedia.org/wiki/%D7%94%D7%90%D7%A7%D7%A8%D7%95%D7%A4%D7%95%D7%9C%D7%99%D7%A1_%D7%A9%D7%9C_%D7%90%D7%AA%D7%95%D7%A0%D7%94'
    },
    category: 'Sitio Arqueológico',
    
    description: 'Ciudadela antigua en colina rocosa con el Partenón, templo dedicado a Atenea (447-432 a.C.). Símbolo de la civilización occidental.',
    
    mustKnow: [
      'Construida en Edad de Oro de Atenas (siglo V a.C.)',
      'Partenón dedicado a diosa Atenea',
      'Patrimonio UNESCO desde 1987',
      'Sufrió daños por guerra, terremotos y contaminación',
      'Muchas esculturas originales en Museo Británico (controversial)'
    ],
    
    whatToDo: [
      'Ver Partenón (templo principal)',
      'Erecteion (con Cariátides)',
      'Templo de Atenea Niké',
      'Propileos (entrada monumental)',
      'Teatro de Dionisio (al pie)',
      'Nuevo Museo de la Acrópolis (IMPERDIBLE)'
    ],
    
    howToGetThere: {
      metro: ['Línea 2 (roja): Acropoli'],
      bus: ['Líneas 230, 550'],
      walking: '15-20 min desde Plaza Syntagma',
      parking: 'Evitar auto. Parking limitado cerca'
    },
    
    tickets: {
      adult: '€20 (€10 invierno nov-mar)',
      reduced: '€10 (estudiantes)',
      free: '25 de marzo, 18 de mayo, último fin de semana de sept',
      combo: '€30 (Acrópolis + 6 sitios arqueológicos, válido 5 días)',
      museo: '€15 adicional'
    },
    
    bestTime: {
      season: 'Primavera (abril-mayo) u otoño (sept-oct)',
      timeOfDay: '8 AM apertura o después 5 PM',
      avoid: 'Verano mediodía (mármol refleja calor, 40°C+)'
    },
    
    nearby: [
      'Nuevo Museo de la Acrópolis (obligatorio)',
      'Ágora Antigua',
      'Barrio Plaka (calles pintorescas)',
      'Colina Filopapo (mejores vistas)',
      'Teatro de Herodes Ático'
    ],
    
    tips: [
      'Ve TEMPRANO (8 AM) - calor brutal después',
      'Lleva agua, sombrero, protector solar',
      'Calzado antideslizante (mármol resbaladizo)',
      'Tickets online para evitar fila',
      'Combo 5 días vale la pena',
      'Museo Acrópolis es obligatorio',
      'Pocas sombras, prepárate para sol'
    ],
    
    accessibility: 'Camino pavimentado pero empinado. Ascensor disponible.',
    duration: '2 horas (Acrópolis), +1.5 horas (museo)',
    
    weather: { temp: 20, condition: 'Soleado', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'venecia-canales',
    name: 'Canales de Venecia',
    city: 'Venecia',
    country: 'Italia',
    continent: 'Europa',
    flag: '🇮🇹',
    coordinates: { lat: 45.4408, lon: 12.3155 },
    category: 'Ciudad / Experiencia',
    
    description: 'Ciudad única construida sobre 118 islas con 150 canales y 400 puentes. Sin autos, solo góndolas y vaporettos.',
    
    mustKnow: [
      'Fundada en siglo V',
      '118 islas conectadas por 400+ puentes',
      'Gran Canal: arteria principal (3.8 km)',
      'Se hunde 1-2mm por año',
      'Población: 50,000 (era 175,000 en 1950)',
      'Patrimonio UNESCO en peligro'
    ],
    
    whatToDo: [
      'Paseo en góndola (€80-100 / 30 min)',
      'Plaza San Marcos y Basílica',
      'Palacio Ducal (Palazzo Ducale)',
      'Puente de Rialto',
      'Islas: Murano (vidrio), Burano (casas colores)',
      'Perderse en callejones sin mapa'
    ],
    
    howToGetThere: {
      train: 'Estación Santa Lucia (llegada desde toda Europa)',
      bus: 'Piazzale Roma (terminal buses)',
      airport: 'Marco Polo Airport + water taxi o bus',
      car: 'Aparcar en Tronchetto o Piazzale Roma (€30/día)',
      vaporetto: 'Líneas 1 y 2 (€9.50 por viaje, €25 día)'
    },
    
    tickets: {
      vaporetto_single: '€9.50 (75 min)',
      vaporetto_day: '€25',
      gondola: '€80 (día) / €100 (noche) - 30 min',
      museums_pass: '€30 (11 museos cívicos)',
      church_pass: '€12 (16 iglesias)'
    },
    
    bestTime: {
      season: 'Abril-mayo o sept-oct (menos turistas)',
      timeOfDay: 'Amanecer o atardecer para fotos',
      avoid: 'Verano y Carnaval (imposiblemente lleno), Acqua Alta nov-feb'
    },
    
    nearby: [
      'Murano (vidrio soplado)',
      'Burano (encaje y casas de colores)',
      'Torcello (isla tranquila)',
      'Lido (playa)',
      'Verona (1.5h tren)'
    ],
    
    tips: [
      'NO vayas en julio-agosto (horda de cruceros)',
      'Góndola es CARA, solo si vale para ti',
      'Vaporetto Línea 1 es "góndola barata"',
      'Come fuera de San Marcos (€30 café ahí)',
      'Hostels/Airbnb más baratos que hoteles',
      'Lleva calzado cómodo (caminarás mucho)',
      'Acqua Alta inunda plazas (nov-feb)'
    ],
    
    accessibility: 'Difícil con silla de ruedas (muchos puentes con escaleras).',
    duration: '2-3 días mínimo',
    
    weather: { temp: 17, condition: 'Templado', icon: '⛅' },
    lastUpdated: '2025-11-20'
  },

  // ===== AMÉRICA =====
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    city: 'Cusco',
    country: 'Perú',
    continent: 'América',
    flag: '🇵🇪',
    coordinates: { lat: -13.1631, lon: -72.5450 },
    category: 'Sitio Arqueológico',
    
    description: 'Ciudad inca del siglo XV en montañas de los Andes a 2,430m. Maravilla del Mundo y sitio más icónico de Sudamérica.',
    
    mustKnow: [
      'Construida ~1450 por Inca Pachacútec',
      'Redescubierta por Hiram Bingham en 1911',
      'Una de las 7 Maravillas del Mundo Moderno',
      'Patrimonio UNESCO desde 1983',
      '2,430m altitud (menos que Cusco 3,400m)',
      'Significado: "Montaña Vieja" en quechua'
    ],
    
    whatToDo: [
      'Recorrer la ciudadela (2-4 horas)',
      'Subir Huayna Picchu o Montaña Machu Picchu (vistas)',
      'Ver Templo del Sol, Plaza Principal, Intihuatana',
      'Fotos desde mirador clásico',
      'Puente Inca (opcional)',
      'Aguas Calientes (pueblo base)'
    ],
    
    howToGetThere: {
      train: 'Cusco → Ollantaytambo → Aguas Calientes (3.5h, $65-85)',
      bus: 'Aguas Calientes → Machu Picchu (25 min, $12 subida + $12 bajada)',
      hiking: 'Camino Inca (4 días) o Salkantay Trek (5 días)',
      helicopter: '$500+ (muy caro, no común)'
    },
    
    tickets: {
      general: 'S/ 152 ($40) - circuito 1 y 2',
      with_mountain: 'S/ 200 ($53) + Huayna Picchu/Montaña',
      booking: 'OBLIGATORIO online 2-3 meses antes',
      url: 'https://www.machupicchu.gob.pe',
      limit: '4,500 visitantes/día en cupos horarios'
    },
    
    bestTime: {
      season: 'Mayo-sept (seco), abril-oct aceptable',
      timeOfDay: '6 AM entrada (amanecer, menos gente)',
      avoid: 'Dic-marzo (temporada de lluvias, Camino Inca cerrado feb)'
    },
    
    nearby: [
      'Valle Sagrado (Ollantaytambo, Pisac)',
      'Cusco (capital inca)',
      'Laguna Humantay',
      'Montaña Arcoíris (Vinicunca)',
      'Salineras de Maras'
    ],
    
    tips: [
      'RESERVA con 2-3 MESES (se agota)',
      'Aclimátate en Cusco 2-3 días antes (altitud)',
      'Lleva: agua, snacks, protector solar, repelente',
      'NO hay baños dentro (ve antes)',
      'Bastones de trekking permitidos (con punta goma)',
      'Huayna Picchu = escaleras empinadas (no apto vértigo)',
      'Pasaporte obligatorio (sellan como recuerdo)'
    ],
    
    accessibility: 'NO accesible silla de ruedas. Terreno irregular y escaleras.',
    duration: '1 día completo (incluye viaje desde Cusco)',
    
    weather: { temp: 16, condition: 'Nublado', icon: '☁️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'gran-canyon',
    name: 'Gran Cañón',
    city: 'Arizona',
    country: 'Estados Unidos',
    continent: 'América',
    flag: '🇺🇸',
    coordinates: { lat: 36.0544, lon: -112.1401 },
    category: 'Naturaleza / Parque Nacional',
    
    description: 'Cañón excavado por el Río Colorado durante 5-6 millones de años. 446 km de largo, hasta 29 km de ancho y 1,800m de profundidad.',
    
    mustKnow: [
      'Formado hace 5-6 millones de años',
      '446 km largo, 29 km ancho, 1,800m profundo',
      'Parque Nacional desde 1919',
      'Patrimonio UNESCO',
      'South Rim abierto todo el año',
      'North Rim cerrado nov-mayo (nieve)'
    ],
    
    whatToDo: [
      'Mather Point (vista clásica South Rim)',
      'Desert View Watchtower',
      'Bright Angel Trail (hike al fondo)',
      'Skywalk (pasarela de vidrio - $50 extra)',
      'Hermit Road (atardecer)',
      'Helicopter tour ($200-400)'
    ],
    
    howToGetThere: {
      car: 'Las Vegas: 4.5h (450 km) | Flagstaff: 1.5h (130 km)',
      shuttle: 'Desde Flagstaff o Williams',
      train: 'Grand Canyon Railway desde Williams ($70)',
      airport: 'Flagstaff (más cercano) o Las Vegas'
    },
    
    tickets: {
      vehicle: '$35 (7 días)',
      individual: '$20 (a pie/bici, 7 días)',
      annual: '$70 (todos los parques nacionales)',
      free_days: 'Algunos días al año (MLK Day, etc.)'
    },
    
    bestTime: {
      season: 'Sept-nov o marzo-mayo',
      timeOfDay: 'Amanecer (Mather Point) o atardecer (Hopi Point)',
      avoid: 'Julio-agosto (100°F+ en el fondo), invierno (nieve)'
    },
    
    nearby: [
      'Antelope Canyon',
      'Horseshoe Bend',
      'Sedona (rocas rojas)',
      'Monument Valley',
      'Route 66 (Williams)'
    ],
    
    tips: [
      'South Rim es más accesible (abierto todo año)',
      'North Rim más remoto y fresco',
      'NO bajes y subas mismo día (peligroso)',
      'Lleva MUCHA agua si haces hiking',
      'Altitude 2,100m (puede afectar)',
      'Shuttle gratuito dentro del parque',
      'Sunset increíble desde Hopi Point',
      'Alojamiento dentro reservar con meses'
    ],
    
    accessibility: 'Miradores principales accesibles. Trails NO.',
    duration: '1 día (South Rim), 2-3 días (hiking)',
    
    weather: { temp: 15, condition: 'Soleado', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'cataratas-iguazu',
    name: 'Cataratas del Iguazú',
    city: 'Misiones / Paraná',
    country: 'Argentina / Brasil',
    continent: 'América',
    flag: '🇦🇷🇧🇷',
    coordinates: { lat: -25.6953, lon: -54.4367 },
    category: 'Naturaleza',
    
    description: '275 cascadas en frontera Argentina-Brasil. Más grandes que Niágara, más anchas que Victoria. "Garganta del Diablo" es la más impresionante.',
    
    mustKnow: [
      '275 cascadas individuales',
      '2.7 km de ancho total',
      'Hasta 82m de altura',
      'Más agua que Niágara y Victoria juntas',
      'Patrimonio UNESCO',
      'Eleanor Roosevelt: "Poor Niagara!"'
    ],
    
    whatToDo: [
      'Garganta del Diablo (lado argentino - IMPERDIBLE)',
      'Pasarelas superiores e inferiores',
      'Safari en lancha (te mojas completo)',
      'Gran Aventura en gomón',
      'Sendero Macuco (fauna)',
      'Lado brasileño (vista panorámica)'
    ],
    
    howToGetThere: {
      flights: 'Buenos Aires → Iguazú (2h) | São Paulo → Foz (2h)',
      bus: 'Puerto Iguazú (lado argentino) ↔ Foz do Iguaçu (lado brasileño)',
      shuttle: 'Hoteles → parques (frecuente)',
      border: 'Fácil cruzar frontera (llevar pasaporte)'
    },
    
    tickets: {
      argentina: '$15 USD (extranjeros)',
      brasil: '$18 USD (Parque Nacional)',
      both: 'Vale la pena visitar ambos lados',
      boat: '$20 USD (Gran Aventura)'
    },
    
    bestTime: {
      season: 'Marzo-mayo o agosto-octubre',
      timeOfDay: 'Mañana temprano (menos gente)',
      avoid: 'Dic-feb (calor extremo 40°C, muy húmedo)',
      water: 'Más agua en verano, menos en invierno'
    },
    
    nearby: [
      'Hito Tres Fronteras (Argentina-Brasil-Paraguay)',
      'Parque das Aves (Brasil - santuario aves)',
      'Ruinas jesuitas',
      'Itaipú Dam (Brasil)',
      'Duty Free (Paraguay)'
    ],
    
    tips: [
      'Visita AMBOS lados (diferente perspectiva)',
      'Argentino = estar EN las cataratas (mejor)',
      'Brasileño = vista panorámica (fotos increíbles)',
      'Lleva impermeable para Garganta del Diablo',
      'Ropa de cambio si haces safari en lancha',
      'Zapatos antideslizantes (pasarelas mojadas)',
      'Protector solar waterproof',
      '2 días mínimo (1 por lado)'
    ],
    
    accessibility: 'Pasarelas accesibles. Safari en lancha NO.',
    duration: '1 día por lado (2 días total recomendado)',
    
    weather: { temp: 26, condition: 'Caluroso y húmedo', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'times-square',
    name: 'Times Square',
    city: 'Nueva York',
    country: 'Estados Unidos',
    continent: 'América',
    flag: '🇺🇸',
    coordinates: { lat: 40.7580, lon: -73.9855 },
    category: 'Urbano / Experiencia',
    
    description: 'Intersección icónica en Manhattan, "Cruce del Mundo". Pantallas LED gigantes, teatros de Broadway, energía 24/7.',
    
    mustKnow: [
      'Antes llamada "Longacre Square"',
      'Rebautizada 1904 (NY Times Tower)',
      '300,000-400,000 peatones diarios',
      'Ball Drop de Año Nuevo (1 millón personas)',
      'Completamente peatonal desde 2009',
      'Iluminada 24/7 con publicidad LED'
    ],
    
    whatToDo: [
      'Fotos con las pantallas gigantes',
      'Ver show de Broadway',
      'M&M\'s World (4 pisos)',
      'Visitar tiendas icónicas (Disney, Nike, Hershey\'s)',
      'Comer en Ellen\'s Stardust Diner (camareros cantan)',
      'Ver estatuas vivientes (propina esperada)'
    ],
    
    howToGetThere: {
      subway: ['N, Q, R, W, S, 1, 2, 3, 7 → Times Sq-42 St'],
      walking: 'Centro de Manhattan, todo cerca',
      bus: ['M7, M20, M42, M104'],
      taxi: 'Evitar (tráfico horrible)'
    },
    
    tickets: {
      free: 'Gratis caminar y ver',
      broadway: '$50-300 (TodayTix app para descuentos)',
      attractions: 'M&M\'s, Madame Tussauds ~$30 c/u'
    },
    
    bestTime: {
      season: 'Todo el año (experiencia urbana)',
      timeOfDay: 'Anochecer (pantallas se ven mejor)',
      avoid: 'Año Nuevo si no quieres multitudes extremas',
      nye: 'New Year\'s Eve = 1 millón de personas (llega 6 AM para lugar)'
    },
    
    nearby: [
      'Broadway Theaters',
      'Rockefeller Center',
      'Bryant Park',
      'Grand Central Terminal',
      'Empire State Building (15 min walk)',
      'Central Park (15 min walk)'
    ],
    
    tips: [
      'Es una trampa turística pero vale la pena verlo',
      'Restaurantes caros y mediocres (come fuera de TS)',
      'Cuidado con personajes disfrazados (piden propina)',
      'Pickpockets activos (cuidado bolsillos)',
      'De noche es seguro (mucha gente y policía)',
      'Mejor MIRAR que comprar (todo más caro)',
      'TKTS booth para tickets Broadway descuento',
      'Ve, toma fotos, y vete (no pases todo el día)'
    ],
    
    accessibility: 'Completamente accesible (peatonal y plano).',
    duration: '30 min - 1 hora (solo ver), +3 horas (Broadway)',
    
    weather: { temp: 12, condition: 'Frío', icon: '❄️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'cristo-redentor',
    name: 'Cristo Redentor',
    city: 'Río de Janeiro',
    country: 'Brasil',
    continent: 'América',
    flag: '🇧🇷',
    coordinates: { lat: -22.9519, lon: -43.2105 },
    category: 'Monumento',
    
    description: 'Estatua Art Deco de 30m de Jesús en cima del Cerro Corcovado (710m). Símbolo de Brasil y una de las 7 Maravillas del Mundo Moderno.',
    
    mustKnow: [
      'Inaugurado en 1931',
      '30m altura (38m con pedestal)',
      'Brazos: 28m envergadura',
      'Peso: 635 toneladas',
      'Una de las 7 Maravillas del Mundo Moderno',
      'Vista 360° de Río'
    ],
    
    whatToDo: [
      'Subir al Cristo (tren o van)',
      'Vista panorámica de Río',
      'Fotos icónicas',
      'Parque Nacional Tijuca (hiking)',
      'Misa dominical (a veces)',
      'Sunset (mágico)'
    ],
    
    howToGetThere: {
      train: 'Tren Corcovado desde Cosme Velho (20 min, R$ 96.50)',
      van: 'Vans oficiales desde Largo do Machado, Copacabana, Barra (R$ 79)',
      hiking: 'Via Parque Lage (3h subida, gratis pero agotador)',
      uber: 'No puede subir hasta arriba (solo hasta parking)'
    },
    
    tickets: {
      train: 'R$ 96.50 (~$19)',
      van: 'R$ 79 (~$16)',
      online: 'Compra online (evita fila)',
      url: 'https://www.tremdocorcovado.rio'
    },
    
    bestTime: {
      season: 'Mayo-sept (menos lluvia)',
      timeOfDay: 'Mañana temprano (8 AM) o atardecer',
      avoid: 'Días nublados (no verás nada)'
    },
    
    nearby: [
      'Pan de Azúcar',
      'Parque Nacional Tijuca',
      'Parque Lage',
      'Jardín Botánico',
      'Playas: Copacabana, Ipanema'
    ],
    
    tips: [
      'Compra tickets online (fila de 1-2 horas si no)',
      'Ve en día despejado (check pronóstico)',
      'Mañana temprano menos lleno',
      'Tren más cómodo que van',
      'Lleva agua y protector solar',
      'Puede hacer frío arriba (lleva chamarra)',
      'Cuidado con monos (no alimentar)',
      'Escaleras finales (115 escalones)'
    ],
    
    accessibility: 'Ascensor y escaleras mecánicas hasta la base. Accesible.',
    duration: '2-3 horas (incluye viaje)',
    
    weather: { temp: 28, condition: 'Caluroso', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  // ===== ASIA =====
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    city: 'Agra',
    country: 'India',
    continent: 'Asia',
    flag: '🇮🇳',
    coordinates: { lat: 27.1751, lon: 78.0421 },
    category: 'Monumento Histórico',
    
    description: 'Mausoleo de mármol blanco construido 1632-1653 por emperador Shah Jahan para su esposa Mumtaz Mahal. Obra maestra del arte mogol.',
    
    mustKnow: [
      'Construido 1632-1653 (22 años)',
      '20,000 trabajadores',
      'Mármol blanco con incrustaciones de piedras preciosas',
      'Patrimonio UNESCO desde 1983',
      'Una de las 7 Maravillas del Mundo Moderno',
      'Cambia de color según luz del día'
    ],
    
    whatToDo: [
      'Ver al amanecer (luz dorada increíble)',
      'Jardines mogoles (Charbagh)',
      'Mezquita y Casa de Huéspedes laterales',
      'Río Yamuna (vista trasera)',
      'Fuerte de Agra (2 km)',
      'Fotos desde Mehtab Bagh (jardín cruzando río)'
    ],
    
    howToGetThere: {
      train: 'Delhi → Agra: 2-3h (Gatimaan Express recomendado)',
      car: 'Delhi por autopista: 3-4h (230 km)',
      flight: 'No hay aeropuerto comercial en Agra',
      local: 'Auto-rickshaw o taxi desde estación'
    },
    
    tickets: {
      foreigner: '₹1,100 (~$13)',
      indian: '₹50',
      free: 'Menores 15 años',
      booking: 'Online o taquilla (filas)',
      closed: 'Viernes (mezquita activa)',
      url: 'https://www.tajmahal.gov.in'
    },
    
    bestTime: {
      season: 'Oct-marzo (clima fresco)',
      timeOfDay: 'Amanecer (6 AM) - mágico',
      avoid: 'Abril-junio (45°C+), monzón julio-sept'
    },
    
    nearby: [
      'Fuerte de Agra',
      'Fatehpur Sikri (40 km)',
      'Tumba de Itimad-ud-Daulah (Baby Taj)',
      'Mehtab Bagh (vista del Taj)',
      'Delhi (230 km) y Jaipur (240 km)'
    ],
    
    tips: [
      'Ve al AMANECER (menos gente, mejor luz)',
      'Prohibido comida, trípodes, drones',
      'Cubrezapatos incluidos (mármol)',
      'Contrata guía (₹500-1000, vale la pena)',
      'Cuidado con estafadores fuera',
      'Lleva solo lo básico (seguridad estricta)',
      'Luna llena = apertura nocturna especial'
    ],
    
    accessibility: 'Rampa y silla de ruedas disponible. Piso de mármol liso.',
    duration: '2-3 horas',
    
    weather: { temp: 22, condition: 'Templado', icon: '⛅' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'gran-muralla-china',
    name: 'Gran Muralla China',
    city: 'Pekín',
    country: 'China',
    continent: 'Asia',
    flag: '🇨🇳',
    coordinates: { lat: 40.4319, lon: 116.5704 },
    category: 'Monumento Histórico',
    
    description: 'Sistema de fortificaciones de 21,000 km construido desde siglo VII a.C. hasta siglo XVII. La estructura humana más larga del mundo.',
    
    mustKnow: [
      'Más de 21,000 km de longitud total',
      'Construida durante 2,000+ años',
      'Dinastía Ming (1368-1644) construyó mayoría actual',
      'Patrimonio UNESCO desde 1987',
      'No visible desde el espacio (mito)',
      'Secciones más visitadas cerca de Pekín'
    ],
    
    whatToDo: [
      'Badaling (más turística, accesible)',
      'Mutianyu (menos gente, tobogán)',
      'Jinshanling (hiking, fotogénica)',
      'Simatai (nocturna, iluminada)',
      'Jiankou (salvaje, NO restaurada)',
      'Huanghuacheng (muralla en agua)'
    ],
    
    howToGetThere: {
      badaling: 'Tren S2 desde Pekín Norte (1.5h, ¥6)',
      mutianyu: 'Bus 916 + taxi, o tour (2h)',
      tour: 'Tours desde Pekín $40-80',
      car: 'Taxi privado (negociar precio)'
    },
    
    tickets: {
      badaling: '¥40 (~$5.5) + teleférico ¥140',
      mutianyu: '¥45 + teleférico/tobogán ¥120',
      jinshanling: '¥65',
      simatai_night: '¥150 (especial)'
    },
    
    bestTime: {
      season: 'Abril-mayo u sept-oct',
      timeOfDay: 'Mañana temprano (evitar multitudes)',
      avoid: 'Feriados chinos (Año Nuevo, Golden Week)'
    },
    
    nearby: [
      'Ciudad Prohibida',
      'Templo del Cielo',
      'Palacio de Verano',
      'Tumbas Ming',
      'Hutongs de Pekín'
    ],
    
    tips: [
      'Mutianyu > Badaling (menos gente, más bonito)',
      'Lleva agua y snacks (limitado en muralla)',
      'Zapatos cómodos (escaleras empinadas)',
      'Puede hacer frío en invierno (-10°C)',
      'Secciones salvajes PELIGROSAS (Jiankou)',
      'Tobogán en Mutianyu = diversión',
      'Evita feriados chinos (enjambre humano)',
      'Contrata tour o ve en transporte público'
    ],
    
    accessibility: 'Badaling accesible. Otras secciones NO (escaleras empinadas).',
    duration: '3-4 horas (más viaje ida/vuelta)',
    
    weather: { temp: 10, condition: 'Templado', icon: '⛅' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'angkor-wat',
    name: 'Angkor Wat',
    city: 'Siem Reap',
    country: 'Camboya',
    continent: 'Asia',
    flag: '🇰🇭',
    coordinates: { lat: 13.4125, lon: 103.8670 },
    category: 'Templo / Arqueología',
    
    description: 'Complejo de templos jemer del siglo XII. El monumento religioso más grande del mundo, símbolo de Camboya.',
    
    mustKnow: [
      'Construido siglo XII por rey Suryavarman II',
      'Dedicado a dios Vishnu',
      'Monumento religioso MÁS GRANDE del mundo',
      'Patrimonio UNESCO desde 1992',
      '400+ templos en complejo Angkor',
      'Mejor ejemplo de arquitectura jemer'
    ],
    
    whatToDo: [
      'Amanecer en Angkor Wat (ICÓNICO)',
      'Angkor Thom y Bayon (caras gigantes)',
      'Ta Prohm (templo con árboles, Tomb Raider)',
      'Banteay Srei (tallas detalladas)',
      'Circuito pequeño (1 día)',
      'Circuito grande (2-3 días)'
    ],
    
    howToGetThere: {
      flight: 'Siem Reap International Airport',
      tuk_tuk: '$15-20/día (forma más común)',
      bike: '$2/día (solo si tienes energía)',
      car: '$30-50/día con conductor',
      from_town: '6 km de Siem Reap'
    },
    
    tickets: {
      one_day: '$37',
      three_day: '$62 (uso en 10 días)',
      seven_day: '$72 (uso en 1 mes)',
      sunrise: 'Incluido (llega 5 AM)',
      booking: 'Compra en taquilla con foto'
    },
    
    bestTime: {
      season: 'Nov-marzo (seco, fresco)',
      timeOfDay: 'Amanecer 5:30 AM (Angkor Wat)',
      avoid: 'Abril (45°C+), monzón junio-oct',
      crowds: 'Evita feriados camboayanos'
    },
    
    nearby: [
      'Bayon (templo de caras)',
      'Ta Prohm (árboles gigantes)',
      'Banteay Srei',
      'Tonlé Sap (lago flotante)',
      'Pub Street Siem Reap (noche)'
    ],
    
    tips: [
      'Compra pase 3 días (vale la pena)',
      'Contrata tuk-tuk por día ($15-20)',
      'Amanecer en Angkor Wat = IMPERDIBLE',
      'Lleva: agua, protector solar, sombrero',
      'Dress code: hombros y rodillas cubiertos',
      'Temprano menos calor y gente',
      'Ta Prohm mejor 2-3 PM (luz)',
      'Cuidado monos (roban comida)'
    ],
    
    accessibility: 'Terreno irregular. Difícil silla de ruedas.',
    duration: '3-4 días ideal (mínimo 1 día)',
    
    weather: { temp: 30, condition: 'Caluroso y húmedo', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'monte-fuji',
    name: 'Monte Fuji',
    city: 'Shizuoka / Yamanashi',
    country: 'Japón',
    continent: 'Asia',
    flag: '🇯🇵',
    coordinates: { lat: 35.3606, lon: 138.7274 },
    category: 'Naturaleza / Montaña',
    
    description: 'Montaña sagrada y volcán activo de 3,776m. Símbolo de Japón, perfectamente simétrica, coronada de nieve.',
    
    mustKnow: [
      'Altura: 3,776m (montaña más alta de Japón)',
      'Volcán activo (última erupción 1707)',
      'Patrimonio UNESCO desde 2013',
      'Sagrada en sintoísmo y budismo',
      'Escalable solo julio-agosto',
      'Visible desde Tokio (100 km) en día claro'
    ],
    
    whatToDo: [
      'Escalada hasta la cima (julio-agosto)',
      'Amanecer desde cumbre (Goraiko)',
      '5ta estación (2,305m - accesible auto)',
      'Lagos Fuji Five (Kawaguchi más popular)',
      'Pagoda Chureito (foto icónica con Fuji)',
      'Aokigahara Forest (bosque misterioso)'
    ],
    
    howToGetThere: {
      tokyo: 'Tren a Kawaguchiko (2h, ¥4,130) + bus',
      bus: 'Shinjuku → 5ta estación (2.5h, ¥2,800)',
      climbing: '5ta estación = punto de inicio',
      best_view: 'Lago Kawaguchiko o Hakone'
    },
    
    tickets: {
      climbing_fee: '¥1,000 (voluntario pero esperado)',
      fifth_station: 'Gratis',
      hut_overnight: '¥8,000-12,000 (con comidas)',
      kawaguchiko_ropeway: '¥900'
    },
    
    bestTime: {
      climbing: 'Julio-agosto SOLAMENTE',
      viewing: 'Nov-feb (más despejado, nieve en cima)',
      avoid: 'Junio-julio (temporada lluvias, nublado)',
      cherry_blossom: 'Abril (Chureito pagoda con flores)'
    },
    
    nearby: [
      'Lagos Fuji Five',
      'Hakone (onsen y vistas)',
      'Pagoda Chureito',
      'Aokigahara Forest',
      'Gotemba Premium Outlets'
    ],
    
    tips: [
      'Escalada SOLO julio-agosto (resto cerrado/peligroso)',
      'Ruta Yoshida (más popular)',
      'Duerme en refugio de montaña (ver amanecer)',
      'Lleva ropa abrigada (cima = 5°C verano)',
      'Oxígeno limitado en cima',
      'Bastón para sellos (recuerdo)',
      'NO escales de noche sin experiencia',
      'Para solo ver: Kawaguchiko perfecto'
    ],
    
    accessibility: '5ta estación accesible. Escalada NO.',
    duration: '6-10 horas subir + 3-5 bajar (o 2 días con pernocta)',
    
    weather: { temp: 5, condition: 'Frío en cima', icon: '🌤️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'petra',
    name: 'Petra',
    city: 'Wadi Musa',
    country: 'Jordania',
    continent: 'Asia',
    flag: '🇯🇴',
    coordinates: { lat: 30.3285, lon: 35.4444 },
    category: 'Arqueología',
    
    description: 'Ciudad nabatea tallada en roca rosada ~300 a.C. "Ciudad Rosa" accesible por el Siq. Una de las 7 Maravillas del Mundo Moderno.',
    
    mustKnow: [
      'Fundada por nabateos ~300 a.C.',
      'Tallada completamente en roca',
      'Redescubierta en 1812',
      'Patrimonio UNESCO desde 1985',
      'Una de las 7 Maravillas del Mundo Moderno',
      'Más de 800 monumentos'
    ],
    
    whatToDo: [
      'Caminar por el Siq (cañón de 1.2 km)',
      'El Tesoro (Al-Khazneh - icónico)',
      'Calle de las Fachadas',
      'Teatro Romano',
      'Subir al Monasterio (800 escalones)',
      'Petra by Night (velas, 3x semana)'
    ],
    
    howToGetThere: {
      amman: 'Bus JETT (3h, JD 10) o taxi privado',
      aqaba: '2 horas (130 km)',
      airport: 'Aeropuerto Queen Alia (Amman) más cercano',
      town: 'Hoteles en Wadi Musa (caminando a entrada)'
    },
    
    tickets: {
      one_day: 'JD 50 (~$70) extranjeros',
      two_day: 'JD 55',
      three_day: 'JD 60',
      jordan_pass: 'JD 70-80 (incluye visa + Petra 2-3 días)',
      petra_night: 'JD 17 adicional'
    },
    
    bestTime: {
      season: 'Marzo-mayo o sept-nov',
      timeOfDay: 'Amanecer (8 AM entrada, luz en Tesoro)',
      avoid: 'Verano (40°C+ y sin sombra)'
    },
    
    nearby: [
      'Pequeña Petra',
      'Wadi Rum (desierto, 1.5h)',
      'Mar Muerto (3h)',
      'Aqaba (playa, Mar Rojo)',
      'Jerash (ruinas romanas)'
    ],
    
    tips: [
      'Compra Jordan Pass (ahorra dinero)',
      'Llega temprano (9 AM ya está caliente)',
      'Lleva MUCHA agua',
      'Zapatos cómodos hiking',
      'Monasterio = IMPERDIBLE (800 escalones)',
      'Petra by Night bonito pero turístico',
      'Burros/camellos disponibles (negocia precio)',
      '2 días ideal para ver todo sin prisa'
    ],
    
    accessibility: 'Entrada hasta Tesoro aceptable. Resto NO accesible (escaleras, terreno irregular).',
    duration: '1 día mínimo (2 días ideal)',
    
    weather: { temp: 25, condition: 'Soleado y seco', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  // ===== ÁFRICA =====
  {
    id: 'piramides-giza',
    name: 'Pirámides de Giza',
    city: 'El Cairo',
    country: 'Egipto',
    continent: 'África',
    flag: '🇪🇬',
    coordinates: { lat: 29.9792, lon: 31.1342 },
    category: 'Arqueología',
    
    description: 'Únicas sobrevivientes de las 7 Maravillas del Mundo Antiguo. Pirámides de Keops, Kefrén y Micerinos (~2560 a.C.) y la Gran Esfinge.',
    
    mustKnow: [
      'Construidas ~2560 a.C. (4,500+ años)',
      'Gran Pirámide (Keops): 146m original',
      'Única maravilla antigua que sobrevive',
      'Patrimonio UNESCO desde 1979',
      '2.3 millones de bloques de piedra',
      'Esfinge: 73m largo, 20m alto'
    ],
    
    whatToDo: [
      'Explorar las 3 pirámides principales',
      'Interior de Gran Pirámide (cámara del rey)',
      'Gran Esfinge',
      'Museo del Barco Solar',
      'Paseo en camello (típico pero turístico)',
      'Show luz y sonido nocturno'
    ],
    
    howToGetThere: {
      cairo: 'Uber/taxi desde centro (30-40 min)',
      metro: 'M2 hasta Giza + micro/taxi',
      bus: 'Bus 355 o 357 desde Tahrir',
      tour: 'Tours desde hoteles ($40-60)'
    },
    
    tickets: {
      complex: 'EGP 540 (~$11)',
      inside_kheops: 'EGP 900 adicional',
      inside_khafre: 'EGP 100 adicional',
      solar_boat: 'EGP 100',
      student: '50% descuento con ISIC'
    },
    
    bestTime: {
      season: 'Nov-febrero (fresco)',
      timeOfDay: 'Amanecer (8 AM) o atardecer',
      avoid: 'Mayo-agosto (45°C+, insoportable)'
    },
    
    nearby: [
      'Saqqara (pirámide escalonada)',
      'Memphis (antigua capital)',
      'Museo Egipcio (Cairo)',
      'Khan el-Khalili (bazar)',
      'Cairo Islámico'
    ],
    
    tips: [
      'Ve TEMPRANO (8 AM, antes del calor)',
      'Contrata guía oficial (evita estafadores)',
      'Negocia TODO (camellos, recuerdos)',
      'No aceptes "regalos gratis" (trampa)',
      'Lleva agua, sombrero, protector solar',
      'Interior de pirámides = claustrofóbico',
      'Cuidado con vendedores agresivos',
      'Dress modesto (respeto cultura)'
    ],
    
    accessibility: 'Terreno de arena. Interior pirámides NO accesible (pasillos estrechos).',
    duration: '3-4 horas (medio día)',
    
    weather: { temp: 20, condition: 'Templado y seco', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'kilimanjaro',
    name: 'Monte Kilimanjaro',
    city: 'Moshi',
    country: 'Tanzania',
    continent: 'África',
    flag: '🇹🇿',
    coordinates: { lat: -3.0674, lon: 37.3556 },
    category: 'Naturaleza / Montaña',
    
    description: 'Montaña más alta de África (5,895m). Volcán inactivo con glaciares en la cima. Escalable sin experiencia técnica.',
    
    mustKnow: [
      'Altura: 5,895m (19,341 pies)',
      'Montaña independiente más alta del mundo',
      '3 conos volcánicos: Kibo, Mawenzi, Shira',
      'Glaciares en cumbre (desapareciendo)',
      'Patrimonio UNESCO',
      'No requiere escalada técnica'
    ],
    
    whatToDo: [
      'Escalada a Uhuru Peak (cima)',
      'Ruta Marangu (5-6 días)',
      'Ruta Machame (6-7 días, más escénica)',
      'Ruta Lemosho (7-8 días, mejor aclimatación)',
      'Safari en Arusha después',
      'Visitar plantaciones de café en Moshi'
    ],
    
    howToGetThere: {
      flight: 'Kilimanjaro Airport (JRO)',
      moshi: 'Base town, hoteles y operadores',
      arusha: '1.5h de Moshi (alternativa)',
      tanzania_visa: '$50-100 en llegada'
    },
    
    tickets: {
      park_fees: '$800-900 (solo fees, 6 días)',
      total_climb: '$1,500-3,000 (incluye guía, porteadores, comida)',
      mandatory: 'Guía obligatorio (no puedes ir solo)',
      tip: '$200-300 propinas esperadas (guías/porteadores)'
    },
    
    bestTime: {
      season: 'Enero-marzo o junio-octubre (seco)',
      avoid: 'Abril-mayo (lluvias fuertes)',
      summit_night: '-20°C en cima'
    },
    
    nearby: [
      'Parque Nacional Arusha',
      'Cráter Ngorongoro',
      'Serengeti',
      'Lago Manyara',
      'Zanzibar (post-escalada descanso)'
    ],
    
    tips: [
      'Entrena 3-6 meses antes (cardio)',
      'Aclimatación = clave del éxito (60-70% llegan)',
      'Rutas más largas = mejor aclimatación',
      'Machame más bonita que Marangu',
      'Lleva ropa térmica (-20°C en cima)',
      'Mal de altura es REAL (pole pole = despacio)',
      'Diamox ayuda (consulta médico)',
      'Propina guías es obligatoria culturalmente'
    ],
    
    accessibility: 'NO accesible. Requiere buena condición física.',
    duration: '5-8 días según ruta',
    
    weather: { temp: -10, condition: 'Frío en cima', icon: '❄️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'cataratas-victoria',
    name: 'Cataratas Victoria',
    city: 'Livingstone / Victoria Falls',
    country: 'Zambia / Zimbabue',
    continent: 'África',
    flag: '🇿🇲🇿🇼',
    coordinates: { lat: -17.9244, lon: 25.8567 },
    category: 'Naturaleza',
    
    description: 'Una de las cataratas más grandes del mundo. 1,708m de ancho, 108m de altura. "El Humo que Truena" (nombre local).',
    
    mustKnow: [
      'Ancho: 1,708m | Alto: 108m',
      'Río Zambeze',
      'Patrimonio UNESCO',
      'Descubiertas (occidentales) por Livingstone 1855',
      'Mayor caudal: marzo-mayo',
      'Menor: nov-dic (pero mejor para ver)',
      'Nombre local: Mosi-oa-Tunya'
    ],
    
    whatToDo: [
      'Caminar por senderos (lado Zambia o Zimbabue)',
      'Devil\'s Pool (piscina al borde, sept-dic)',
      'Bungee jumping desde puente (111m)',
      'Rafting río Zambeze (rápidos clase V)',
      'Vuelo en helicóptero ($160)',
      'Sunset cruise en río'
    ],
    
    howToGetThere: {
      flights: 'Aeropuerto Livingstone (Zambia) o Victoria Falls (Zimbabue)',
      border: 'Puente entre países (fácil cruzar)',
      from_town: 'Livingstone o Victoria Falls town'
    },
    
    tickets: {
      zambia: '$20 USD',
      zimbabwe: '$30 USD',
      both: '$50 (visa KAZA - ambos lados)',
      devils_pool: '$130-150',
      helicopter: '$160 (15 min)',
      bungee: '$160'
    },
    
    bestTime: {
      season: 'Feb-mayo (máximo agua, mucho spray)',
      low_water: 'Sept-dic (mejor para Devil\'s Pool)',
      avoid: 'Agosto (muy seco, poco impresionante)'
    },
    
    nearby: [
      'Chobe National Park (Botsuana)',
      'Hwange National Park (Zimbabue)',
      'Livingstone town (museo)',
      'Río Zambeze (safaris)',
      'Puente Victoria Falls (histórico)'
    ],
    
    tips: [
      'Ve lado de Zambia Y Zimbabue (diferente vista)',
      'Zimbabue = mejores vistas (70% de catarata)',
      'Zambia = puedes nadar en Devil\'s Pool',
      'Lleva impermeable (spray te empapa)',
      'Mejor: feb-abril (más agua, más spray)',
      'Helicóptero = experiencia increíble',
      'Combina con safari en Chobe',
      'Visa KAZA cubre ambos países'
    ],
    
    accessibility: 'Senderos pavimentados lado Zimbabue. Zambia más irregular.',
    duration: '2-3 horas ver cataratas, 2-3 días para actividades',
    
    weather: { temp: 28, condition: 'Caluroso', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'table-mountain',
    name: 'Table Mountain',
    city: 'Ciudad del Cabo',
    country: 'Sudáfrica',
    continent: 'África',
    flag: '🇿🇦',
    coordinates: { lat: -33.9628, lon: 18.4098 },
    category: 'Naturaleza / Montaña',
    
    description: 'Montaña icónica de cima plana que domina Ciudad del Cabo. 1,085m de altura. Parte de las 7 Maravillas Naturales.',
    
    mustKnow: [
      'Altura: 1,085m',
      'Parte de las 7 Maravillas Naturales',
      '3km de largo, 1.5km ancho (cima)',
      'Teleférico rotatorio (360° vistas)',
      'Fynbos (flora única)',
      '"Mantel" de nubes característico'
    ],
    
    whatToDo: [
      'Subir en teleférico (5 min)',
      'Hiking: Platteklip Gorge (2-3h subida)',
      'Vistas 360° de Ciudad del Cabo',
      'Comer en restaurante de cima',
      'Lion\'s Head (montaña vecina, hiking)',
      'Sunset desde la cima'
    ],
    
    howToGetThere: {
      cable_car: 'Lower Cableway Station',
      uber: '15 min desde centro ($5-8)',
      bus: 'MyCiTi bus Route 110',
      hiking: 'Varios senderos desde ciudad'
    },
    
    tickets: {
      return_cable: 'R 430 (~$23) adulto',
      one_way: 'R 240 (si bajas caminando)',
      online: '15% descuento comprando online',
      table_mountain_pass: 'R 550 (subidas ilimitadas 7 días)'
    },
    
    bestTime: {
      season: 'Oct-marzo (verano)',
      timeOfDay: 'Mañana temprano (menos viento) o sunset',
      avoid: 'Invierno (junio-agosto) = mucho viento y cerrado'
    },
    
    nearby: [
      'V&A Waterfront',
      'Robben Island (prisión Mandela)',
      'Cabo de Buena Esperanza',
      'Camps Bay (playa)',
      'Boulders Beach (pingüinos)'
    ],
    
    tips: [
      'Compra ticket online (descuento + evita fila)',
      'Ve temprano (menos viento, mejor para teleférico)',
      '"Mantel" de nubes = cerrado (check webcam)',
      'Lleva chamarra (frío y viento arriba)',
      'Si haces hiking: agua, protector solar',
      'Teleférico cierra con viento fuerte',
      'Sunset increíble (reserva ticket tarde)',
      'Combina con pingüinos en Boulders Beach'
    ],
    
    accessibility: 'Teleférico accesible. Hiking NO.',
    duration: '2-3 horas (con teleférico), 4-5h (hiking)',
    
    weather: { temp: 18, condition: 'Ventoso', icon: '🌤️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'serengeti',
    name: 'Parque Nacional Serengeti',
    city: 'Arusha',
    country: 'Tanzania',
    continent: 'África',
    flag: '🇹🇿',
    coordinates: { lat: -2.3333, lon: 34.8333 },
    category: 'Naturaleza / Safari',
    
    description: 'Ecosistema de 30,000 km² famoso por la Gran Migración (2 millones de animales). Safari africano por excelencia.',
    
    mustKnow: [
      '30,000 km² de sabana',
      'Gran Migración: 2 millones ñus + cebras',
      'Big Five: león, leopardo, elefante, búfalo, rinoceronte',
      'Patrimonio UNESCO',
      '3,000+ leones',
      'Significado: "llanuras sin fin" (maasai)'
    ],
    
    whatToDo: [
      'Game drive (safari en 4x4)',
      'Gran Migración (junio-julio)',
      'Hot air balloon safari ($599)',
      'Cruce del río (julio-agosto)',
      'Visitar Maasai village',
      'Ngorongoro Crater (combo)'
    ],
    
    howToGetThere: {
      flight: 'Kilimanjaro Airport → Arusha',
      drive: 'Arusha → Serengeti (6-8h)',
      fly_in: 'Vuelos chárter a pistas en parque',
      combo: 'Ruta: Arusha → Ngorongoro → Serengeti'
    },
    
    tickets: {
      entry: '$70/día (extranjero adulto)',
      vehicle: '$40/día',
      total_safari: '$2,000-5,000 (3-5 días todo incluido)',
      balloon: '$599',
      camping: '$30-50 (público) | $200-1,000 (lodges)'
    },
    
    bestTime: {
      migration: 'Junio-julio (cruce río Grumeti)',
      calving: 'Enero-febrero (nacimientos)',
      dry: 'Junio-octubre (mejor para ver animales)',
      avoid: 'Marzo-mayo (temporada lluvias, difícil acceso)'
    },
    
    nearby: [
      'Cráter Ngorongoro (IMPERDIBLE)',
      'Garganta Olduvai (cuna humanidad)',
      'Lago Manyara',
      'Tarangire National Park',
      'Zanzibar (después del safari)'
    ],
    
    tips: [
      'Mínimo 3 días para Serengeti',
      'Combina con Ngorongoro (mejor ruta)',
      'Balloon safari = CARO pero increíble',
      'Gran Migración = timing específico',
      'Lleva: binoculares, zoom camera, protector solar',
      'Alojamiento: lodges > camping (comodidad)',
      'Guía/conductor hace la diferencia',
      'Enero-feb = nacimientos (depredadores activos)'
    ],
    
    accessibility: 'Safaris adaptables para movilidad reducida.',
    duration: '3-7 días ideal',
    
    weather: { temp: 25, condition: 'Cálido', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  // ===== OCEANÍA =====
  {
    id: 'opera-sydney',
    name: 'Ópera de Sídney',
    city: 'Sídney',
    country: 'Australia',
    continent: 'Oceanía',
    flag: '🇦🇺',
    coordinates: { lat: -33.8568, lon: 151.2153 },
    category: 'Arquitectura',
    
    description: 'Obra maestra arquitectónica de 1973 con techo de velas icónico. Centro de artes escénicas más famoso del mundo.',
    
    mustKnow: [
      'Inaugurada en 1973',
      'Diseñada por Jørn Utzon',
      'Patrimonio UNESCO desde 2007',
      '1,056 "velas" de techo',
      '10 años construcción (1963-1973)',
      'Costo: $102 millones (presupuesto era $7M)'
    ],
    
    whatToDo: [
      'Tour guiado (1 hora)',
      'Ver espectáculo (ópera, ballet, teatro)',
      'Fotos desde Circular Quay',
      'Cena en restaurantes (Bennelong)',
      'Backstage tour',
      'Vivid Sydney (mayo-junio, proyecciones)'
    ],
    
    howToGetThere: {
      train: 'Circular Quay station (5 min walk)',
      ferry: 'Circular Quay (pintoresco)',
      bus: 'Múltiples rutas',
      walking: '15 min desde The Rocks'
    },
    
    tickets: {
      tour: 'A$ 42 (~$28)',
      show: 'A$ 80-300 según evento',
      backstage: 'A$ 175',
      free: 'Caminar alrededor gratis'
    },
    
    bestTime: {
      season: 'Todo el año',
      timeOfDay: 'Amanecer, atardecer, o noche iluminada',
      special: 'Vivid Sydney (mayo-junio) = proyecciones'
    },
    
    nearby: [
      'Sydney Harbour Bridge',
      'The Rocks (barrio histórico)',
      'Royal Botanic Gardens',
      'Circular Quay',
      'Darling Harbour',
      'Taronga Zoo'
    ],
    
    tips: [
      'Tour vale la pena (historia fascinante)',
      'Reserva shows con anticipación',
      'Fotos mejores desde Mrs Macquarie\'s Chair',
      'Gratis caminar y ver exterior',
      'Vivid Sydney = increíble (proyecciones)',
      'Comer en Opera Bar (vistas)',
      'Llega en ferry (vista icónica)',
      'Combina con Bridge Climb'
    ],
    
    accessibility: 'Completamente accesible.',
    duration: '1-2 horas (tour) o 3-4h (show + cena)',
    
    weather: { temp: 22, condition: 'Templado', icon: '⛅' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'gran-barrera-coral',
    name: 'Gran Barrera de Coral',
    city: 'Cairns / Whitsundays',
    country: 'Australia',
    continent: 'Oceanía',
    flag: '🇦🇺',
    coordinates: { lat: -18.2871, lon: 147.6992 },
    category: 'Naturaleza / Marina',
    
    description: 'Sistema de arrecifes más grande del mundo. 2,300 km de largo, visible desde el espacio. Patrimonio en peligro.',
    
    mustKnow: [
      '2,300 km de longitud',
      'Sistema de arrecifes MÁS GRANDE del mundo',
      '3,000 arrecifes individuales',
      'Patrimonio UNESCO (en peligro)',
      '900 islas',
      'Visible desde el espacio',
      'Amenazado por cambio climático'
    ],
    
    whatToDo: [
      'Snorkeling (mejor opción)',
      'Buceo (PADI certificado)',
      'Vuelo escénico en helicóptero',
      'Great Barrier Reef Drive (isla Hamilton)',
      'Heart Reef (corazón natural, solo aéreo)',
      'Whitehaven Beach (arena blanca)'
    ],
    
    howToGetThere: {
      cairns: 'Base más popular (norte)',
      port_douglas: '1h norte de Cairns (menos turístico)',
      whitsundays: 'Airlie Beach (centro)',
      boat: 'Tours diarios desde Cairns ($100-200)',
      liveaboard: 'Cruceros 2-3 días ($500-1,000)'
    },
    
    tickets: {
      day_trip: 'A$ 150-250',
      diving: 'A$ 80-150 extra',
      scenic_flight: 'A$ 200-400',
      liveaboard: 'A$ 600-1,500 (2-3 días)',
      reef_tax: 'A$ 20 (conservación)'
    },
    
    bestTime: {
      season: 'Mayo-octubre (seco, mejor visibilidad)',
      avoid: 'Nov-abril (temporada medusas, lluvias)',
      water_temp: '22-28°C según temporada'
    },
    
    nearby: [
      'Cairns (ciudad base)',
      'Daintree Rainforest',
      'Kuranda (pueblo en montañas)',
      'Islas Whitsundays',
      'Whitehaven Beach'
    ],
    
    tips: [
      'Snorkeling > buceo (ambos ven igual)',
      'Cairns = más opciones de tours',
      'Port Douglas = menos gente',
      'Lleva lycra/wetsuit (medusas nov-abril)',
      'Dramamine si te mareas (mar puede ser bravo)',
      'Vuelo escénico = CARO pero vale la pena',
      'Liveaboard mejor para buceadores',
      'Check clima (cancelan con mal tiempo)',
      'Biodegradable sunscreen SOLAMENTE'
    ],
    
    accessibility: 'Barcos adaptados disponibles. Snorkeling más accesible.',
    duration: '1 día (tour) a 3 días (liveaboard)',
    
    weather: { temp: 26, condition: 'Tropical', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'milford-sound',
    name: 'Milford Sound',
    city: 'Fiordland',
    country: 'Nueva Zelanda',
    continent: 'Oceanía',
    flag: '🇳🇿',
    coordinates: { lat: -44.6719, lon: 168.6760 },
    category: 'Naturaleza / Fiordo',
    
    description: 'Fiordo glaciar con acantilados de 1,200m, cascadas y vida marina. Llamado "octava maravilla del mundo" por Rudyard Kipling.',
    
    mustKnow: [
      'Fiordo excavado por glaciares',
      'Acantilados hasta 1,200m',
      'Cascadas permanentes + cientos con lluvia',
      'Patrimonio UNESCO (Fiordland)',
      'Lluvias: 200+ días al año',
      '"Octava maravilla" - Rudyard Kipling'
    ],
    
    whatToDo: [
      'Crucero en fiordo (1.5-2h)',
      'Kayak en fiordo',
      'Milford Track (hiking 4 días)',
      'Vuelo escénico desde Queenstown',
      'Ver focas, delfines, pingüinos',
      'Underwater Observatory'
    ],
    
    howToGetThere: {
      drive: 'Te Anau: 2h (120 km) | Queenstown: 4h (290 km)',
      tour: 'Bus tours desde Queenstown ($80-150)',
      flight: 'Vuelo escénico + crucero ($500+)',
      road: 'Ruta escénica increíble (túnel Homer)'
    },
    
    tickets: {
      cruise: 'NZ$ 90-150 (~$55-90)',
      scenic_flight: 'NZ$ 400-600',
      kayak: 'NZ$ 200',
      milford_track: 'NZ$ 300+ (huts + transporte)'
    },
    
    bestTime: {
      season: 'Nov-abril (verano austral)',
      avoid: 'Junio-agosto (nevado, caminos difíciles)',
      rain: 'Lluvia = MÁS bonito (cascadas)',
      crowds: 'Enero-feb más lleno'
    },
    
    nearby: [
      'Doubtful Sound (menos turístico)',
      'Te Anau (pueblo base)',
      'Mirror Lakes',
      'Homer Tunnel',
      'Queenstown (4h drive)'
    ],
    
    tips: [
      'Lluvia hace más bonito (cascadas)',
      'Ve TEMPRANO (primeros cruceros, menos gente)',
      'Crucero > kayak (ves más)',
      'Drive escénico increíble',
      'Lleva: chamarra, impermeable',
      'Llena tanque en Te Anau (última gasolinera)',
      'Avalanchas posibles invierno',
      'Milford Track requiere reserva meses antes',
      'Vuelo desde Queenstown = caro pero espectacular'
    ],
    
    accessibility: 'Cruceros accesibles. Hiking NO.',
    duration: '1 día (desde Queenstown) o 4 días (Milford Track)',
    
    weather: { temp: 14, condition: 'Lluvioso', icon: '🌧️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'uluru',
    name: 'Uluru (Ayers Rock)',
    city: 'Northern Territory',
    country: 'Australia',
    continent: 'Oceanía',
    flag: '🇦🇺',
    coordinates: { lat: -25.3444, lon: 131.0369 },
    category: 'Naturaleza / Sagrado',
    
    description: 'Monolito de arenisca sagrado de 348m. Sitio espiritual aborígen Anangu. Cambia de color con luz del día.',
    
    mustKnow: [
      'Altura: 348m sobre llanura',
      'Circunferencia: 9.4 km',
      'Edad: 600 millones de años',
      'Sagrado para pueblo Anangu',
      'Escalada prohibida desde 2019 (respeto)',
      'Cambia color: rojo-naranja-púrpura'
    ],
    
    whatToDo: [
      'Base Walk (10.6 km, 3.5h)',
      'Sunset viewing (color increíble)',
      'Sunrise viewing',
      'Kata Tjuta (The Olgas, 50 km)',
      'Field of Light installation',
      'Cultural tour con guía Anangu'
    ],
    
    howToGetThere: {
      flight: 'Ayers Rock Airport (directo desde ciudades)',
      drive: 'Alice Springs: 450 km (5h)',
      resort: 'Yulara (pueblo turístico a 20 min)',
      tour: 'Tours desde resort'
    },
    
    tickets: {
      park_entry: 'A$ 38 (3 días)',
      cultural_tour: 'A$ 150-200',
      field_of_light: 'A$ 45',
      camel_tour: 'A$ 75',
      helicopter: 'A$ 200-400'
    },
    
    bestTime: {
      season: 'Abril-octubre (fresco)',
      timeOfDay: 'Sunset (color rojo-naranja increíble)',
      avoid: 'Dic-feb (45°C+, insoportable)'
    },
    
    nearby: [
      'Kata Tjuta (The Olgas)',
      'Kings Canyon (3h)',
      'Alice Springs (5h)',
      'West MacDonnell Ranges'
    ],
    
    tips: [
      'NO ESCALES (prohibido y irrespetuoso)',
      'Sunset/sunrise = mejores momentos',
      'Base Walk temprano (antes del calor)',
      'Lleva: 3L agua, sombrero, protector solar',
      'Respeta sitios sagrados (no fotos donde prohibido)',
      'Alojamiento en Yulara (caro pero única opción)',
      'Tour cultural con Anangu vale la pena',
      'Field of Light (instalación) = bonito de noche',
      'Combina con Kata Tjuta (mismo día)'
    ],
    
    accessibility: 'Senderos pavimentados disponibles. Base Walk moderado.',
    duration: '2-3 días (incluye Kata Tjuta)',
    
    weather: { temp: 30, condition: 'Caluroso y seco', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'hobbiton',
    name: 'Hobbiton',
    city: 'Matamata',
    country: 'Nueva Zelanda',
    continent: 'Oceanía',
    flag: '🇳🇿',
    coordinates: { lat: -37.8722, lon: 175.6833 },
    category: 'Cine / Experiencia',
    
    description: 'Set de filmación permanente de El Señor de los Anillos y El Hobbit. 44 agujeros hobbit en Comarca preservada.',
    
    mustKnow: [
      'Construido para El Señor de los Anillos (1999)',
      'Reconstruido permanentemente para El Hobbit',
      '44 agujeros hobbit',
      '5 hectáreas de Comarca',
      'Jardines reales mantenidos',
      'Green Dragon Inn (cerveza incluida)'
    ],
    
    whatToDo: [
      'Tour guiado (2h, OBLIGATORIO)',
      'Visitar agujeros hobbit',
      'Bag End (casa Bilbo)',
      'Green Dragon Inn (cerveza)',
      'Jardines de la Comarca',
      'Molino de agua',
      'Evening Banquet Tour (cena, $200)'
    ],
    
    howToGetThere: {
      auckland: '2.5h drive (175 km)',
      rotorua: '1h drive',
      matamata: 'Pueblo base (15 min)',
      shuttle: 'Desde Matamata i-Site (incluido en tour)'
    },
    
    tickets: {
      adult: 'NZ$ 89 (~$54)',
      youth: 'NZ$ 44.50',
      child: 'Gratis (8 años o menos)',
      evening_banquet: 'NZ$ 200+ (cena incluida)',
      booking: 'OBLIGATORIO online (se llena)'
    },
    
    bestTime: {
      season: 'Todo el año',
      timeOfDay: 'Mañana (mejor luz) o evening banquet',
      avoid: 'Vacaciones escolares NZ (más niños)'
    },
    
    nearby: [
      'Waitomo Caves (glowworms, 1h)',
      'Rotorua (geotérmica, 1h)',
      'Auckland (2.5h)',
      'Tauranga (playas, 1.5h)'
    ],
    
    tips: [
      'RESERVA con semanas de anticipación',
      'Tour guiado es obligatorio (no puedes ir solo)',
      'Cerveza en Green Dragon incluida',
      'Jardines son REALES (jardineros tiempo completo)',
      'Fans de LOTR = experiencia increíble',
      'No-fans también lo disfrutan',
      'Combina con Waitomo Caves',
      'Evening Banquet = CARO pero especial',
      'Zapatos cómodos (mucho caminar en pasto)'
    ],
    
    accessibility: 'Caminos de pasto. Difícil silla de ruedas.',
    duration: '2 horas (tour estándar), 4h (evening banquet)',
    
    weather: { temp: 18, condition: 'Templado', icon: '⛅' },
    lastUpdated: '2025-11-20'
  }
];

// Funciones helper
export const getDestinationById = (id) => {
  return mustSeeDestinations.find(dest => dest.id === id);
};

export const getDestinationsByContinent = (continent) => {
  return mustSeeDestinations.filter(dest => dest.continent === continent);
};

export const searchDestinations = (query) => {
  const lowerQuery = query.toLowerCase();
  return mustSeeDestinations.filter(dest => 
    dest.name.toLowerCase().includes(lowerQuery) ||
    dest.city.toLowerCase().includes(lowerQuery) ||
    dest.country.toLowerCase().includes(lowerQuery)
  );
};

export const continents = ['Europa', 'América', 'Asia', 'África', 'Oceanía'];
