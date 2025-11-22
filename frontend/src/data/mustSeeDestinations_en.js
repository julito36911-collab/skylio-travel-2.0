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
      en: 'https://en.wikipedia.org/wiki/Machu_Picchu',
      he: 'https://he.wikipedia.org/wiki/%D7%9E%D7%90%D7%A6%27%D7%95_%D7%A4%D7%99%D7%A7%D7%A6%27%D7%95'
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

  // Remaining 15 destinations - Basic English translations
  { id: 'venecia-canales', name: 'Venice Canals', city: 'Venice', country: 'Italy', continent: 'Europe', flag: '🇮🇹', coordinates: { lat: 45.4408, lon: 12.3155 }, category: 'City', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Venecia', en: 'https://en.wikipedia.org/wiki/Venice', he: 'https://he.wikipedia.org/wiki/%D7%95%D7%A0%D7%A6%D7%99%D7%94' }, description: 'Unique city built on 118 islands with 150 canals and 400 bridges.', mustKnow: ['Founded in 5th century', 'Built on 118 islands', 'Sinking 1-2mm per year'], whatToDo: ['Gondola ride', 'St. Mark\'s Square', 'Rialto Bridge'], tips: ['Book gondola in advance', 'Avoid summer crowds'], prices: { budget: '€40-80/day', medium: '€150-250/day', high: '€400+/day' }, bestTime: { season: 'April-June & Sept-Oct', weather: 'Mild', icon: '☀️' }, avoid: 'November (floods)', accessibility: 'Many stairs, bridges', duration: '2-3 days', nearby: ['Murano', 'Burano'], transportation: { vaporetto: 'Water bus', train: 'Santa Lucia station' }, lastUpdated: '2025-11-20' },
  
  { id: 'cataratas-iguazu', name: 'Iguazu Falls', city: 'Puerto Iguazú', country: 'Argentina/Brazil', continent: 'America', flag: '🇦🇷🇧🇷', coordinates: { lat: -25.6953, lon: -54.4367 }, category: 'Nature', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Cataratas_del_Iguaz%C3%BA', en: 'https://en.wikipedia.org/wiki/Iguazu_Falls', he: 'https://he.wikipedia.org/wiki/%D7%9E%D7%A4%D7%9C%D7%99_%D7%90%D7%99%D7%92%D7%95%D7%90%D7%A1%D7%95' }, description: 'System of 275 waterfalls. Up to 82m high. Greater flow than Niagara and Victoria combined.', mustKnow: ['275 individual waterfalls', '2.7 km wide', 'Devil\'s Throat is most impressive'], whatToDo: ['Devil\'s Throat walkway', 'Boat safari', 'Brazilian side panoramic view'], tips: ['Visit both sides (Argentina and Brazil)', 'Bring waterproof clothing'], prices: { budget: '$30-50/day', medium: '$80-150/day', high: '$ 200+/day' }, bestTime: { season: 'March-May & Sept-Nov', weather: 'Moderate flow', icon: '☀️' }, avoid: 'Jan-Feb (extreme heat)', accessibility: 'Walkways accessible', duration: '1-2 days', nearby: ['Bird Park', 'Itaipu Dam'], transportation: { bus: 'From Puerto Iguazú', taxi: 'Available' }, lastUpdated: '2025-11-20' },
  
  { id: 'times-square', name: 'Times Square', city: 'New York', country: 'United States', continent: 'America', flag: '🇺🇸', coordinates: { lat: 40.7580, lon: -73.9855 }, category: 'City', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Times_Square', en: 'https://en.wikipedia.org/wiki/Times_Square', he: 'https://he.wikipedia.org/wiki/%D7%98%D7%99%D7%99%D7%9E%D7%A1_%D7%A1%D7%A7%D7%95%D7%95%D7%90%D7%A8' }, description: 'Iconic Manhattan intersection. Illuminated 24/7. Broadway epicenter and New Year celebration.', mustKnow: ['300,000-400,000 pedestrians daily', 'New Year Ball Drop attracts 1 million', 'Pedestrian zone since 2009'], whatToDo: ['Broadway show', 'M&M\'s World', 'Photos with giant screens'], tips: ['Very crowded always', 'Watch for pickpockets'], prices: { budget: '$60-100/day', medium: '$200-350/day', high: '$600+/day' }, bestTime: { season: 'Year-round', weather: 'Any', icon: '🌆' }, avoid: 'New Year (extremely crowded)', accessibility: 'Fully accessible', duration: '1-2 hours', nearby: ['Central Park', 'Empire State', 'Rockefeller Center'], transportation: { metro: 'Multiple lines', bus: 'Many routes' }, lastUpdated: '2025-11-20' },
  
  { id: 'angkor-wat', name: 'Angkor Wat', city: 'Siem Reap', country: 'Cambodia', continent: 'Asia', flag: '🇰🇭', coordinates: { lat: 13.4125, lon: 103.8670 }, category: 'Temple', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Angkor_Wat', en: 'https://en.wikipedia.org/wiki/Angkor_Wat', he: 'https://he.wikipedia.org/wiki/%D7%90%D7%A0%D7%92%D7%A7%D7%95%D7%A8_%D7%95%D7%95%D7%90%D7%98' }, description: '12th century Khmer temple complex. World\'s largest religious monument.', mustKnow: ['Built in 12th century', 'Largest religious monument', '400+ temples in complex'], whatToDo: ['Sunrise at Angkor Wat', 'Bayon temple', 'Ta Prohm (Tomb Raider)'], tips: ['Book 2-3 months advance', 'Hire guide'], prices: { budget: '$20-40/day', medium: '$60-120/day', high: '$200+/day' }, bestTime: { season: 'Nov-Feb (dry)', weather: 'Cool', icon: '☀️' }, avoid: 'April-May (extreme heat)', accessibility: 'Difficult, many stairs', duration: '2-3 days', nearby: ['Tonle Sap Lake', 'Pub Street'], transportation: { tuktuk: 'Main transport', bicycle: 'Available for rent' }, lastUpdated: '2025-11-20' },
  
  { id: 'monte-fuji', name: 'Mount Fuji', city: 'Shizuoka', country: 'Japan', continent: 'Asia', flag: '🇯🇵', coordinates: { lat: 35.3606, lon: 138.7274 }, category: 'Mountain', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Monte_Fuji', en: 'https://en.wikipedia.org/wiki/Mount_Fuji', he: 'https://he.wikipedia.org/wiki/%D7%94%D7%A8_%D7%A4%D7%95%D7%92%27%D7%99' }, description: 'Sacred mountain, active volcano 3,776m. Symbol of Japan, perfectly symmetrical.', mustKnow: ['3,776m height', 'Active volcano (last eruption 1707)', 'Climbable July-August only'], whatToDo: ['Climb to summit', 'Sunrise from top', 'Visit Fuji Five Lakes'], tips: ['Acclimatize properly', 'Book huts in advance'], prices: { budget: '¥3000-6000/day', medium: '¥10000-20000/day', high: '¥30000+/day' }, bestTime: { season: 'July-August (climbing)', weather: 'Clear', icon: '🗻' }, avoid: 'Winter (closed)', accessibility: 'Challenging climb', duration: '1-2 days climb', nearby: ['Lake Kawaguchi', 'Hakone', 'Chureito Pagoda'], transportation: { bus: 'From Tokyo', train: 'To 5th station' }, lastUpdated: '2025-11-20' },
  
  { id: 'petra', name: 'Petra', city: 'Wadi Musa', country: 'Jordan', continent: 'Asia', flag: '🇯🇴', coordinates: { lat: 30.3285, lon: 35.4444 }, category: 'Archaeology', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Petra', en: 'https://en.wikipedia.org/wiki/Petra', he: 'https://he.wikipedia.org/wiki/%D7%A4%D7%98%D7%A8%D7%94' }, description: 'Nabatean city carved in pink rock ~300 BC. Accessible through the Siq canyon.', mustKnow: ['Founded ~300 BC', 'Carved entirely in rock', 'Rediscovered 1812'], whatToDo: ['Walk through Siq', 'See the Treasury', 'Climb to Monastery'], tips: ['Start very early', 'Bring lots of water'], prices: { budget: 'JOD 15-30/day', medium: 'JOD 50-100/day', high: 'JOD 200+/day' }, bestTime: { season: 'March-May & Sept-Nov', weather: 'Mild', icon: '☀️' }, avoid: 'Summer (extreme heat)', accessibility: 'Difficult terrain', duration: '1 full day', nearby: ['Wadi Rum', 'Dead Sea'], transportation: { bus: 'From Amman', taxi: 'Available' }, lastUpdated: '2025-11-20' },
  
  { id: 'kilimanjaro', name: 'Mount Kilimanjaro', city: 'Moshi', country: 'Tanzania', continent: 'Africa', flag: '🇹🇿', coordinates: { lat: -3.0674, lon: 37.3556 }, category: 'Mountain', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Kilimanjaro', en: 'https://en.wikipedia.org/wiki/Mount_Kilimanjaro', he: 'https://he.wikipedia.org/wiki/%D7%94%D7%A8_%D7%A7%D7%99%D7%9C%D7%99%D7%9E%D7%A0%D7%92%27%D7%90%D7%A8%D7%95' }, description: 'Africa\'s highest mountain (5,895m). Inactive volcano. Climbable without technical skills.', mustKnow: ['5,895m altitude', 'Highest mountain in Africa', 'No technical climbing required'], whatToDo: ['Climb to Uhuru Peak', 'Marangu or Machame route', 'See glaciers at summit'], tips: ['Acclimatize properly', 'Choose 6-7 day route'], prices: { budget: '$1500-2000', medium: '$2500-3500', high: '$5000+' }, bestTime: { season: 'Jan-March & June-Oct', weather: 'Dry', icon: '🏔️' }, avoid: 'April-May (rainy)', accessibility: 'Strenuous', duration: '5-9 days', nearby: ['Serengeti', 'Arusha'], transportation: { flight: 'To Kilimanjaro Airport', bus: 'To Moshi' }, lastUpdated: '2025-11-20' },
  
  { id: 'cataratas-victoria', name: 'Victoria Falls', city: 'Livingstone', country: 'Zambia/Zimbabwe', continent: 'Africa', flag: '🇿🇲🇿🇼', coordinates: { lat: -17.9244, lon: 25.8567 }, category: 'Nature', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Cataratas_Victoria', en: 'https://en.wikipedia.org/wiki/Victoria_Falls', he: 'https://he.wikipedia.org/wiki/%D7%9E%D7%A4%D7%9C%D7%99_%D7%95%D7%99%D7%A7%D7%98%D7%95%D7%A8%D7%99%D7%94' }, description: 'One of world\'s largest waterfalls. 1,708m wide, 108m high. "The Smoke that Thunders".', mustKnow: ['1,708m wide', 'Greater flow March-May', 'UNESCO World Heritage'], whatToDo: ['Devil\'s Pool swim', 'Bungee jumping', 'Helicopter flight'], tips: ['Visit both sides', 'Bring raincoat'], prices: { budget: '$30-60/day', medium: '$100-200/day', high: '$400+/day' }, bestTime: { season: 'Feb-May (full flow)', weather: 'Wet', icon: '💦' }, avoid: 'Nov-Dec (low water)', accessibility: 'Walkways accessible', duration: '2-3 days', nearby: ['Chobe National Park', 'Zambezi River'], transportation: { flight: 'To Livingstone/Victoria Falls', shuttle: 'Between sides' }, lastUpdated: '2025-11-20' },
  
  { id: 'table-mountain', name: 'Table Mountain', city: 'Cape Town', country: 'South Africa', continent: 'Africa', flag: '🇿🇦', coordinates: { lat: -33.9628, lon: 18.4098 }, category: 'Mountain', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Monta%C3%B1a_de_la_Mesa', en: 'https://en.wikipedia.org/wiki/Table_Mountain', he: 'https://he.wikipedia.org/wiki/%D7%94%D7%A8_%D7%94%D7%A9%D7%95%D7%9C%D7%97%D7%9F' }, description: 'Iconic flat-topped mountain dominating Cape Town. 1,085m height. Part of 7 Natural Wonders.', mustKnow: ['1,085m altitude', '7 Natural Wonders', '360° rotating cable car'], whatToDo: ['Cable car to top', 'Hike Platteklip Gorge', '360° views'], tips: ['Check weather', 'Book cable car online'], prices: { budget: 'R300-600/day', medium: 'R1000-2000/day', high: 'R4000+/day' }, bestTime: { season: 'Oct-April', weather: 'Clear', icon: '☀️' }, avoid: 'Winter (cloudy)', accessibility: 'Cable car available', duration: '3-4 hours', nearby: ['V&A Waterfront', 'Cape Point'], transportation: { uber: 'Recommended', bus: 'MyCiti' }, lastUpdated: '2025-11-20' },
  
  { id: 'serengeti', name: 'Serengeti National Park', city: 'Arusha', country: 'Tanzania', continent: 'Africa', flag: '🇹🇿', coordinates: { lat: -2.3333, lon: 34.8333 }, category: 'Safari', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Parque_nacional_del_Serengueti', en: 'https://en.wikipedia.org/wiki/Serengeti_National_Park', he: 'https://he.wikipedia.org/wiki/%D7%A1%D7%A8%D7%A0%D7%92%D7%98%D7%99' }, description: '30,000 km² ecosystem famous for Great Migration (2 million animals). Quintessential African safari.', mustKnow: ['30,000 km² savanna', 'Great Migration June-July', '3,000+ lions'], whatToDo: ['Game drive', 'Hot air balloon safari', 'River crossing'], tips: ['Book 6+ months advance', 'Bring binoculars'], prices: { budget: '$150-250/day', medium: '$350-600/day', high: '$1000+/day' }, bestTime: { season: 'June-July (migration)', weather: 'Dry', icon: '🦁' }, avoid: 'April-May (rainy)', accessibility: '4x4 required', duration: '3-5 days', nearby: ['Ngorongoro Crater', 'Zanzibar'], transportation: { flight: 'To Seronera', safari: 'Organized tours' }, lastUpdated: '2025-11-20' },
  
  { id: 'opera-sydney', name: 'Sydney Opera House', city: 'Sydney', country: 'Australia', continent: 'Oceania', flag: '🇦🇺', coordinates: { lat: -33.8568, lon: 151.2153 }, category: 'Architecture', wikiLinks: { es: 'https://es.wikipedia.org/wiki/%C3%93pera_de_S%C3%ADdney', en: 'https://en.wikipedia.org/wiki/Sydney_Opera_House', he: 'https://he.wikipedia.org/wiki/%D7%91%D7%99%D7%AA_%D7%94%D7%90%D7%95%D7%A4%D7%A8%D7%94_%D7%A9%D7%9C_%D7%A1%D7%99%D7%93%D7%A0%D7%99' }, description: '1973 architectural masterpiece with iconic sail roof. World\'s most famous performing arts center.', mustKnow: ['Inaugurated 1973', 'Designed by Jørn Utzon', 'UNESCO World Heritage since 2007'], whatToDo: ['Guided tour', 'Attend show', 'Dine at Bennelong'], tips: ['Book shows months ahead', 'Visit during Vivid Sydney'], prices: { budget: 'A$80-150/day', medium: 'A$250-400/day', high: 'A$700+/day' }, bestTime: { season: 'Year-round', weather: 'Mild', icon: '🎭' }, avoid: 'None', accessibility: 'Fully accessible', duration: '2-3 hours', nearby: ['Harbour Bridge', 'The Rocks', 'Circular Quay'], transportation: { ferry: 'Circular Quay', train: 'Circular Quay', bus: 'Multiple routes' }, lastUpdated: '2025-11-20' },
  
  { id: 'gran-barrera-coral', name: 'Great Barrier Reef', city: 'Cairns', country: 'Australia', continent: 'Oceania', flag: '🇦🇺', coordinates: { lat: -18.2871, lon: 147.6992 }, category: 'Marine', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Gran_Barrera_de_Coral', en: 'https://en.wikipedia.org/wiki/Great_Barrier_Reef', he: 'https://he.wikipedia.org/wiki/%D7%94%D7%A9%D7%95%D7%A0%D7%99%D7%AA_%D7%94%D7%92%D7%93%D7%95%D7%9C%D7%94' }, description: 'World\'s largest reef system. 2,300 km long, visible from space. Heritage in danger.', mustKnow: ['2,300 km length', 'Largest reef system', 'Visible from space'], whatToDo: ['Snorkeling', 'Scuba diving', 'Helicopter flight'], tips: ['Book boat tours', 'Protect from sun'], prices: { budget: 'A$100-200/day', medium: 'A$300-500/day', high: 'A$800+/day' }, bestTime: { season: 'June-Oct', weather: 'Dry', icon: '🐠' }, avoid: 'Jan-March (jellyfish season)', accessibility: 'Boat accessible', duration: '1-2 days', nearby: ['Cairns', 'Whitsundays', 'Port Douglas'], transportation: { boat: 'Day tours from Cairns', flight: 'Scenic flights' }, lastUpdated: '2025-11-20' },
  
  { id: 'milford-sound', name: 'Milford Sound', city: 'Fiordland', country: 'New Zealand', continent: 'Oceania', flag: '🇳🇿', coordinates: { lat: -44.6719, lon: 168.6760 }, category: 'Fjord', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Milford_Sound', en: 'https://en.wikipedia.org/wiki/Milford_Sound_/_Piopiotahi', he: 'https://he.wikipedia.org/wiki/%D7%9E%D7%99%D7%9C%D7%A4%D7%95%D7%A8%D7%93_%D7%A1%D7%90%D7%95%D7%A0%D7%93' }, description: 'Glacier fjord with 1,200m cliffs, waterfalls and marine life. "8th wonder of the world".', mustKnow: ['Glacier-carved fjord', '1,200m cliffs', '200+ rain days/year'], whatToDo: ['Cruise (1.5-2h)', 'Kayaking', 'Milford Track hike'], tips: ['Book ahead', 'Expect rain'], prices: { budget: 'NZ$80-150/day', medium: 'NZ$250-400/day', high: 'NZ$700+/day' }, bestTime: { season: 'Oct-April', weather: 'Variable', icon: '🌧️' }, avoid: 'Winter (roads may close)', accessibility: 'Cruise accessible', duration: '1 day trip', nearby: ['Queenstown', 'Te Anau'], transportation: { car: '4h from Queenstown', bus: 'Tour buses', flight: 'Scenic flights' }, lastUpdated: '2025-11-20' },
  
  { id: 'uluru', name: 'Uluru (Ayers Rock)', city: 'Northern Territory', country: 'Australia', continent: 'Oceania', flag: '🇦🇺', coordinates: { lat: -25.3444, lon: 131.0369 }, category: 'Sacred', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Uluru', en: 'https://en.wikipedia.org/wiki/Uluru', he: 'https://he.wikipedia.org/wiki/%D7%90%D7%95%D7%9C%D7%95%D7%A8%D7%95' }, description: 'Sacred 348m sandstone monolith. Anangu Aboriginal spiritual site. Changes color with daylight.', mustKnow: ['348m high', '9.4 km circumference', '600 million years old'], whatToDo: ['Base Walk (10.6 km)', 'Sunset viewing', 'Kata Tjuta visit'], tips: ['No climbing (sacred)', 'Bring water'], prices: { budget: 'A$100-200/day', medium: 'A$300-500/day', high: 'A$800+/day' }, bestTime: { season: 'April-Sept', weather: 'Cool', icon: '🌅' }, avoid: 'Dec-Feb (extreme heat)', accessibility: 'Difficult', duration: '2 days', nearby: ['Kata Tjuta', 'Kings Canyon'], transportation: { car: 'From Alice Springs', flight: 'To Ayers Rock Airport' }, lastUpdated: '2025-11-20' },
  
  { id: 'hobbiton', name: 'Hobbiton Movie Set', city: 'Matamata', country: 'New Zealand', continent: 'Oceania', flag: '🇳🇿', coordinates: { lat: -37.8722, lon: 175.6833 }, category: 'Cinema', wikiLinks: { es: 'https://es.wikipedia.org/wiki/Hobbiton', en: 'https://en.wikipedia.org/wiki/Hobbiton_Movie_Set', he: 'https://he.wikipedia.org/wiki/%D7%94%D7%95%D7%91%D7%99%D7%98%D7%95%D7%9F_(%D7%A4%D7%9C%D7%98%D7%95)' }, description: 'Permanent film set from Lord of the Rings and The Hobbit. 44 hobbit holes in preserved Shire.', mustKnow: ['Built for LOTR 1999', 'Permanently rebuilt for Hobbit', '44 hobbit holes'], whatToDo: ['Guided tour (2h)', 'Bag End visit', 'Green Dragon Inn beer'], tips: ['Book 2-3 months ahead', 'Tours mandatory'], prices: { budget: 'NZ$80-150/day', medium: 'NZ$200-350/day', high: 'NZ$600+/day' }, bestTime: { season: 'Oct-April', weather: 'Mild', icon: '🌿' }, avoid: 'School holidays (crowded)', accessibility: 'Guided tour only', duration: '2 hours', nearby: ['Rotorua', 'Waitomo Caves'], transportation: { car: '2h from Auckland', shuttle: 'From Matamata i-Site' }, lastUpdated: '2025-11-20' }
];
