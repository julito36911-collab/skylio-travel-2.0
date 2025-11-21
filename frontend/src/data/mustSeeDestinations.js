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
    
    description: 'Icono mundial de París, la "Dama de Hierro" de 330m de altura construida en 1889 para la Exposición Universal.',
    
    mustKnow: [
      'Construida por Gustave Eiffel en 1889',
      '7 millones de visitantes al año',
      'Iluminada cada noche con 20,000 bombillas',
      '3 niveles accesibles (276m altura máxima)',
      'Originalmente iba a ser desmontada en 1909'
    ],
    
    whatToDo: [
      'Subir a la cima (ascensor o escaleras)',
      'Cena en restaurante Jules Verne (Michelin)',
      'Picnic en Champ de Mars',
      'Fotos desde Trocadéro (mejor vista)',
      'Ver el espectáculo de luces (cada hora de noche)'
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
      'Compra tickets online con MESES de anticipación',
      'Ve temprano (8:30 AM apertura) o tarde (después 8 PM)',
      'Miércoles-domingo más llenos',
      'Lleva snacks (comida dentro es cara)',
      'Cuidado con carteristas en la zona',
      'Prohibido drones y selfie sticks'
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
    
    description: 'Anfiteatro más grande jamás construido (80 d.C.), símbolo del Imperio Romano donde gladiadores combatían ante 50,000 espectadores.',
    
    mustKnow: [
      'Construido entre 72-80 d.C. por emperadores Flavios',
      'Capacidad: 50,000-80,000 espectadores',
      'Patrimonio de la Humanidad UNESCO (1980)',
      'Una de las 7 Maravillas del Mundo Moderno',
      'Dañado por terremotos y saqueos medievales'
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
    
    description: 'Obra maestra de Antoni Gaudí iniciada en 1882 y aún en construcción. Basílica modernista única en el mundo con fachadas surrealistas.',
    
    mustKnow: [
      'En construcción desde 1882 (143+ años)',
      'Diseñada por Antoni Gaudí (1852-1926)',
      'Completación estimada: 2026-2030',
      'Patrimonio UNESCO desde 1984',
      '18 torres cuando esté completa (12 apóstoles + 4 evangelistas + María + Jesús)',
      'Gaudí está enterrado en la cripta'
    ],
    
    whatToDo: [
      'Visitar interior (vitrales impresionantes)',
      'Subir a las torres (ascensor + escaleras)',
      'Ver fachada Natividad (lado este - Gaudí)',
      'Ver fachada Pasión (oeste - más moderna)',
      'Museo en sótano (maquetas y historia)',
      'Misa dominical con coro (gratis, llega temprano)'
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
  }

  // Continuará con más destinos en próximo bloque...
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
