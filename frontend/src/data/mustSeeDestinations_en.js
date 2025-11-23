// Must-See Destinations - Top 25 World Destinations

export const continents = ['All', 'Europe', 'Asia', 'America', 'Africa', 'Oceania'];

export const mustSeeDestinations = [
  {
    id: 'torre-eiffel',
    name: 'Eiffel Tower',
    city: 'Paris',
    country: 'France',
    continent: 'Europe',
    flag: '🇫🇷',
    coordinates: { lat: 48.8584, lon: 2.2945 },
    category: 'Monument',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Torre_Eiffel',
      en: 'https://en.wikipedia.org/wiki/Eiffel_Tower',
      he: 'https://he.wikipedia.org/wiki/%D7%9E%D7%92%D7%93%D7%9C_%D7%90%D7%99%D7%99%D7%A4%D7%9C'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=EkUeSZ8jyws',
      en: 'https://www.youtube.com/watch?v=CVujfJHYygw'
    },
    
    description: 'Global icon of Paris, the 330m tall "Iron Lady" built in 1889 for the Universal Exposition.',
    
    mustKnow: [
      'It was built by engineer Gustave Eiffel in 1889 as a monumental entrance to the Universal Exposition',
      'It receives over 7 million visitors per year, making it the most visited paid monument in the world',
      'Each night, the tower lights up with a show of 20,000 bulbs that sparkle for 5 minutes every hour',
      'It has 3 levels accessible to the public, reaching a maximum height of 276 meters at its summit',
      'It was originally designed as a temporary structure and was scheduled to be dismantled in 1909, but was saved thanks to its usefulness as a radio antenna'
    ],
    
    whatToDo: [
      'Climb to the top using the panoramic elevator or, if you feel adventurous, the stairs to the first and second floors',
      'Enjoy a romantic dinner at the Jules Verne restaurant, awarded a Michelin star, located on the second floor',
      'Relax with a typical Parisian picnic in the Champ de Mars gardens with a direct view of the tower',
      'Capture the best photographs from the Trocadéro esplanade, considered the most photogenic viewpoint',
      'Witness the magical light show that occurs every hour after nightfall, a truly special moment'
    ],
    
    tips: [
      'Book your tickets online several months in advance, as slots sell out quickly, especially during high season',
      'Plan your visit early in the morning (opens at 8:30 AM) or late afternoon (after 8 PM) to avoid crowds',
      'Keep in mind that days between Wednesday and Sunday tend to be more crowded than Mondays and Tuesdays',
      'Bring some snacks and drinks with you, as prices inside the tower are quite high',
      'Keep your belongings secure at all times, as the area is known for pickpockets who take advantage of crowds',
      'Remember that the use of drones and selfie sticks is prohibited for safety reasons'
    ],
    
    prices: { budget: '€20-40/day', medium: '€80-150/day', high: '€300+/day' },
    bestTime: { season: 'April-June & Sept-Oct', weather: 'Mild, sunny', icon: '☀️' },
    avoid: 'Mid-summer (very crowded)',
    accessibility: 'Elevators available, crowded',
    duration: '2-4 hours (including ascent)',
    nearby: ['Louvre', 'Arc de Triomphe', 'Champs-Élysées', 'Seine cruise', 'Trocadéro'],
    
    transportation: {
      metro: 'Line 6 (Bir-Hakeim), Line 9 (Trocadéro)',
      bus: '42, 69, 82, 87',
      parking: 'Pullman parking (expensive)'
    },
    
    lastUpdated: '2025-11-20'
  },

  {
    id: 'coliseo-romano',
    name: 'Roman Colosseum',
    city: 'Rome',
    country: 'Italy',
    continent: 'Europe',
    flag: '🇮🇹',
    coordinates: { lat: 41.8902, lon: 12.4922 },
    category: 'Historical Monument',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Coliseo',
      en: 'https://en.wikipedia.org/wiki/Colosseum',
      he: 'https://he.wikipedia.org/wiki/%D7%94%D7%A7%D7%95%D7%9C%D7%95%D7%A1%D7%99%D7%90%D7%95%D7%9D'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=EkUeSZ8jyws',
      en: 'https://www.youtube.com/watch?v=CVujfJHYygw'
    },
    
    description: 'Largest amphitheater ever built (80 AD), symbol of the Roman Empire where gladiators fought before 50,000 spectators.',
    
    mustKnow: [
      'It was built between 72 and 80 AD under the mandate of the emperors of the Flavian dynasty',
      'It had capacity to hold between 50,000 and 80,000 spectators who witnessed gladiator combats and public spectacles',
      'Declared a UNESCO World Heritage Site in 1980, recognizing its invaluable historical importance',
      'It is part of the 7 Wonders of the Modern World, selected by worldwide vote in 2007',
      'Over the centuries it has suffered considerable damage due to devastating earthquakes and looting during medieval times'
    ],
    
    whatToDo: [
      'Explore the arena floor where gladiators fought and walk in the footsteps of ancient warriors',
      'Visit the underground hypogeum to see where animals and gladiators waited before combat',
      'Climb to the upper levels for panoramic views of the Forum and Palatine Hill',
      'Take a guided tour to learn fascinating stories about Roman history and architecture',
      'Visit at sunset when the golden light creates a magical atmosphere',
      'Combine your visit with the Roman Forum and Palatine Hill (same ticket)'
    ],
    
    tips: [
      'Book online at least 2-3 weeks in advance to avoid sold-out dates',
      'Arrive 30 minutes before your time slot to pass security',
      'Wear comfortable shoes as there are many stairs and uneven surfaces',
      'Bring water, especially in summer when temperatures can exceed 35°C',
      'Avoid street vendors and unofficial guides who charge excessive prices',
      'The combo ticket (Colosseum + Forum + Palatine) is valid for 2 consecutive days'
    ],
    
    prices: { budget: '€20-40/day', medium: '€80-150/day', high: '€200+/day' },
    bestTime: { season: 'April-May & Sept-Oct', weather: 'Pleasant', icon: '☀️' },
    avoid: 'July-August (extreme heat 35°C+)',
    accessibility: 'Elevator for disabled, crowded',
    duration: '2-3 hours',
    nearby: ['Roman Forum', 'Palatine Hill', 'Arch of Constantine', 'Circus Maximus'],
    
    transportation: {
      metro: 'Line B (Colosseo)',
      bus: '75, 81, 673, 175',
      tram: 'Line 3'
    },
    
    lastUpdated: '2025-11-20'
  },

  {
    id: 'sagrada-familia',
    name: 'Sagrada Familia',
    city: 'Barcelona',
    country: 'Spain',
    continent: 'Europe',
    flag: '🇪🇸',
    coordinates: { lat: 41.4036, lon: 2.1744 },
    category: 'Architecture / Religious',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Templo_Expiatorio_de_la_Sagrada_Familia',
      en: 'https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia',
      he: 'https://he.wikipedia.org/wiki/%D7%91%D7%96%D7%99%D7%9C%D7%99%D7%A7%D7%AA_%D7%94%D7%A1%D7%92%D7%A8%D7%93%D7%94_%D7%A4%D7%9E%D7%99%D7%9C%D7%99%D7%94'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=XGT1P7ZUB6g',
      en: 'https://www.youtube.com/watch?v=ZxKzi97gPzo'
    },
    
    description: 'Masterpiece by Antoni Gaudí begun in 1882 and still under construction. Unique modernist basilica with surreal facades.',
    
    mustKnow: [
      'This masterpiece has been under continuous construction since 1882, accumulating over 143 years of work',
      'It was designed by the brilliant modernist architect Antoni Gaudí, who dedicated the last 15 years of his life exclusively to this project',
      'It is estimated that the basilica will be completely finished between 2026 and 2030, coinciding with the centenary of Gaudí\'s death',
      'It has been recognized as a UNESCO World Heritage Site since 1984, even while still unfinished',
      'When complete it will have 18 monumental towers: 12 representing the apostles, 4 the evangelists, one the Virgin Mary and the tallest Jesus Christ',
      'Antoni Gaudí himself rests eternally buried in the crypt of his most ambitious work'
    ],
    
    whatToDo: [
      'Marvel at the basilica\'s interior and its spectacular stained glass windows that create a unique play of light in the world',
      'Climb one of the towers using the elevator and stairs to enjoy panoramic views of Barcelona',
      'Admire the Nativity facade on the east side, the only one completed under Gaudí\'s direct supervision',
      'Observe the Passion facade on the west side, designed with a more angular and modern style',
      'Visit the museum located in the basement where you will find original models and historical documentation of the project',
      'If it\'s Sunday, try to attend the mass with choir which is free, although you must arrive early to get a seat'
    ],
    
    tips: [
      'Book your tickets 2 or 3 months in advance, especially if you plan to travel during high season',
      'If you\'re going to climb the towers, choose the Nativity one which offers the most spectacular views and architectural details',
      'Keep in mind that the tower stairs are quite narrow and steep, not recommended if you suffer from vertigo',
      'The audio guide is included in the entrance price and is extremely informative, don\'t miss it',
      'Respect the dress code: shoulders and knees must be covered to enter the basilica',
      'Large backpacks are not allowed and there is no storage available, travel light',
      'You can take as many photos as you want, but remember that the use of flash is strictly prohibited'
    ],
    
    prices: { budget: '€20-40/day', medium: '€80-150/day', high: '€200+/day' },
    bestTime: { season: 'May-June & Sept-Oct', weather: 'Mild', icon: '☀️' },
    avoid: 'Mid-summer and Christmas (very crowded)',
    accessibility: 'Elevator, adapted',
    duration: '2-3 hours',
    nearby: ['Park Güell', 'Casa Batlló', 'Casa Milà', 'Gothic Quarter', 'La Rambla'],
    
    transportation: {
      metro: 'Line 2 & 5 (Sagrada Família)',
      bus: '19, 33, 34, 43, 44, 50, 51',
      parking: 'BSM parking nearby'
    },
    
    lastUpdated: '2025-11-20'
  },

  {
    id: 'acropolis',
    name: 'Acropolis of Athens',
    city: 'Athens',
    country: 'Greece',
    continent: 'Europe',
    flag: '🇬🇷',
    coordinates: { lat: 37.9715, lon: 23.7267 },
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Acr%C3%B3polis_de_Atenas',
      en: 'https://en.wikipedia.org/wiki/Acropolis_of_Athens',
      he: 'https://he.wikipedia.org/wiki/%D7%94%D7%90%D7%A7%D7%A8%D7%95%D7%A4%D7%95%D7%9C%D7%99%D7%A1_%D7%A9%D7%9C_%D7%90%D7%AA%D7%95%D7%A0%D7%94'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=Yw5RgYHg4BU',
      en: 'https://www.youtube.com/watch?v=vdybN_QYZzA'
    },
    
    category: 'Archaeology / Historical',
    
    description: 'Ancient citadel from the 5th century BC. Parthenon and temples dedicated to Athena dominate the Athens skyline.',
    
    mustKnow: [
      'It was built during the Golden Age of Athens in the 5th century BC, under the leadership of Pericles',
      'The majestic Parthenon was dedicated to Athena, goddess of wisdom and protector of the city',
      'Declared a UNESCO World Heritage Site in 1987, recognizing its exceptional universal value',
      'It has suffered significant damage over the centuries due to wars, earthquakes and atmospheric pollution',
      'Many of its original sculptures are in the British Museum in London, generating international controversy about their repatriation'
    ],
    
    whatToDo: [
      'Contemplate the imposing Parthenon, the main temple and supreme symbol of classical Greek architecture',
      'Visit the Erechtheion and admire the famous Caryatids, the columns shaped like women supporting the porch',
      'Discover the small but elegant Temple of Athena Nike, dedicated to victory',
      'Cross the Propylaea, the monumental ceremonial entrance to the Acropolis',
      'Explore the Theater of Dionysus at the foot of the hill, considered the birthplace of Western theater',
      'Don\'t miss the New Acropolis Museum, an absolutely UNMISSABLE experience that contextualizes your entire visit'
    ],
    
    tips: [
      'Visit very early (8 AM opening) or late afternoon to avoid heat and crowds',
      'Wear very comfortable shoes with good grip, the marble is slippery',
      'Bring hat, sunscreen and water - there is no shade and it can be very hot',
      'The combo ticket (€30) includes 6 sites and is valid for 5 days',
      'Free entry on the first Sunday of each month (very crowded)',
      'The New Acropolis Museum is air-conditioned, perfect refuge from the heat'
    ],
    
    prices: { budget: '€20-40/day', medium: '€60-120/day', high: '€200+/day' },
    bestTime: { season: 'April-June & Sept-Oct', weather: 'Pleasant', icon: '☀️' },
    avoid: 'July-August (extreme heat 40°C+, insupportable)',
    accessibility: 'Elevator for disabled to Parthenon',
    duration: '2-3 hours',
    nearby: ['Plaka', 'Ancient Agora', 'Temple of Olympian Zeus', 'Philopappos Hill (best views)', 'Herod Atticus Theater'],
    
    transportation: {
      metro: 'Line 2 (Acropolis)',
      bus: '230',
      walking: 'From Syntagma 15 min'
    },
    
    lastUpdated: '2025-11-20'
  },

  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    city: 'Cusco',
    country: 'Peru',
    continent: 'America',
    flag: '🇵🇪',
    coordinates: { lat: -13.1631, lon: -72.5450 },
    category: 'Archaeology',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Machu_Picchu',
      en: 'https://en.wikipedia.org/wiki/Machu_Picchu'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=1zsuuxALFSI',
      en: 'https://www.youtube.com/watch?v=VIXxhsN36T0'
    },
    
    description: '15th century Inca citadel in the Andes mountains. "Lost City of the Incas" at 2,430m altitude.',
    
    mustKnow: [
      'It was built approximately in 1450 under the mandate of Inca emperor Pachacútec as a royal residence and religious sanctuary',
      'It remained hidden for centuries until it was rediscovered by American explorer Hiram Bingham in 1911',
      'It is part of the 7 Wonders of the Modern World, being the most emblematic archaeological site in South America',
      'Declared a UNESCO World Heritage Site in 1983, recognizing its extraordinary cultural value',
      'It is located at 2,430 meters altitude, curiously lower than the city of Cusco which is at 3,400 meters',
      'Its name means "Old Mountain" in Quechua language, referring to the peak that dominates the site'
    ],
    
    whatToDo: [
      'Walk through the amazing complete citadel dedicating 2 to 4 hours to appreciate all its corners',
      'Climb Huayna Picchu or Machu Picchu Mountain to get absolutely spectacular panoramic views of the complex',
      'Visit the sacred places like the Temple of the Sun, the Main Plaza and the enigmatic Intihuatana (sun clock)',
      'Capture the classic photo from the main viewpoint, the most iconic image of Machu Picchu',
      'Venture to the Inca Bridge if you feel brave, an optional but exciting experience',
      'Explore Aguas Calientes, the charming base town where you will spend the night before or after your visit'
    ],
    
    tips: [
      'Book tickets 2-3 MONTHS in advance, they sell out quickly',
      'Acclimatize in Cusco 2-3 days before (altitude)',
      'Train from Ollantaytambo is most common (2h)',
      'Inca Trail requires 6 months advance booking',
      'Bring passport (required for entry)',
      'Drones prohibited, walking sticks allowed with rubber tips'
    ],
    
    prices: { budget: '$30-50/day', medium: '$80-150/day', high: '$200+/day' },
    bestTime: { season: 'April-Oct (dry season)', weather: 'Sunny, clear', icon: '☀️' },
    avoid: 'Jan-March (rainy season, difficult access)',
    accessibility: 'Difficult, many stairs',
    duration: '1 full day (with transport)',
    nearby: ['Sacred Valley', 'Ollantaytambo', 'Pisac', 'Moray terraces', 'Vinicunca Rainbow Mountain', 'Maras salt mines'],
    
    transportation: {
      train: 'PeruRail or IncaRail from Ollantaytambo',
      bus: 'From Aguas Calientes (30 min)',
      hiking: 'Inca Trail (4 days) or alternative treks'
    },
    
    lastUpdated: '2025-11-20'
  },

  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    city: 'Agra',
    country: 'India',
    continent: 'Asia',
    flag: '🇮🇳',
    coordinates: { lat: 27.1751, lon: 78.0421 },
    category: 'Historical Monument',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Taj_Mahal',
      en: 'https://en.wikipedia.org/wiki/Taj_Mahal',
      he: 'https://he.wikipedia.org/wiki/%D7%98%D7%90%D7%92%27_%D7%9E%D7%90%D7%94%D7%9C'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=P9r1dO-3yDw',
      en: 'https://www.youtube.com/watch?v=EKgLnUqmYzk'
    },
    
    description: 'White marble mausoleum built 1632-1653 by Emperor Shah Jahan for his wife Mumtaz Mahal. Masterpiece of Mughal art.',
    
    mustKnow: [
      'Its construction took 22 years, from 1632 to 1653, requiring a monumental effort',
      'More than 20,000 artisan workers from all over Asia participated in its elaboration',
      'It is built of immaculate white marble with intricate inlays of precious and semi-precious stones',
      'It was declared a UNESCO World Heritage Site in 1983, recognizing its incomparable beauty',
      'It is part of the 7 Wonders of the Modern World, being an eternal symbol of love',
      'The marble magically changes color throughout the day: pink at dawn, dazzling white at noon, golden at sunset'
    ],
    
    whatToDo: [
      'Contemplate the Taj Mahal at sunrise when the golden light creates a truly magical and unforgettable atmosphere',
      'Stroll through the symmetrical Mughal-style Charbagh gardens that symbolize earthly paradise',
      'Visit the mosque and Guest House located on both sides of the main mausoleum',
      'Approach the Yamuna River for a different perspective of the rear view of the monument',
      'Explore the impressive Agra Fort located just 2 kilometers away',
      'Capture the best photographs from Mehtab Bagh, the garden located across the river offering perfect views'
    ],
    
    tips: [
      'Go at sunrise (6-8 AM) for fewer crowds and magical light',
      'Friday closed (prayer day)',
      'Remove shoes before entering (free lockers)',
      'No food, cigarettes or large bags allowed',
      'Photos allowed but no tripods',
      'Hire official guide at entrance (₹200-400)'
    ],
    
    prices: { budget: '₹500-1000/day', medium: '₹2000-4000/day', high: '₹8000+/day' },
    bestTime: { season: 'Oct-March', weather: 'Cool, pleasant', icon: '☀️' },
    avoid: 'May-August (heat 45°C+, monsoons)',
    accessibility: 'Wheelchairs available, adapted paths',
    duration: '2-3 hours',
    nearby: ['Agra Fort (2 km)', 'Itimad-ud-Daulah (Baby Taj)', 'Mehtab Bagh (garden with view of Taj)', 'Delhi (230 km) and Jaipur (240 km)'],
    
    transportation: {
      train: 'From Delhi 3-4h (230 km)',
      car: 'Toll highway, good condition',
      flight: 'No commercial airport in Agra',
      local: 'Tuk-tuk, taxi, bus'
    },
    
    lastUpdated: '2025-11-20'
  },

  {
    id: 'gran-muralla-china',
    name: 'Great Wall of China',
    city: 'Beijing',
    country: 'China',
    continent: 'Asia',
    flag: '🇨🇳',
    coordinates: { lat: 40.4319, lon: 116.5704 },
    category: 'Historical Monument',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Gran_Muralla_China',
      en: 'https://en.wikipedia.org/wiki/Great_Wall_of_China',
      he: 'https://he.wikipedia.org/wiki/%D7%94%D7%97%D7%95%D7%9E%D7%94_%D7%94%D7%A1%D7%99%D7%A0%D7%99%D7%AA'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=k2iNu7jX26k',
      en: 'https://www.youtube.com/watch?v=q6TcjXHbkI8'
    },
    
    description: 'Fortification system of 21,000 km built from 7th century BC to 17th century. The longest human structure in the world.',
    
    mustKnow: [
      'It extends for more than 21,000 kilometers across northern China, being the most extensive human structure ever built',
      'Its construction took more than 2,000 years, from the 7th century BC to the 17th century, involving millions of workers',
      'Most of the wall we see today was built during the Ming Dynasty between 1368 and 1644',
      'It was declared a UNESCO World Heritage Site in 1987, recognizing its unique historical value',
      'Contrary to popular myth, it is NOT visible from space with the naked eye, as astronauts have confirmed',
      'The best preserved and most visited sections are in the surroundings of Beijing'
    ],
    
    whatToDo: [
      'Visit Badaling, the most touristy and accessible section, ideal if you have limited time or reduced mobility',
      'Explore Mutianyu, less crowded than Badaling and with a fun alpine slide to go down',
      'Walk Jinshanling to hike on one of the most photogenic and dramatic sections',
      'Experience Simatai at night, when the wall is illuminated creating a spectacular atmosphere',
      'Venture to Jiankou if you seek authenticity, a wild and NOT restored section for experienced hikers',
      'Discover Huanghuacheng where the wall literally touches the water of a beautiful lake'
    ],
    
    tips: [
      'Go early (8 AM) to avoid tour groups',
      'Wear good hiking shoes (uneven, steep)',
      'Bring water and snacks (limited on wall)',
      'Badaling: most crowded but best transport',
      'Mutianyu: toboggan slide down (fun)',
      'Cable car available at most sections'
    ],
    
    prices: { budget: '¥100-200/day', medium: '¥400-800/day', high: '¥1500+/day' },
    bestTime: { season: 'April-May & Sept-Oct', weather: 'Mild, clear', icon: '☀️' },
    avoid: 'Chinese holidays (millions of tourists)',
    accessibility: 'Cable cars, but still stairs',
    duration: '4-6 hours (with transport)',
    nearby: ['Forbidden City', 'Summer Palace', 'Temple of Heaven', 'Ming Tombs', 'Beijing hutongs'],
    
    transportation: {
      tour: 'Organized tours from Beijing',
      bus: 'Public bus to Badaling',
      taxi: 'Expensive but convenient',
      train: 'High-speed to Badaling'
    },
    
    lastUpdated: '2025-11-20'
  },

  {
    id: 'piramides-giza',
    name: 'Pyramids of Giza',
    city: 'Cairo',
    country: 'Egypt',
    continent: 'Africa',
    flag: '🇪🇬',
    coordinates: { lat: 29.9792, lon: 31.1342 },
    category: 'Archaeology',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Pir%C3%A1mides_de_Guiza',
      en: 'https://en.wikipedia.org/wiki/Giza_pyramid_complex',
      he: 'https://he.wikipedia.org/wiki/%D7%94%D7%A4%D7%99%D7%A8%D7%9E%D7%99%D7%93%D7%95%D7%AA_%D7%91%D7%92%D7%99%D7%96%D7%94'
    },
    
    description: 'Only survivors of the 7 Wonders of the Ancient World. Pyramids of Khufu, Khafre and Menkaure (~2560 BC) and the Great Sphinx.',
    
    mustKnow: [
      'They were built around 2560 BC, more than 4,500 years ago during Egypt\'s Old Kingdom',
      'The Great Pyramid of Khufu originally measured 146 meters tall, being the tallest structure in the world for 3,800 years',
      'They are the only one of the Seven Wonders of the Ancient World that has survived to our days',
      'Declared a UNESCO World Heritage Site in 1979 as part of the pyramid complex',
      'The Great Pyramid is composed of approximately 2.3 million stone blocks, each weighing between 2 and 15 tons',
      'The enigmatic Great Sphinx measures 73 meters long and 20 meters high, guarding the pyramids for millennia'
    ],
    
    whatToDo: [
      'Explore the three main pyramids of pharaohs Khufu, Khafre and Menkaure, each with its own story',
      'Venture inside the Great Pyramid to visit the impressive king\'s chamber (additional entrance required)',
      'Contemplate closely the mysterious Great Sphinx with human head and lion body',
      'Visit the fascinating Solar Boat Museum exhibiting a 4,500-year-old perfectly preserved funerary vessel',
      'Take a camel ride around the pyramids, a typically touristy but fun experience',
      'Attend the nighttime sound and light show that narrates the history of the pharaohs'
    ],
    
    tips: [
      'Arrive very early (opening 8 AM) to beat heat and crowds',
      'Haggle EVERYTHING: camel rides, photos, souvenirs',
      'Ignore persistent vendors and "helpers"',
      'Bring lots of water and sun protection',
      'Official guide recommended (avoid scammers)',
      'Negotiate ALL (camels, souvenirs)'
    ],
    
    prices: { budget: 'EGP 200-400/day', medium: 'EGP 800-1500/day', high: 'EGP 3000+/day' },
    bestTime: { season: 'Oct-April', weather: 'Pleasant, mild', icon: '☀️' },
    avoid: 'May-August (45°C+, unbearable)',
    accessibility: 'Difficult, sandy terrain',
    duration: '3-4 hours',
    nearby: ['Egyptian Museum', 'Cairo Citadel', 'Khan el-Khalili bazaar', 'Saqqara (Step Pyramid)', 'Memphis'],
    
    transportation: {
      metro: 'To Giza, then taxi',
      taxi: 'From Cairo center',
      uber: 'Available and safe',
      tour: 'Organized tours recommended'
    },
    
    lastUpdated: '2025-11-20'
  },

  {
    id: 'cristo-redentor',
    name: 'Christ the Redeemer',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    continent: 'America',
    flag: '🇧🇷',
    coordinates: { lat: -22.9519, lon: -43.2105 },
    category: 'Monument',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Cristo_Redentor',
      en: 'https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)',
      he: 'https://he.wikipedia.org/wiki/%D7%94%D7%9E%D7%A9%D7%99%D7%97_%D7%94%D7%9E%D7%A9%D7%97%D7%A8%D7%A8'
    },
    
    description: '30m Art Deco statue of Jesus atop Corcovado Hill (710m). Symbol of Brazil and one of the 7 Wonders of the Modern World.',
    
    mustKnow: [
      'It was solemnly inaugurated on October 12, 1931 after 9 years of construction',
      'The statue measures 30 meters in height, reaching 38 meters if the pedestal on which it stands is included',
      'Its outstretched arms span an impressive 28 meters, symbolizing universal welcome',
      'It has a colossal weight of 635 tons, built mainly of reinforced concrete and soapstone',
      'It was chosen as one of the 7 Wonders of the Modern World in 2007 by worldwide popular vote',
      'It offers an absolutely spectacular 360-degree panoramic view of all of Rio de Janeiro'
    ],
    
    whatToDo: [
      'Climb to the top of Corcovado using the picturesque cogwheel train or official vans',
      'Marvel at the incomparable panoramic view of Rio, its beaches, the bay and Sugarloaf Mountain',
      'Capture the iconic photographs posing next to Christ with arms open',
      'Explore the lush Tijuca National Park with its hiking trails in the urban rainforest',
      'If you\'re lucky, attend one of the Sunday masses occasionally held at the foot of the statue',
      'Don\'t miss the sunset from here, when the sun sets over Rio creating a truly magical atmosphere'
    ],
    
    tips: [
      'Book online to avoid long queues',
      'Cog train more scenic, van faster',
      'Can be cloudy (check weather)',
      'Sunset magical but more crowded',
      'Bring jacket (windy at top)',
      'Free on first Sunday of month (very crowded)'
    ],
    
    prices: { budget: 'R$50-100/day', medium: 'R$200-400/day', high: 'R$800+/day' },
    bestTime: { season: 'May-Oct (drier)', weather: 'Clear, sunny', icon: '☀️' },
    avoid: 'Cloudy days (you won\'t see anything)',
    accessibility: 'Elevator and ramps available',
    duration: '2-3 hours (with transport)',
    nearby: ['Sugarloaf', 'Copacabana Beach', 'Ipanema', 'Tijuca Forest', 'Botanical Garden', 'Beaches: Copacabana, Ipanema'],
    
    transportation: {
      train: 'Cog railway from Cosme Velho',
      van: 'Official vans from Paineiras',
      uber: 'To Paineiras parking',
      hiking: 'Trail from Parque Lage (2h)'
    },
    
    lastUpdated: '2025-11-20'
  },

  {
    id: 'gran-canyon',
    name: 'Grand Canyon',
    city: 'Arizona',
    country: 'United States',
    continent: 'America',
    flag: '🇺🇸',
    coordinates: { lat: 36.0544, lon: -112.1401 },
    category: 'Nature',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Gran_Ca%C3%B1%C3%B3n',
      en: 'https://en.wikipedia.org/wiki/Grand_Canyon',
      he: 'https://he.wikipedia.org/wiki/%D7%94%D7%92%D7%A8%D7%A0%D7%93_%D7%A7%D7%A0%D7%99%D7%95%D7%9F'
    },
    
    description: 'Canyon carved by the Colorado River. 446 km long, 29 km wide, 1,800m deep. Visible rock from 2 billion years ago.',
    
    mustKnow: [
      'This geological wonder was formed between 5 and 6 million years ago by the tireless erosion of the Colorado River',
      'Its dimensions are astonishing: 446 kilometers long, up to 29 kilometers wide and 1,800 meters deep',
      'It was designated a National Park in 1919, protecting this natural treasure for future generations',
      'Declared a UNESCO World Heritage Site, recognizing its unique geological value in the world',
      'The South Rim (south edge) remains open throughout the year and is the most visited and accessible',
      'The North Rim (north edge) closes from November to May due to heavy snowfall that makes the accesses impassable'
    ],
    
    whatToDo: [
      'Contemplate the views from Mather Point, the classic and most photographed viewpoint of the South Rim',
      'Climb the historic Desert View Watchtower, a tower designed to offer 360-degree panoramic views',
      'Venture down the Bright Angel Trail if you want to descend to the bottom of the canyon, but prepare for an extreme physical challenge',
      'Walk on the Skywalk, a glass walkway that projects over the abyss (requires additional $50 entrance)',
      'Travel Hermit Road at sunset to witness how the canyon colors transform with golden light',
      'Consider a helicopter tour for an unforgettable aerial perspective of the canyon ($200-400)'
    ],
    
    tips: [
      'DO NOT attempt to hike to bottom and back same day (dangerous)',
      'Bring 3x more water than you think you need',
      'Summer 35°C+ rim, 45°C+ canyon bottom',
      'Winter can snow (North Rim closed)',
      'Sunrise/sunset best colors',
      'Free shuttle buses (March-Nov)'
    ],
    
    prices: { budget: '$40-80/day', medium: '$150-250/day', high: '$400+/day' },
    bestTime: { season: 'May-June & Sept-Oct', weather: 'Mild, sunny', icon: '☀️' },
    avoid: 'July-August (crowds, heat)',
    accessibility: 'Rim accessible, canyon difficult',
    duration: '1-3 days',
    nearby: ['Las Vegas (4.5h drive)', 'Sedona (2h)', 'Antelope Canyon', 'Horseshoe Bend', 'Monument Valley', 'Route 66 (Williams)'],
    
    transportation: {
      car: 'From Las Vegas or Phoenix',
      flight: 'To Flagstaff, then drive',
      shuttle: 'Free buses within park',
      helicopter: 'Tours from Vegas/South Rim'
    },
    
    lastUpdated: '2025-11-20'
  },

  // ===== DESTINATION #11: VENICE CANALS =====
  {
    id: 'venecia-canales',
    name: 'Venice Canals',
    city: 'Venice',
    country: 'Italy',
    continent: 'Europe',
    flag: '🇮🇹',
    coordinates: { lat: 45.4408, lon: 12.3155 },
    category: 'City / Experience',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Venecia',
      en: 'https://en.wikipedia.org/wiki/Venice'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=1pDbqWj5m5Y',
      en: 'https://www.youtube.com/watch?v=MdBjjqJKMJ8'
    },
    
    description: 'Unique city built on 118 islands with 150 canals and 400 bridges. No cars, only gondolas and vaporettos.',
    
    mustKnow: [
      'Founded in the 5th century as a refuge from barbarian invasions, becoming a medieval maritime power',
      'This unique city is built on 118 small islands connected by more than 400 historic bridges',
      'The Grand Canal is its main artery, winding 3.8 kilometers through the heart of the city',
      'Venice is slowly sinking at a rate of 1-2 millimeters per year due to soil subsidence and rising sea levels',
      'Its population has drastically decreased from 175,000 inhabitants in 1950 to barely 50,000 today',
      'Declared a UNESCO World Heritage Site, but listed as endangered due to flooding and mass tourism'
    ],
    
    whatToDo: [
      'Enjoy a romantic traditional gondola ride through the most picturesque canals (€80-100 for 30 minutes)',
      'Visit the majestic St. Mark\'s Square and the impressive Basilica with its golden Byzantine mosaics',
      'Explore the historic Doge\'s Palace (Palazzo Ducale), the former center of power of the Venetian Republic',
      'Cross the iconic Rialto Bridge, the oldest and most photographed bridge spanning the Grand Canal',
      'Take excursions to nearby islands: Murano famous for its handblown glass, and Burano for its vibrant colored houses',
      'Get deliberately lost in the narrow alleys without following a map, that\'s when you\'ll discover the most authentic Venice'
    ],
    
    howToGetThere: {
      train: 'Santa Lucia Station (arrival from all over Europe)',
      bus: 'Piazzale Roma (bus terminal)',
      airport: 'Marco Polo Airport + water taxi or bus',
      car: 'Park at Tronchetto or Piazzale Roma (€30/day)',
      vaporetto: 'Lines 1 and 2 (€9.50 per trip, €25 day pass)'
    },
    
    tickets: {
      vaporetto_single: '€9.50 (75 min)',
      vaporetto_day: '€25',
      gondola: '€80 (day) / €100 (night) - 30 min',
      museums_pass: '€30 (11 civic museums)',
      church_pass: '€12 (16 churches)'
    },
    
    bestTime: {
      season: 'April-May or Sept-Oct (fewer tourists)',
      timeOfDay: 'Dawn or dusk for photos',
      avoid: 'Summer and Carnival (impossibly crowded), Acqua Alta Nov-Feb'
    },
    
    nearby: [
      'Murano (blown glass)',
      'Burano (lace and colorful houses)',
      'Torcello (quiet island)',
      'Lido (beach)',
      'Verona (1.5h train)'
    ],
    
    tips: [
      'DO NOT go in July-August (cruise ship hordes)',
      'Gondola is EXPENSIVE, only if it\'s worth it to you',
      'Vaporetto Line 1 is the "cheap gondola"',
      'Eat outside of San Marcos (€30 coffee there)',
      'Hostels/Airbnb cheaper than hotels',
      'Bring comfortable shoes (you\'ll walk a lot)',
      'Acqua Alta floods squares (Nov-Feb)'
    ],
    
    accessibility: 'Difficult with wheelchair (many bridges with stairs)',
    duration: '2-3 days minimum',
    
    lastUpdated: '2025-11-20'
  },

  
  {
    id: 'cataratas-iguazu',
    name: 'Iguazu Falls',
    city: 'Puerto Iguazú',
    country: 'Argentina / Brazil',
    continent: 'America',
    flag: '🇦🇷🇧🇷',
    coordinates: { lat: -25.6953, lon: -54.4367 },
    category: 'Nature',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Cataratas_del_Iguaz%C3%BA',
      en: 'https://en.wikipedia.org/wiki/Iguazu_Falls'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=ztvk0xDjz6Q',
      en: 'https://www.youtube.com/watch?v=FfMxwp5U4Hk'
    },
    
    description: '275 waterfalls on Argentina-Brazil border. Bigger than Niagara, wider than Victoria. "Devil\'s Throat" is the most impressive.',
    
    mustKnow: [
      'This impressive system is composed of 275 individual waterfalls that majestically extend along the border',
      'The waterfall complex spans a total width of 2.7 kilometers of pure natural beauty',
      'The falls reach heights of up to 82 meters, with Devil\'s Throat being the highest and most striking',
      'They carry more water than Niagara Falls and Victoria Falls combined',
      'Declared a UNESCO World Heritage Site, protecting this unique ecosystem',
      'First Lady Eleanor Roosevelt exclaimed upon seeing them: "Poor Niagara!" recognizing their superiority'
    ],
    
    whatToDo: [
      'Visit the spectacular Devil\'s Throat from the Argentine side, an absolutely UNMISSABLE experience that will leave you breathless',
      'Walk the upper and lower walkways that allow you to appreciate the falls from multiple unique perspectives',
      'Dare to take the boat Safari that takes you directly under the waterfalls, prepare to get completely soaked',
      'Experience the adrenaline of the Great Adventure in a rubber boat, navigating the rapids of the Iguazu River',
      'Explore the Macuco Trail to observe the fascinating jungle wildlife of the region',
      'Cross to the Brazilian side for the most photogenic panoramic view of the entire waterfall complex'
    ],
    
    howToGetThere: {
      flights: 'Buenos Aires → Iguazu (2h) | São Paulo → Foz (2h)',
      bus: 'Puerto Iguazú (Argentine side) ↔ Foz do Iguaçu (Brazilian side)',
      shuttle: 'Hotels → parks (frequent)',
      border: 'Easy to cross border (bring passport)'
    },
    
    tickets: {
      argentina: '$15 USD (foreigners)',
      brasil: '$18 USD (National Park)',
      both: 'Worth visiting both sides',
      boat: '$20 USD (Great Adventure)'
    },
    
    bestTime: {
      season: 'March-May or August-October',
      timeOfDay: 'Early morning (fewer people)',
      avoid: 'Dec-Feb (extreme heat 40°C, very humid)',
      water: 'More water in summer, less in winter'
    },
    
    nearby: [
      'Three Borders Landmark (Argentina-Brazil-Paraguay)',
      'Bird Park (Brazil - bird sanctuary)',
      'Jesuit ruins',
      'Itaipu Dam (Brazil)',
      'Duty Free (Paraguay)'
    ],
    
    tips: [
      'Visit BOTH sides (different perspective)',
      'Argentine = being AT the falls (better)',
      'Brazilian = panoramic view (incredible photos)',
      'Bring raincoat for Devil\'s Throat',
      'Change of clothes if you do boat safari',
      'Non-slip shoes (wet walkways)',
      'Waterproof sunscreen',
      '2 days minimum (1 per side)'
    ],
    
    accessibility: 'Walkways accessible. Boat safari NOT accessible',
    duration: '1 day per side (2 days total recommended)',
    
    lastUpdated: '2025-11-20'
  },

  
  {
    id: 'times-square',
    name: 'Times Square',
    city: 'New York',
    country: 'United States',
    continent: 'America',
    flag: '🇺🇸',
    coordinates: { lat: 40.7580, lon: -73.9855 },
    category: 'Urban / Experience',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Times_Square',
      en: 'https://en.wikipedia.org/wiki/Times_Square'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=VctCDnYPdeU',
      en: 'https://www.youtube.com/watch?v=7pcZURDhJk0'
    },
    
    description: 'Iconic Manhattan intersection, "Crossroads of the World". Giant LED screens, Broadway theaters, 24/7 energy.',
    
    mustKnow: [
      'Originally known as "Longacre Square" before its transformation into the iconic Times Square',
      'Renamed in 1904 when the New York Times built its headquarters tower at the intersection',
      'Receives between 300,000 and 400,000 pedestrians daily, making it one of the most trafficked areas in the world',
      'The famous New Year\'s Eve Ball Drop attracts over 1 million people every December 31st',
      'Became a completely pedestrian zone in 2009, eliminating vehicular traffic from the central area',
      'Remains illuminated 24 hours a day, 7 days a week with dazzling LED advertising screens'
    ],
    
    whatToDo: [
      'Take epic photographs surrounded by the giant LED screens that illuminate the entire square',
      'Attend a spectacular Broadway show at one of the historic theaters surrounding the area',
      'Visit M&M\'s World, a 4-story store entirely dedicated to the famous colorful chocolates',
      'Explore iconic stores like Disney Store, Nike flagship and Hershey\'s Chocolate World',
      'Enjoy a unique meal at Ellen\'s Stardust Diner where the waiters are professional singers',
      'Observe and photograph the colorful living statues, but remember they expect tips for photos'
    ],
    
    howToGetThere: {
      subway: 'N, Q, R, W, S, 1, 2, 3, 7 → Times Sq-42 St',
      walking: 'Midtown Manhattan, everything close',
      bus: 'M7, M20, M42, M104',
      taxi: 'Avoid (terrible traffic)'
    },
    
    tickets: {
      free: 'Free to walk and see',
      broadway: '$50-300 (TodayTix app for discounts)',
      attractions: 'M&M\'s, Madame Tussauds ~$30 each'
    },
    
    bestTime: {
      season: 'Year-round (urban experience)',
      timeOfDay: 'Evening (screens look better)',
      avoid: 'New Year if you don\'t want extreme crowds',
      nye: 'New Year\'s Eve = 1 million people (arrive 6 AM for spot)'
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
      'It\'s a tourist trap but worth seeing',
      'Restaurants expensive and mediocre (eat outside TS)',
      'Watch out for costumed characters (ask for tips)',
      'Pickpockets active (watch your pockets)',
      'At night it\'s safe (lots of people and police)',
      'Better to LOOK than buy (everything more expensive)',
      'TKTS booth for discount Broadway tickets',
      'Go, take photos, and leave (don\'t spend all day)'
    ],
    
    accessibility: 'Completely accessible (pedestrian and flat)',
    duration: '30 min - 1 hour (just to see), +3 hours (Broadway)',
    
    lastUpdated: '2025-11-20'
  },
  
  {
    id: 'angkor-wat',
    name: 'Angkor Wat',
    city: 'Siem Reap',
    country: 'Cambodia',
    continent: 'Asia',
    flag: '🇰🇭',
    coordinates: { lat: 13.4125, lon: 103.8670 },
    category: 'Temple / Archaeology',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Angkor_Wat',
      en: 'https://en.wikipedia.org/wiki/Angkor_Wat'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=3HGWnBG0zR4',
      en: 'https://www.youtube.com/watch?v=YU_0FYbP47s'
    },
    
    description: '12th century Khmer temple complex. World\'s largest religious monument, symbol of Cambodia.',
    
    mustKnow: [
      'Built in the 12th century under the reign of King Suryavarman II as his state temple and capital',
      'Originally dedicated to the Hindu god Vishnu, though later converted to a Buddhist temple',
      'It is the LARGEST religious monument in the world, covering an area of approximately 162 hectares',
      'Declared a UNESCO World Heritage Site in 1992, being the national symbol of Cambodia',
      'The Angkor archaeological complex contains more than 400 temples distributed over an extensive area',
      'Represents the best preserved example of classical Khmer architecture and its aesthetic perfection'
    ],
    
    whatToDo: [
      'Witness the sunrise at Angkor Wat reflecting in the front pond, an absolutely ICONIC and unmissable experience',
      'Explore Angkor Thom and the Bayon temple with its 216 enigmatic giant carved faces watching you from all directions',
      'Visit Ta Prohm, the mystical temple embraced by enormous ancient tree roots, famous for appearing in Tomb Raider',
      'Discover Banteay Srei, known for its extraordinary carvings in pink sandstone of incredible detail',
      'Do the small circuit if you only have 1 day to see the most important temples',
      'Dedicate 2-3 days to the grand circuit if you want to explore the complete complex in greater depth'
    ],
    
    howToGetThere: {
      flight: 'Siem Reap International Airport',
      tuk_tuk: '$15-20/day (most common way)',
      bike: '$2/day (only if you have energy)',
      car: '$30-50/day with driver',
      from_town: '6 km from Siem Reap'
    },
    
    tickets: {
      one_day: '$37',
      three_day: '$62 (use within 10 days)',
      seven_day: '$72 (use within 1 month)',
      sunrise: 'Included (arrive 5 AM)',
      booking: 'Buy at ticket office with photo'
    },
    
    bestTime: {
      season: 'Nov-March (dry, cool)',
      timeOfDay: 'Sunrise 5:30 AM (Angkor Wat)',
      avoid: 'April (45°C+), monsoon June-Oct',
      crowds: 'Avoid Cambodian holidays'
    },
    
    nearby: [
      'Bayon (temple of faces)',
      'Ta Prohm (giant trees)',
      'Banteay Srei',
      'Tonlé Sap (floating lake)',
      'Pub Street Siem Reap (nightlife)'
    ],
    
    tips: [
      'Buy 3-day pass (worth it)',
      'Hire tuk-tuk per day ($15-20)',
      'Sunrise at Angkor Wat = UNMISSABLE',
      'Bring: water, sunscreen, hat',
      'Dress code: shoulders and knees covered',
      'Early less heat and people',
      'Ta Prohm best 2-3 PM (light)',
      'Watch out for monkeys (steal food)'
    ],
    
    accessibility: 'Irregular terrain. Difficult for wheelchairs',
    duration: '3-4 days ideal (minimum 1 day)',
    
    lastUpdated: '2025-11-20'
  },
  
  {
    id: 'monte-fuji',
    name: 'Mount Fuji',
    city: 'Shizuoka / Yamanashi',
    country: 'Japan',
    continent: 'Asia',
    flag: '🇯🇵',
    coordinates: { lat: 35.3606, lon: 138.7274 },
    category: 'Nature / Mountain',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Monte_Fuji',
      en: 'https://en.wikipedia.org/wiki/Mount_Fuji'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=QEG2SIZoLF8',
      en: 'https://www.youtube.com/watch?v=JxYmILDya0A'
    },
    
    description: 'Sacred mountain and active volcano at 3,776m. Symbol of Japan, perfectly symmetrical, snow-capped.',
    
    mustKnow: [
      'At 3,776 meters altitude, it is the highest mountain in all of Japan and its most recognizable symbol',
      'It is an active volcano that had its last eruption in 1707, although it is currently considered low activity',
      'Inscribed as a UNESCO World Heritage Site in 2013 as a "sacred site and source of artistic inspiration"',
      'Considered sacred in both Shintoism and Buddhism, being an important pilgrimage site',
      'Official climbing is only permitted during July and August when weather conditions are safe',
      'On clear days it is visible from Tokyo, 100 kilometers away, creating a spectacular view'
    ],
    
    whatToDo: [
      'Climb to the summit during the official July-August season to live a unique experience',
      'Witness the sunrise from the summit, known as "Goraiko", considered an unforgettable spiritual experience',
      'Visit the 5th station located at 2,305 meters altitude, accessible by car and starting point for most climbs',
      'Explore the Fuji Five Lakes surrounding the mountain, with Lake Kawaguchiko being the most popular and photogenic',
      'Capture the iconic photo from Chureito Pagoda with Mount Fuji majestically in the background',
      'Venture into the mysterious Aokigahara Forest, known for its dense foliage and unique atmosphere'
    ],
    
    howToGetThere: {
      tokyo: 'Train to Kawaguchiko (2h, ¥4,130) + bus',
      bus: 'Shinjuku → 5th station (2.5h, ¥2,800)',
      climbing: '5th station = starting point',
      best_view: 'Lake Kawaguchiko or Hakone'
    },
    
    tickets: {
      climbing_fee: '¥1,000 (voluntary but expected)',
      fifth_station: 'Free',
      hut_overnight: '¥8,000-12,000 (with meals)',
      kawaguchiko_ropeway: '¥900'
    },
    
    bestTime: {
      climbing: 'July-August ONLY',
      viewing: 'Nov-Feb (clearer, snow on top)',
      avoid: 'June-July (rainy season, cloudy)',
      cherry_blossom: 'April (Chureito pagoda with flowers)'
    },
    
    nearby: [
      'Fuji Five Lakes',
      'Hakone (onsen and views)',
      'Chureito Pagoda',
      'Aokigahara Forest',
      'Gotemba Premium Outlets'
    ],
    
    tips: [
      'Climbing ONLY July-August (rest closed/dangerous)',
      'Yoshida Route (most popular)',
      'Sleep in mountain hut (see sunrise)',
      'Bring warm clothes (summit = 5°C summer)',
      'Limited oxygen at summit',
      'Stick for stamps (souvenir)',
      'DO NOT climb at night without experience',
      'Just to see: Kawaguchiko perfect'
    ],
    
    accessibility: '5th station accessible. Climb NOT accessible',
    duration: '6-10 hours up + 3-5 down (or 2 days with overnight)',
    
    lastUpdated: '2025-11-20'
  },
  
  {
    id: 'petra',
    name: 'Petra',
    city: 'Wadi Musa',
    country: 'Jordan',
    continent: 'Asia',
    flag: '🇯🇴',
    coordinates: { lat: 30.3285, lon: 35.4444 },
    category: 'Archaeology',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Petra',
      en: 'https://en.wikipedia.org/wiki/Petra'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=YU_0FYbP47s',
      en: 'https://www.youtube.com/watch?v=UMiPZx6WRA0'
    },
    
    description: 'Nabatean city carved in pink rock ~300 BC. "Rose City" accessible through the Siq. One of 7 Wonders of Modern World.',
    
    mustKnow: [
      'Founded by the Nabateans around 300 BC as their capital and trading center on the spice routes',
      'The entire city is carved directly into the walls of pink and red sandstone rock',
      'Remained lost to the Western world until rediscovered by Swiss explorer Johann Ludwig Burckhardt in 1812',
      'Declared a UNESCO World Heritage Site in 1985, recognizing its extraordinary archaeological value',
      'Chosen as one of the 7 Wonders of the Modern World in 2007, being the pride of Jordan',
      'The archaeological site contains more than 800 carved monuments, tombs, temples and structures'
    ],
    
    whatToDo: [
      'Walk through the dramatic Siq, an impressive 1.2-kilometer-long canyon that serves as the entrance to the city',
      'Marvel at The Treasury (Al-Khazneh), Petra\'s most iconic facade that appears suddenly at the end of the Siq',
      'Explore the Street of Facades with its numerous monumental tombs carved into the rock',
      'Visit the imposing Roman Theater excavated into the mountainside with capacity for 3,000 spectators',
      'Climb the 800 steps to the Monastery (Ad-Deir), Petra\'s largest structure with spectacular views',
      'Experience Petra by Night, where the path to the Treasury is illuminated with thousands of candles (3 times per week)'
    ],
    
    howToGetThere: {
      amman: 'JETT bus (3h, JD 10) or private taxi',
      aqaba: '2 hours (130 km)',
      airport: 'Queen Alia Airport (Amman) closest',
      town: 'Hotels in Wadi Musa (walking to entrance)'
    },
    
    tickets: {
      one_day: 'JD 50 (~$70) foreigners',
      two_day: 'JD 55',
      three_day: 'JD 60',
      jordan_pass: 'JD 70-80 (includes visa + Petra 2-3 days)',
      petra_night: 'JD 17 additional'
    },
    
    bestTime: {
      season: 'March-May or Sept-Nov',
      timeOfDay: 'Dawn (8 AM entrance, light on Treasury)',
      avoid: 'Summer (40°C+ and no shade)'
    },
    
    nearby: [
      'Little Petra',
      'Wadi Rum (desert, 1.5h)',
      'Dead Sea (3h)',
      'Aqaba (beach, Red Sea)',
      'Jerash (Roman ruins)'
    ],
    
    tips: [
      'Buy Jordan Pass (saves money)',
      'Arrive early (9 AM already hot)',
      'Bring LOTS of water',
      'Comfortable hiking shoes',
      'Monastery = UNMISSABLE (800 steps)',
      'Petra by Night nice but touristy',
      'Donkeys/camels available (negotiate price)',
      '2 days ideal to see everything unhurried'
    ],
    
    accessibility: 'Entrance to Treasury acceptable. Rest NOT accessible (stairs, uneven terrain)',
    duration: '1 day minimum (2 days ideal)',
    
    lastUpdated: '2025-11-20'
  },

  
  {
    id: 'kilimanjaro',
    name: 'Mount Kilimanjaro',
    city: 'Moshi',
    country: 'Tanzania',
    continent: 'Africa',
    flag: '🇹🇿',
    coordinates: { lat: -3.0674, lon: 37.3556 },
    category: 'Nature / Mountain',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Kilimanjaro',
      en: 'https://en.wikipedia.org/wiki/Mount_Kilimanjaro'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=FMi9qJMBmWc',
      en: 'https://www.youtube.com/watch?v=BZDs5rB-u34'
    },
    
    description: 'Africa\'s highest mountain (5,895m). Dormant volcano. Climbable without technical skills.',
    
    mustKnow: [
      'At 5,895 meters high (19,341 feet), it is the highest mountain on the African continent and its most emblematic peak',
      'It is the tallest freestanding (not part of a mountain range) mountain in the world, rising solitary above the savanna',
      'Composed of three dormant volcanic cones: Kibo (the highest), Mawenzi and Shira, each with its own geological history',
      'Its millennial glaciers at the summit are rapidly disappearing due to climate change, potentially extinct within decades',
      'Declared a UNESCO World Heritage Site, protecting this unique ecosystem ranging from tropical rainforest to alpine desert',
      'Requires no technical climbing skills, making it accessible to people in good physical condition without prior mountaineering experience'
    ],
    
    whatToDo: [
      'Embark on the adventure of climbing to Uhuru Peak, the highest point in Africa, to live an unforgettable experience',
      'Choose the Marangu Route of 5-6 days, known as the "Coca-Cola route" for being the most established with huts',
      'Opt for the Machame Route of 6-7 days, considered the most scenic with spectacular views and varied landscapes',
      'Consider the Lemosho Route of 7-8 days which offers the best acclimatization and highest summit success rates',
      'Complement your adventure with a safari in Arusha to see African wildlife after your climb',
      'Visit coffee plantations around Moshi to learn about the Tanzanian coffee process and relax post-climb'
    ],
    
    howToGetThere: {
      flight: 'Kilimanjaro Airport (JRO)',
      moshi: 'Base town, hotels and operators',
      arusha: '1.5h from Moshi (alternative)',
      tanzania_visa: '$50-100 on arrival'
    },
    
    tickets: {
      park_fees: '$800-900 (fees only, 6 days)',
      total_climb: '$1,500-3,000 (includes guide, porters, food)',
      mandatory: 'Guide mandatory (cannot go alone)',
      tip: '$200-300 tips expected (guides/porters)'
    },
    
    bestTime: {
      season: 'January-March or June-October (dry)',
      avoid: 'April-May (heavy rains)',
      summit_night: '-20°C at summit'
    },
    
    nearby: [
      'Arusha National Park',
      'Ngorongoro Crater',
      'Serengeti',
      'Lake Manyara',
      'Zanzibar (post-climb rest)'
    ],
    
    tips: [
      'Train 3-6 months before (cardio)',
      'Acclimatization = key to success (60-70% reach summit)',
      'Longer routes = better acclimatization',
      'Machame prettier than Marangu',
      'Bring thermal clothing (-20°C at summit)',
      'Altitude sickness is REAL (pole pole = slowly)',
      'Diamox helps (consult doctor)',
      'Guide tips culturally mandatory'
    ],
    
    accessibility: 'NOT accessible. Requires good physical condition',
    duration: '5-8 days depending on route',
    
    lastUpdated: '2025-11-20'
  },

  
  {
    id: 'cataratas-victoria',
    name: 'Victoria Falls',
    city: 'Livingstone / Victoria Falls',
    country: 'Zambia / Zimbabwe',
    continent: 'Africa',
    flag: '🇿🇲🇿🇼',
    coordinates: { lat: -17.9244, lon: 25.8567 },
    category: 'Nature',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Cataratas_Victoria',
      en: 'https://en.wikipedia.org/wiki/Victoria_Falls'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=1rZhVH7Jogc',
      en: 'https://www.youtube.com/watch?v=5ky6vgQfU24'
    },
    
    description: 'One of the world\'s largest waterfalls. 1,708m wide, 108m high. "The Smoke that Thunders" (local name).',
    
    mustKnow: [
      'Measuring 1,708 meters wide and 108 meters high, it is one of the largest and most spectacular water curtains on the planet',
      'Fed by the powerful Zambezi River plunging into the gorge creating a vapor cloud visible for kilometers',
      'Declared a UNESCO World Heritage Site, recognizing its extraordinary natural beauty',
      '"Discovered" for the Western world by explorer David Livingstone in 1855, who named them after Queen Victoria',
      'Greatest water flow occurs between March and May, when up to 500 million liters fall per minute',
      'During November-December flow is lower, but paradoxically the best time to fully appreciate the geological formation',
      'Its local name in Lozi language is "Mosi-oa-Tunya", meaning "The Smoke that Thunders", perfectly describing the phenomenon'
    ],
    
    whatToDo: [
      'Walk the panoramic trails from the Zambia or Zimbabwe side, each offering unique and impressive perspectives',
      'Dare to swim in Devil\'s Pool, a natural pool at the very edge of the waterfall (only Sept-Dec when water is low)',
      'Experience the adrenaline of bungee jumping from the Victoria Falls Bridge, leaping 111 meters into the gorge',
      'Face the exciting class V rapids of the Zambezi River in an extreme rafting adventure',
      'Fly over the falls by helicopter to appreciate their full magnitude from the air ($160 for 15 minutes)',
      'Enjoy a romantic sunset cruise on the Zambezi River watching hippos and crocodiles'
    ],
    
    howToGetThere: {
      flights: 'Livingstone Airport (Zambia) or Victoria Falls (Zimbabwe)',
      border: 'Bridge between countries (easy crossing)',
      from_town: 'Livingstone or Victoria Falls town'
    },
    
    tickets: {
      zambia: '$20 USD',
      zimbabwe: '$30 USD',
      both: '$50 (KAZA visa - both sides)',
      devils_pool: '$130-150',
      helicopter: '$160 (15 min)',
      bungee: '$160'
    },
    
    bestTime: {
      season: 'Feb-May (maximum water, lots of spray)',
      viewing: 'Aug-Oct (less water but better views)',
      avoid: 'Nov-Dec (very low water)',
      devils_pool: 'Sept-Dec only (when water low enough)'
    },
    
    nearby: [
      'Three Borders Landmark (Zambia-Zimbabwe-Botswana)',
      'Chobe National Park (elephants)',
      'Zambezi River cruises',
      'Victoria Falls town (nightlife)',
      'Livingstone Museum'
    ],
    
    tips: [
      'Visit BOTH sides (completely different experience)',
      'Zimbabwe side = panoramic views (photos)',
      'Zambia side = closer to falls (very wet)',
      'Bring raincoat (you WILL get soaked)',
      'Waterproof bag for camera/phone',
      'Devil\'s Pool only for strong swimmers',
      'Book helicopter early (sells out)',
      '2-3 days to do everything relaxed'
    ],
    
    accessibility: 'Walkways accessible. Devil\'s Pool NOT accessible',
    duration: '2-3 days (to see both sides)',
    
    lastUpdated: '2025-11-20'
  },

  
  {
    id: 'table-mountain',
    name: 'Table Mountain',
    city: 'Cape Town',
    country: 'South Africa',
    continent: 'Africa',
    flag: '🇿🇦',
    coordinates: { lat: -33.9628, lon: 18.4098 },
    category: 'Nature / Mountain',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Monta%C3%B1a_de_la_Mesa',
      en: 'https://en.wikipedia.org/wiki/Table_Mountain'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=X0RjW8TqJ-8',
      en: 'https://www.youtube.com/watch?v=SjBnQXJML3U'
    },
    
    description: 'Iconic flat-topped mountain dominating Cape Town. 1,085m height. Part of 7 Natural Wonders of the World.',
    
    mustKnow: [
      'Its distinctive flat summit rises 1,085 meters above sea level, being Cape Town\'s most recognizable landmark',
      'Officially one of the New 7 Wonders of Nature, voted worldwide in 2011',
      'The famous "tablecloth" of clouds that cover the summit is caused by southeast winds pushing moist air up the mountain',
      'Houses over 1,470 floral species, more than the entire United Kingdom',
      'The rotating cable car offers 360-degree views during the 5-minute ascent',
      'Declared a UNESCO World Heritage Site as part of the Cape Floral Kingdom'
    ],
    
    whatToDo: [
      'Take the iconic rotating cable car to the summit for breathtaking 360-degree views of Cape Town and the Atlantic',
      'Hike the Platteklip Gorge route (2-3 hours up) for a challenging but rewarding climbing experience',
      'Walk the various trails at the summit exploring the diverse fynbos vegetation',
      'Watch the sunset from the top, when the city lights start twinkling below',
      'Spot the rock hyraxes (dassies), small furry mammals that live on the mountain',
      'Visit Lion\'s Head nearby for an alternative panoramic viewpoint'
    ],
    
    howToGetThere: {
      uber: 'Recommended from city center (15 min)',
      bus: 'MyCiti bus routes',
      car: 'Parking available at Lower Cable Station',
      walking: 'From city center ~45 min'
    },
    
    tickets: {
      cable_car: 'R395 (~$21) return',
      online_discount: 'Book online for discount',
      hike: 'Free (cable car down R200)',
      annual_pass: 'R975 (unlimited rides)'
    },
    
    bestTime: {
      season: 'Oct-April (summer, clearer)',
      timeOfDay: 'Early morning or late afternoon',
      avoid: 'Winter (June-Aug) - often cloudy',
      weather: 'Check wind - cable car closes if too windy'
    },
    
    nearby: [
      'V&A Waterfront',
      'Cape Point',
      'Lion\'s Head',
      'Camps Bay beach',
      'Kirstenbosch Botanical Gardens'
    ],
    
    tips: [
      'Check weather forecast (often cloudy/windy)',
      'Book cable car online in advance',
      'Cable car closes if wind >60 km/h',
      'Bring jacket (10°C cooler at top)',
      'Sunset slots sell out fast',
      'If hiking: start early, bring LOTS of water',
      'Free WiFi at summit',
      'Restaurant at top (expensive but convenient)'
    ],
    
    accessibility: 'Cable car fully accessible. Hiking NOT accessible',
    duration: '2-4 hours (including cable car wait)',
    
    lastUpdated: '2025-11-20'
  },
  
  {
    id: 'serengeti',
    name: 'Serengeti National Park',
    city: 'Arusha',
    country: 'Tanzania',
    continent: 'Africa',
    flag: '🇹🇿',
    coordinates: { lat: -2.3333, lon: 34.8333 },
    category: 'Nature / Safari',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Parque_nacional_del_Serengueti',
      en: 'https://en.wikipedia.org/wiki/Serengeti_National_Park'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=VnSLRzu5gPc',
      en: 'https://www.youtube.com/watch?v=dQ0FFh9fLBQ'
    },
    
    description: '30,000 km² ecosystem famous for Great Migration (2 million animals). Quintessential African safari experience.',
    
    mustKnow: [
      'Covering 30,000 square kilometers, it is one of Africa\'s largest and most famous ecosystems',
      'Home to the Great Migration, where over 2 million wildebeest, zebras and gazelles move in a circular pattern',
      'Houses approximately 3,000 lions, the largest concentration of big cats in Africa',
      'Declared a UNESCO World Heritage Site in 1981, protecting this unique wilderness',
      'The name "Serengeti" comes from the Maasai word "Siringet" meaning "endless plains"',
      'Migration timing varies: June-July northern Serengeti, Dec-March southern plains'
    ],
    
    whatToDo: [
      'Experience early morning and late afternoon game drives when animals are most active',
      'Take an unforgettable hot air balloon safari at sunrise floating over the plains ($550-600)',
      'Witness dramatic river crossings during the Great Migration (July-August)',
      'Visit the Ngorongoro Crater adjacent to the park, often called "Africa\'s Eden"',
      'Stay in a tented camp inside the park for the authentic safari experience',
      'Spot the Big Five: lion, leopard, elephant, buffalo and rhino (rhinos are rare)'
    ],
    
    howToGetThere: {
      flight: 'Fly to Seronera airstrip (central Serengeti)',
      arusha: '7-8 hours drive from Arusha',
      mwanza: '4-5 hours from Mwanza',
      organized: 'Safari tours handle all logistics'
    },
    
    tickets: {
      park_fee: '$70 per person per day',
      vehicle: '$40 per vehicle per day',
      guide: '$20-30 per day',
      total_safari: '$150-250/day (budget) to $1,000+/day (luxury)',
      camping: '$50-80/night (public campsites)'
    },
    
    bestTime: {
      migration: 'June-July (northern Serengeti) or Dec-March (southern plains)',
      dry_season: 'June-Oct (easier to spot animals)',
      calving: 'Jan-Feb (thousands of births, dramatic predator action)',
      avoid: 'April-May (heavy rains, muddy roads)'
    },
    
    nearby: [
      'Ngorongoro Crater',
      'Lake Manyara',
      'Olduvai Gorge',
      'Zanzibar (post-safari beach)',
      'Maasai villages'
    ],
    
    tips: [
      'Book 6-12 months in advance (especially for migration season)',
      'Bring binoculars and telephoto lens',
      'Pack neutral-colored clothing (no bright colors)',
      'Malaria prophylaxis recommended',
      'Dusty - bring face mask/bandana',
      'Early morning drives = best animal viewing',
      '4x4 vehicle essential (not regular car)',
      'Minimum 3 days to experience properly'
    ],
    
    accessibility: '4x4 vehicles required. NOT wheelchair accessible',
    duration: '3-7 days (3 minimum recommended)',
    
    lastUpdated: '2025-11-20'
  },

  
  {
    id: 'opera-sydney',
    name: 'Sydney Opera House',
    city: 'Sydney',
    country: 'Australia',
    continent: 'Oceania',
    flag: '🇦🇺',
    coordinates: { lat: -33.8568, lon: 151.2153 },
    category: 'Architecture',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/%C3%93pera_de_S%C3%ADdney',
      en: 'https://en.wikipedia.org/wiki/Sydney_Opera_House'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=qiXdz9NHVxk',
      en: 'https://www.youtube.com/watch?v=AhTM0Ak-iGs'
    },
    
    description: '1973 architectural masterpiece with iconic sail-shaped roof. World\'s most famous performing arts center.',
    
    mustKnow: [
      'Officially opened on October 20, 1973 by Queen Elizabeth II after 14 years of construction',
      'Designed by Danish architect Jørn Utzon, who won an international design competition in 1957',
      'The distinctive "sails" are covered with over 1 million Swedish-made white and cream tiles',
      'Inscribed as a UNESCO World Heritage Site in 2007, one of the youngest buildings with this honor',
      'Contains multiple venues: Concert Hall (2,679 seats), Joan Sutherland Theatre (1,507 seats), and several smaller theaters',
      'Hosts over 1,500 performances annually, attended by more than 1.2 million people'
    ],
    
    whatToDo: [
      'Take a guided tour to explore the interior architecture and learn about its fascinating construction history',
      'Attend a world-class performance - opera, ballet, symphony, or contemporary shows',
      'Dine at Bennelong restaurant inside the Opera House for a memorable culinary experience',
      'Walk around the exterior forecourt for different angles and photo opportunities',
      'Visit during Vivid Sydney festival (May-June) when the building is transformed by light projections',
      'Enjoy drinks at Opera Bar with stunning harbor views of the Bridge and city skyline'
    ],
    
    howToGetThere: {
      ferry: 'Circular Quay (most scenic arrival)',
      train: 'Circular Quay station (5 min walk)',
      bus: 'Multiple routes to Circular Quay',
      walking: 'From CBD 15-20 min'
    },
    
    tickets: {
      tour: 'A$43 (1 hour guided tour)',
      backstage_tour: 'A$175 (2.5 hours)',
      performances: 'A$50-$400+ depending on show',
      kids_tour: 'A$23 (under 16)'
    },
    
    bestTime: {
      season: 'Year-round (mild climate)',
      vivid: 'May-June (Vivid Sydney light festival)',
      weather: 'Sydney enjoys 300+ sunny days/year',
      shows: 'Book 2-3 months ahead for popular performances'
    },
    
    nearby: [
      'Sydney Harbour Bridge',
      'The Rocks historic district',
      'Royal Botanic Gardens',
      'Circular Quay',
      'Museum of Contemporary Art'
    ],
    
    tips: [
      'Book tours and shows online in advance',
      'Sunset photos from Mrs Macquarie\'s Chair (best angle)',
      'Free to walk around exterior and forecourt',
      'Opera Bar perfect for pre-show drinks',
      'Dress code: smart casual for performances',
      'Arrive 30 min early for shows',
      'Photography allowed outside, restricted inside',
      'Combine with Harbour Bridge climb for full experience'
    ],
    
    accessibility: 'Fully wheelchair accessible with lifts',
    duration: '1 hour (tour) or 2-4 hours (with show)',
    
    lastUpdated: '2025-11-20'
  },

  
  {
    id: 'gran-barrera-coral',
    name: 'Great Barrier Reef',
    city: 'Cairns / Port Douglas',
    country: 'Australia',
    continent: 'Oceania',
    flag: '🇦🇺',
    coordinates: { lat: -18.2871, lon: 147.6992 },
    category: 'Marine / Nature',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Gran_Barrera_de_Coral',
      en: 'https://en.wikipedia.org/wiki/Great_Barrier_Reef'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=S1WWnZbTQko',
      en: 'https://www.youtube.com/watch?v=SzcD48ew7B0'
    },
    
    description: 'World\'s largest reef system. 2,300 km long, visible from space. UNESCO Heritage in danger from climate change.',
    
    mustKnow: [
      'Stretching over 2,300 kilometers along Queensland\'s coast, it is the largest living structure on Earth',
      'Comprises over 2,900 individual reefs and 900 islands formed over millions of years',
      'It is the only living thing visible from space, though this is actually disputed',
      'Home to 1,500 fish species, 400 coral types, 4,000 mollusk species, and 240 bird species',
      'Declared a UNESCO World Heritage Site in 1981, but now listed as "in danger" due to coral bleaching',
      'Climate change has caused massive coral bleaching events in 2016, 2017, 2020, and 2022'
    ],
    
    whatToDo: [
      'Snorkel among vibrant coral gardens teeming with tropical fish in crystal-clear waters',
      'Scuba dive to explore deeper reefs, walls, and swim with sea turtles, rays and reef sharks',
      'Take a helicopter or seaplane flight for breathtaking aerial views of the reef',
      'Visit the Outer Reef for pristine coral and better visibility (2 hours by boat)',
      'Try a glass-bottom boat or semi-submersible if you don\'t want to get wet',
      'Explore the Low Isles, sand cays surrounded by shallow reefs perfect for beginners'
    ],
    
    howToGetThere: {
      base: 'Cairns or Port Douglas (main gateways)',
      boats: 'Day trips from Cairns marina',
      whitsundays: 'Alternative access from Airlie Beach',
      liveaboard: 'Multi-day boat trips'
    },
    
    tickets: {
      day_trip: 'A$180-250 (full day, includes lunch)',
      diving: 'A$80-120 per dive (extra)',
      helicopter: 'A$250+ (scenic flight)',
      liveaboard: 'A$600-1,500 (2-3 days)',
      reef_tax: 'A$7 Environmental Management Charge (included)'
    },
    
    bestTime: {
      season: 'June-October (dry season, calm seas)',
      visibility: 'Sept-Nov (best underwater visibility)',
      avoid: 'Jan-March (stinger jellyfish season, need stinger suit)',
      weather: 'Tropical - warm year-round but humid summer'
    },
    
    nearby: [
      'Cairns city and beaches',
      'Daintree Rainforest',
      'Whitsunday Islands',
      'Port Douglas',
      'Green Island'
    ],
    
    tips: [
      'Book Outer Reef tours (better coral, less crowded)',
      'Inner reef more degraded from tourism',
      'Stinger suits mandatory Nov-May (jellyfish)',
      'Bring reef-safe sunscreen (protect coral)',
      'Seasickness common (take medication)',
      'Underwater camera rental available',
      'Get PADI certified before trip (saves time)',
      '2-3 days ideal (try different sites)'
    ],
    
    accessibility: 'Boats accessible. Underwater NOT accessible without assistance',
    duration: '1-3 days (full day minimum)',
    
    lastUpdated: '2025-11-20'
  },

  
  {
    id: 'milford-sound',
    name: 'Milford Sound',
    city: 'Fiordland National Park',
    country: 'New Zealand',
    continent: 'Oceania',
    flag: '🇳🇿',
    coordinates: { lat: -44.6719, lon: 168.6760 },
    category: 'Nature / Fjord',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Milford_Sound',
      en: 'https://en.wikipedia.org/wiki/Milford_Sound_/_Piopiotahi'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=nJqxKJHR_Ss',
      en: 'https://www.youtube.com/watch?v=P8fKrDhR9lE'
    },
    
    description: 'Glacier-carved fjord with 1,200m cliffs, waterfalls and marine life. Rudyard Kipling called it "8th wonder of the world".',
    
    mustKnow: [
      'Carved by glaciers over 100,000 years, this dramatic 15-kilometer fjord extends inland from the Tasman Sea',
      'Mitre Peak rises 1,692 meters straight from the water, creating one of the world\'s most photographed scenes',
      'Receives an average of 200 days of rain per year (7 meters annually), making it one of the wettest places on Earth',
      'The frequent rain creates hundreds of temporary waterfalls cascading down the vertical cliffs',
      'Home to resident dolphins, fur seals, penguins and occasionally whales',
      'Part of Te Wahipounamu UNESCO World Heritage Site protecting Fiordland\'s pristine wilderness'
    ],
    
    whatToDo: [
      'Take a scenic cruise (1.5-2 hours) to fully appreciate the fjord\'s dramatic scale and waterfalls',
      'Kayak through the sound for an intimate, quiet experience surrounded by towering cliffs',
      'Hike the famous Milford Track, considered one of the finest walks in the world (4-5 days)',
      'Take a scenic flight from Queenstown combining aerial views with boat cruise',
      'Dive or snorkel in the unique underwater observatory to see rare black coral',
      'Visit in the rain - the fjord is most spectacular with thousands of waterfalls'
    ],
    
    howToGetThere: {
      from_queenstown: '4 hours drive through spectacular scenery',
      from_te_anau: '2 hours drive (120 km)',
      coach: 'Day trip coaches from Queenstown',
      scenic_flight: 'Fly from Queenstown (combine with cruise)',
      warning: 'Road can close in winter due to avalanche risk'
    },
    
    tickets: {
      cruise: 'NZ$95-125 (1.5-2 hours)',
      coach_cruise: 'NZ$230-280 (from Queenstown)',
      kayak: 'NZ$189+ (guided tour)',
      scenic_flight: 'NZ$450+ (fly-cruise-fly)',
      park_entry: 'Free'
    },
    
    bestTime: {
      season: 'Oct-April (summer, roads open)',
      rain: 'Rain makes it MORE spectacular (more waterfalls)',
      avoid: 'June-Aug (road closures, cold)',
      wildlife: 'Nov-Feb (seal pups, penguin chicks)'
    },
    
    nearby: [
      'Te Anau (gateway town)',
      'Doubtful Sound (less touristy)',
      'Queenstown (adventure capital)',
      'Milford Track',
      'Homer Tunnel'
    ],
    
    tips: [
      'Book 2-3 months ahead (summer)',
      'EXPECT rain - bring waterproof jacket',
      'Rain = better experience (more waterfalls)',
      'Sandflies VICIOUS (bring strong repellent)',
      'Drive yourself for flexibility',
      'Overnight cruise more peaceful (no day crowds)',
      'Check road conditions (avalanche risk winter)',
      'Early morning cruise = fewer people'
    ],
    
    accessibility: 'Cruise boats wheelchair accessible',
    duration: 'Full day from Queenstown (or overnight)',
    
    lastUpdated: '2025-11-20'
  },
  
  {
    id: 'uluru',
    name: 'Uluru (Ayers Rock)',
    city: 'Northern Territory',
    country: 'Australia',
    continent: 'Oceania',
    flag: '🇦🇺',
    coordinates: { lat: -25.3444, lon: 131.0369 },
    category: 'Sacred / Nature',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Uluru',
      en: 'https://en.wikipedia.org/wiki/Uluru'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=fNRa8GXxpzE',
      en: 'https://www.youtube.com/watch?v=00aVNMYLYzI'
    },
    
    description: 'Sacred 348m sandstone monolith. Anangu Aboriginal spiritual site. Changes color dramatically with daylight.',
    
    mustKnow: [
      'Rising 348 meters above the desert, with most of its bulk hidden underground, Uluru is one of Earth\'s largest monoliths',
      'The rock is approximately 600 million years old, formed from ancient seabed sediment',
      'Sacred to the Anangu Aboriginal people for over 30,000 years, with deep spiritual and cultural significance',
      'Climbing was permanently closed in October 2019 out of respect for indigenous custodians',
      'The rock dramatically changes color throughout the day - from terracotta at sunrise to burning red at sunset',
      'Inscribed as a UNESCO World Heritage Site both for its natural features and cultural importance'
    ],
    
    whatToDo: [
      'Walk the 10.6 km Base Walk circumnavigating Uluru, taking 3-4 hours at a comfortable pace',
      'Witness the spectacular sunrise or sunset when the rock glows in vibrant reds and oranges',
      'Take a guided Mala Walk to learn about Aboriginal culture, stories and rock art',
      'Visit nearby Kata Tjuta (The Olgas), equally impressive rock domes 50km away',
      'Experience the Field of Light art installation with 50,000 illuminated spheres surrounding Uluru',
      'Join a guided dot painting workshop to learn traditional Aboriginal art techniques'
    ],
    
    howToGetThere: {
      flight: 'Connellan Airport (Ayers Rock Airport)',
      alice_springs: '450 km (5-6 hours drive)',
      resort: 'Stay at Yulara resort village (20 km from rock)'
    },
    
    tickets: {
      park_pass: 'A$38 (3 days)',
      guided_tour: 'A$120-200',
      field_of_light: 'A$42-52',
      camel_tour: 'A$80-150',
      helicopter: 'A$300+ (scenic flight)'
    },
    
    bestTime: {
      season: 'April-Sept (mild weather)',
      sunrise_sunset: 'Best viewing times',
      avoid: 'Dec-Feb (extreme heat 40-45°C)',
      winter: 'June-Aug (cool, can be near 0°C at night)'
    },
    
    nearby: [
      'Kata Tjuta / The Olgas (35 km)',
      'Kings Canyon (300 km)',
      'Alice Springs (450 km)',
      'Yulara resort village'
    ],
    
    tips: [
      'Do NOT climb (closed since 2019, disrespectful)',
      'Bring LOTS of water (extremely dry)',
      'Sunrise AND sunset are both essential',
      'Flies relentless - bring fly net',
      'Book accommodation months ahead',
      'Base Walk best done early morning',
      'Respect sacred sites (photography restrictions)',
      'Minimum 2 days to see Uluru + Kata Tjuta properly'
    ],
    
    accessibility: 'Parts of Base Walk accessible. Uneven terrain overall',
    duration: '2-3 days recommended',
    
    lastUpdated: '2025-11-20'
  },
  
  {
    id: 'hobbiton',
    name: 'Hobbiton Movie Set',
    city: 'Matamata',
    country: 'New Zealand',
    continent: 'Oceania',
    flag: '🇳🇿',
    coordinates: { lat: -37.8722, lon: 175.6833 },
    category: 'Cinema / Experience',
    
    wikiLinks: {
      es: 'https://es.wikipedia.org/wiki/Hobbiton',
      en: 'https://en.wikipedia.org/wiki/Hobbiton_Movie_Set'
    },
    
    youtubeLinks: {
      es: 'https://www.youtube.com/watch?v=eOlFRLjG29Q',
      en: 'https://www.youtube.com/watch?v=fHhpRmPhq3g'
    },
    
    description: 'Permanent film set from Lord of the Rings and The Hobbit. 44 hobbit holes in preserved Shire village.',
    
    mustKnow: [
      'Originally built in 1999 for "The Lord of the Rings" trilogy as a temporary set',
      'Completely rebuilt in 2010 as a permanent attraction for "The Hobbit" films with weatherproof materials',
      'Contains 44 unique hobbit holes of different sizes (to create perspective illusion)',
      'Set on the Alexander family sheep farm which continues to operate around the set',
      'The Party Tree was specially imported from nearby and dressed with artificial leaves',
      'Receives over 500,000 visitors annually, making it New Zealand\'s most popular film set attraction'
    ],
    
    whatToDo: [
      'Take the mandatory 2-hour guided tour through the 12-acre Shire movie set',
      'Visit Bag End, Bilbo and Frodo\'s iconic home at the top of the hill',
      'Explore the meticulously maintained gardens with vegetables and flowers',
      'Enjoy a complimentary drink at the Green Dragon Inn, the functioning hobbit pub',
      'Photograph the iconic Mill and double-arched bridge over the stream',
      'Browse authentic props and learn behind-the-scenes stories from knowledgeable guides'
    ],
    
    howToGetThere: {
      auckland: '2 hours drive south (175 km)',
      rotorua: '1 hour drive',
      shuttle: 'From Matamata i-Site to set',
      tours: 'Organized tours from Auckland/Rotorua include transport'
    },
    
    tickets: {
      adult: 'NZ$89 (2-hour guided tour)',
      child: 'NZ$44 (under 16)',
      evening_tour: 'NZ$195 (includes banquet feast)',
      private_tour: 'NZ$795+ (exclusive access)'
    },
    
    bestTime: {
      season: 'Oct-April (warmer, greener)',
      timeOfDay: 'Morning tours less crowded',
      avoid: 'School holidays (very busy)',
      weather: 'Can be muddy after rain'
    },
    
    nearby: [
      'Waitomo Glowworm Caves (1 hour)',
      'Rotorua (geothermal wonders)',
      'Matamata town',
      'Hamilton city'
    ],
    
    tips: [
      'Book 2-3 months ahead (sells out)',
      'Tours MANDATORY (cannot visit independently)',
      'Wear comfortable walking shoes',
      'Photography allowed (bring camera)',
      'Evening banquet tour magical but expensive',
      'Souvenir shop at end of tour',
      'No inside access to hobbit holes',
      'Allow 3 hours total (including waiting)'
    ],
    
    accessibility: 'Wheelchairs and mobility scooters available (book ahead)',
    duration: '2 hours (guided tour)',
    
    lastUpdated: '2025-11-20'
  }
];

