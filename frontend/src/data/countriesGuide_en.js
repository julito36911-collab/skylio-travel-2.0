// Travel guides for 35 most touristic countries organized by continent
// With practical information, cultural insights and useful data for travelers

export const countriesGuide = [
  // ===== EUROPE (15 countries) =====
  {
    id: 'francia',
    name: 'France',
    continent: 'Europe',
    flag: '🇫🇷',
    capital: 'Paris',
    population: '67.8 million',
    languages: ['French'],
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
    timezone: 'CET (UTC+1)',
    
    mainCities: ['Paris', 'Marseille', 'Lyon', 'Nice', 'Toulouse', 'Bordeaux', 'Strasbourg'],
    
    cities: [
      {
        id: 'paris',
        name: 'Paris',
        population: '2.2 million',
        
        airports: [
          {
            name: 'Charles de Gaulle (CDG)',
            distance: '25 km northeast',
            toCity: [
              {
                method: 'RER B (train)',
                duration: '30-40 min',
                price: '€11.45',
                frequency: 'Every 10-15 min',
                hours: '5:00 AM - 11:50 PM',
                stops: 'Gare du Nord, Châtelet-Les Halles, Saint-Michel',
                notes: 'CHEAPEST option. Buy ticket at machines.'
              },
              {
                method: 'Roissybus',
                duration: '60 min',
                price: '€16.60',
                frequency: 'Every 15-20 min',
                hours: '6:00 AM - 12:30 AM',
                stops: 'Direct to Opera',
                notes: 'Comfortable with luggage. Free Wi-Fi.'
              },
              {
                method: 'Bus 350 / 351',
                duration: '70-90 min',
                price: '€2.10 (t+ ticket)',
                frequency: 'Every 30 min',
                hours: '6:00 AM - 11:00 PM',
                stops: 'Several stops in Paris',
                notes: 'VERY cheap but slow. For budget travelers.'
              },
              {
                method: 'Official taxi',
                duration: '30-60 min (depends on traffic)',
                price: '€50-60 flat rate',
                frequency: 'Always available',
                hours: '24/7',
                stops: 'Door to door',
                notes: 'Flat rate to Paris center. Max 4 people.'
              },
              {
                method: 'Uber',
                duration: '30-60 min',
                price: '€45-70',
                frequency: 'On demand',
                hours: '24/7',
                stops: 'Door to door',
                notes: 'Price varies by demand.'
              }
            ]
          },
          {
            name: 'Orly (ORY)',
            distance: '14 km south',
            toCity: [
              {
                method: 'Orlyval + RER B',
                duration: '35-45 min',
                price: '€14.50',
                frequency: 'Every 4-8 min',
                hours: '6:00 AM - 11:00 PM',
                stops: 'Automatic to Antony, then RER B to center',
                notes: 'Fast but expensive.'
              },
              {
                method: 'Tram T7 + Metro',
                duration: '50-70 min',
                price: '€2.10',
                frequency: 'Every 8 min',
                hours: '5:30 AM - 12:30 AM',
                stops: 'T7 to Villejuif, then Metro 7',
                notes: 'CHEAPEST. Smart option.'
              },
              {
                method: 'OrlyBus',
                duration: '30-40 min',
                price: '€11.20',
                frequency: 'Every 10-20 min',
                hours: '6:00 AM - 12:00 AM',
                stops: 'Direct to Denfert-Rochereau',
                notes: 'Good value for money.'
              },
              {
                method: 'Official taxi',
                duration: '20-40 min',
                price: '€35-40 flat rate',
                frequency: '24/7',
                hours: '24/7',
                stops: 'Door to door',
                notes: 'Flat rate. Cheaper than CDG.'
              }
            ]
          },
          {
            name: 'Beauvais (BVA)',
            distance: '85 km north',
            toCity: [
              {
                method: 'Official airport bus',
                duration: '75-90 min',
                price: '€17 (€34 round trip)',
                frequency: 'Coordinated with flights',
                hours: 'According to flight schedules',
                stops: 'Porte Maillot (Paris)',
                notes: 'ONLY public transport. Book online.'
              },
              {
                method: 'Taxi/Uber',
                duration: '70-90 min',
                price: '€150-200',
                frequency: '24/7',
                hours: '24/7',
                stops: 'Door to door',
                notes: 'VERY expensive. Only if necessary.'
              }
            ]
          }
        ],
        
        publicTransport: {
          types: [
            {
              name: 'Metro',
              lines: '16 lines, 308 stations',
              hours: '5:30 AM - 1:15 AM (Fri/Sat until 2:15 AM)',
              frequency: 'Every 2-8 minutes'
            },
            {
              name: 'RER',
              lines: '5 lines (A, B, C, D, E)',
              hours: '5:00 AM - 12:30 AM',
              frequency: 'Every 10-20 minutes'
            },
            {
              name: 'Bus',
              lines: '60+ lines',
              hours: '6:30 AM - 8:30 PM (some 24h)',
              frequency: 'Every 5-15 minutes'
            },
            {
              name: 'Tram',
              lines: '9 lines',
              hours: '5:30 AM - 12:30 AM',
              frequency: 'Every 4-8 minutes'
            }
          ],
          
          tickets: [
            { type: 'Ticket t+', price: '€2.10', validity: '90 min (metro/bus/tram, no RER transfer)' },
            { type: 'Carnet 10 tickets', price: '€17.35', validity: '15% savings' },
            { type: 'Mobilis 1 day', price: '€8.45', validity: 'Zones 1-2, unlimited' },
            { type: 'Paris Visite 1 day', price: '€13.55', validity: 'Zones 1-3, includes discounts' },
            { type: 'Paris Visite 5 days', price: '€43.30', validity: 'Ideal for tourists' },
            { type: 'Navigo Weekly', price: '€30', validity: 'Mon-Sun, all zones' }
          ],
          
          whereToBuy: [
            'Automatic machines at stations (credit cards)',
            'Ticket offices at major stations',
            '"Bonjour RATP" app - digital tickets',
            '"Île-de-France Mobilités" app',
            'Tabacs (shops) - physical only'
          ],
          
          officialMaps: [
            {
              name: 'Metro Map PDF',
              url: 'https://www.ratp.fr/sites/default/files/plans-lignes/Plans-essentiels/Plan-Metro.pdf'
            },
            {
              name: 'RATP Interactive Maps',
              url: 'https://www.ratp.fr/en/plans-lignes'
            }
          ],
          
          apps: [
            'Bonjour RATP (official)',
            'Citymapper Paris (best)',
            'Google Maps'
          ],
          
          scams: [
            '⚠️ Fake ticket sellers outside stations',
            '⚠️ Pickpockets on lines 1, 4, 9 (touristy)',
            '⚠️ "Helpers" at machines who steal cards',
            '⚠️ Fake inspectors asking for tickets outside trains',
            '⚠️ People asking to sign petitions'
          ],
          
          tips: [
            'ALWAYS validate your ticket (€60 fine)',
            'Keep ticket until you exit',
            'RER B to airport = cheapest',
            'Last metro 1 AM (2 AM weekends)',
            'Kids <4 years free',
            'Free WiFi at main stations'
          ]
        },
        
        topAttractions: [
          { name: 'Eiffel Tower', wiki: 'https://en.wikipedia.org/wiki/Eiffel_Tower' },
          { name: 'Louvre', wiki: 'https://en.wikipedia.org/wiki/Louvre' },
          { name: 'Arc de Triomphe', wiki: 'https://en.wikipedia.org/wiki/Arc_de_Triomphe' },
          { name: 'Notre-Dame', wiki: 'https://en.wikipedia.org/wiki/Notre-Dame_de_Paris' },
          { name: 'Sacré-Cœur', wiki: 'https://en.wikipedia.org/wiki/Sacr%C3%A9-C%C5%93ur,_Paris' }
        ],
        
        neighborhoods: [
          '1st - Louvre (museums)',
          '4th - Le Marais (fashion)',
          '5th - Latin Quarter (university)',
          '18th - Montmartre (artistic)',
          '7th - Eiffel Tower'
        ]
      }
    ],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 days visa-free for many countries',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'June-August (summer)',
      shoulder: 'April-May, Sept-Oct (ideal)',
      low: 'Nov-March (cold, fewer tourists)',
      notes: 'Spring and fall are perfect to avoid crowds'
    },
    
    budget: {
      low: '€50-80/day (hostels, cheap food)',
      medium: '€100-200/day (mid-range hotels, restaurants)',
      high: '€250+/day (luxury)'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, E',
      emergency: '112',
      tipping: '5-10% in restaurants (not mandatory)',
      bargaining: 'Not common, only at flea markets'
    },
    
    culture: {
      traditions: [
        'Gastronomy is national art',
        'Kiss on both cheeks as greeting',
        'Long lunch break (12-2pm)',
        'August = national vacation'
      ],
      festivals: [
        'Bastille Day (July 14)',
        'Cannes Film Festival (May)',
        'Tour de France (July)',
        'Fête de la Musique (June 21)'
      ],
      etiquette: [
        'Always greet with "Bonjour"',
        'Don\'t speak loudly in public',
        'Learn basic French (they appreciate it)',
        'Book restaurants in advance'
      ]
    },
    
    food: {
      mustTry: [
        'Croissant and pain au chocolat',
        'French cheeses (Brie, Camembert)',
        'Escargots (snails)',
        'Coq au vin',
        'Crème brûlée',
        'Wines from Bordeaux and Champagne'
      ],
      foodTips: [
        'Bakery every morning',
        'Menu of the day = best value',
        'Free tap water ("carafe d\'eau")'
      ]
    },
    
    highlights: [
      'Eiffel Tower and Paris',
      'French Riviera (Nice, Cannes)',
      'Loire Valley (castles)',
      'Mont Saint-Michel',
      'French Alps',
      'Provence (lavender fields)'
    ],
    
    safety: {
      level: 'Generally safe',
      warnings: [
        'Pickpockets in Paris (metro, Eiffel Tower)',
        '"Gold ring" scams in tourist areas',
        'Watch your luggage on trains'
      ]
    }
  },

  {
    id: 'espana',
    name: 'Spain',
    continent: 'Europe',
    flag: '🇪🇸',
    capital: 'Madrid',
    population: '47.4 million',
    languages: ['Spanish', 'Catalan', 'Basque', 'Galician'],
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
    timezone: 'CET (UTC+1)',
    
    mainCities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Málaga', 'Bilbao', 'Granada'],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 days visa-free for many countries',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'June-August (very hot)',
      shoulder: 'April-May, Sept-Oct (perfect)',
      low: 'Nov-March (mild, fewer tourists)',
      notes: 'Avoid August if possible - everything closes for vacation'
    },
    
    budget: {
      low: '€40-70/day',
      medium: '€80-150/day',
      high: '€200+/day'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, F',
      emergency: '112',
      tipping: '5-10% optional',
      bargaining: 'Only at markets'
    },
    
    culture: {
      traditions: [
        'Siesta (2-5pm) - many shops close',
        'Late dinner (9-11pm)',
        'Tapas as lifestyle',
        'Party and nightlife until late'
      ],
      festivals: [
        'La Tomatina (Buñol, August)',
        'San Fermín - Running of Bulls (Pamplona, July)',
        'Holy Week (March/April)',
        'April Fair (Seville)'
      ],
      etiquette: [
        'Greet with two kisses',
        'Speak loudly - it\'s normal',
        'Don\'t rush - relaxed pace',
        'Learn "gracias" and "por favor"'
      ]
    },
    
    food: {
      mustTry: [
        'Valencian paella',
        'Iberian ham',
        'Various tapas',
        'Gazpacho',
        'Churros with chocolate',
        'Spanish omelet'
      ],
      foodTips: [
        'Menu of the day = complete cheap meal',
        'Free tapas with drink in South',
        'Local markets = authentic'
      ]
    },
    
    highlights: [
      'Sagrada Familia (Barcelona)',
      'Alhambra (Granada)',
      'Park Güell (Barcelona)',
      'Prado Museum (Madrid)',
      'Camino de Santiago',
      'Ibiza and Mediterranean beaches'
    ],
    
    safety: {
      level: 'Very safe',
      warnings: [
        'Pickpockets in Barcelona (Las Ramblas)',
        'Card game scams',
        'Don\'t leave bags on terrace chairs'
      ]
    }
  },

  {
    id: 'italia',
    name: 'Italy',
    continent: 'Europe',
    flag: '🇮🇹',
    capital: 'Rome',
    population: '60.4 million',
    languages: ['Italian'],
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
    timezone: 'CET (UTC+1)',
    
    mainCities: ['Rome', 'Milan', 'Venice', 'Florence', 'Naples', 'Bologna', 'Turin'],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 days visa-free for many countries',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'June-August (very crowded)',
      shoulder: 'April-May, Sept-Oct (ideal)',
      low: 'Nov-March (cold, rain)',
      notes: 'Spring = perfect for cities'
    },
    
    budget: {
      low: '€50-80/day',
      medium: '€100-180/day',
      high: '€250+/day'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, F, L',
      emergency: '112',
      tipping: 'Round up bill, not mandatory',
      bargaining: 'Only at street markets'
    },
    
    culture: {
      traditions: [
        'Family is most important',
        'Evening stroll (passeggiata)',
        'Espresso standing at the bar',
        'Lunch is main meal'
      ],
      festivals: [
        'Venice Carnival (Feb)',
        'Palio di Siena (horse races, July-August)',
        'Venice Film Festival (Sept)',
        'Holy Week in Rome'
      ],
      etiquette: [
        'Greet with two kisses',
        'Dress well - appearance matters',
        'No cappuccino after 11 AM',
        'No pineapple pizza (never!)'
      ]
    },
    
    food: {
      mustTry: [
        'Authentic Neapolitan pizza',
        'Pasta carbonara (Rome)',
        'Artisan gelato',
        'Risotto (Milan)',
        'Bistecca fiorentina',
        'Tiramisu'
      ],
      foodTips: [
        'Avoid touristy restaurants',
        'Look for local "trattoria"',
        'Coperto = cover charge (normal)',
        'Mineral water = you pay for it'
      ]
    },
    
    highlights: [
      'Colosseum and Roman Forum',
      'Venice Canals',
      'Uffizi Gallery (Florence)',
      'Amalfi Coast',
      'Cinque Terre',
      'Vatican and Sistine Chapel'
    ],
    
    safety: {
      level: 'Generally safe',
      warnings: [
        'Pickpockets in Rome, Milan, Venice',
        '"Gladiator" scams at Colosseum',
        'Beware unofficial taxis',
        'ZTL = automatic fines for cars'
      ]
    }
  },

  {
    id: 'reino-unido',
    name: 'United Kingdom',
    continent: 'Europe',
    flag: '🇬🇧',
    capital: 'London',
    population: '67.3 million',
    languages: ['English', 'Welsh', 'Scottish Gaelic'],
    currency: { code: 'GBP', symbol: '£', name: 'Pound Sterling' },
    timezone: 'GMT (UTC+0)',
    
    mainCities: ['London', 'Edinburgh', 'Manchester', 'Liverpool', 'Glasgow', 'Bristol', 'Oxford'],
    
    visa: {
      schengen: false,
      requirements: 'Visa depends on nationality - check GOV.UK',
      visaOnArrival: 'Depends on country of origin'
    },
    
    bestTime: {
      high: 'June-August (best weather)',
      shoulder: 'April-May, Sept (good)',
      low: 'Oct-March (cold, rain)',
      notes: 'Always bring umbrella'
    },
    
    budget: {
      low: '£50-80/day',
      medium: '£100-200/day',
      high: '£300+/day'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'G (3-pin)',
      emergency: '999',
      tipping: '10-15% in restaurants',
      bargaining: 'Not common'
    },
    
    culture: {
      traditions: [
        'Afternoon tea at 5',
        'Queuing = sacred',
        'Pubs as social center',
        'Football = religion'
      ],
      festivals: [
        'Edinburgh Fringe Festival (August)',
        'Notting Hill Carnival (London, August)',
        'Wimbledon (tennis, June-July)',
        'Bonfire Night (Nov 5)'
      ],
      etiquette: [
        'Always say "please", "thank you", "sorry"',
        'Respect queues - never cut in line',
        'Talk about weather',
        'Don\'t talk on public transport'
      ]
    },
    
    food: {
      mustTry: [
        'Fish & Chips',
        'Full English Breakfast',
        'Sunday Roast',
        'Shepherd\'s Pie',
        'Sticky Toffee Pudding',
        'Curry (adopted national dish)'
      ],
      foodTips: [
        'Pubs = honest cheap food',
        'Street food markets',
        'Chains like Pret, Greggs = cheap'
      ]
    },
    
    highlights: [
      'Tower of London and Big Ben',
      'Stonehenge',
      'Edinburgh Castle',
      'Lake District',
      'Cotswolds',
      'Free museums in London'
    ],
    
    safety: {
      level: 'Very safe',
      warnings: [
        'Pickpockets on London Underground',
        'Beware drunk people on weekends',
        'Look right when crossing (drive on left)'
      ]
    }
  },

  {
    id: 'alemania',
    name: 'Germany',
    continent: 'Europe',
    flag: '🇩🇪',
    capital: 'Berlin',
    population: '83.2 million',
    languages: ['German'],
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
    timezone: 'CET (UTC+1)',
    
    mainCities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne', 'Stuttgart', 'Dresden'],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 days visa-free for many countries',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'May-Sept (warm)',
      shoulder: 'April, Oct (pleasant)',
      low: 'Nov-March (cold)',
      notes: 'December = beautiful Christmas markets'
    },
    
    budget: {
      low: '€45-75/day',
      medium: '€90-160/day',
      high: '€200+/day'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, F',
      emergency: '112',
      tipping: '5-10% round up',
      bargaining: 'Not common'
    },
    
    culture: {
      traditions: [
        'Punctuality = essential',
        'Sunday = rest day (stores closed)',
        'Beer part of culture',
        'Recycling very important'
      ],
      festivals: [
        'Oktoberfest (Munich, Sept-Oct)',
        'Carnival (Cologne, Feb)',
        'Christmas Markets (Dec)',
        'Love Parade (Berlin, July)'
      ],
      etiquette: [
        'Be punctual always',
        'Direct and honest communication',
        'Don\'t cross red lights',
        'Separate your trash correctly'
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
        'Beer gardens = local experience',
        'Döner kebab = favorite fast food',
        'German bakeries = amazing'
      ]
    },
    
    highlights: [
      'Berlin Wall and Brandenburg Gate',
      'Neuschwanstein Castle',
      'Oktoberfest',
      'Black Forest',
      'Rhine Valley',
      'Dachau Concentration Camp'
    ],
    
    safety: {
      level: 'Very safe',
      warnings: [
        'Pickpockets in tourist areas',
        'Party zones can be rough at night'
      ]
    }
  },

  {
    id: 'grecia',
    name: 'Greece',
    continent: 'Europe',
    flag: '🇬🇷',
    capital: 'Athens',
    population: '10.7 million',
    languages: ['Greek'],
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
    timezone: 'EET (UTC+2)',
    
    mainCities: ['Athens', 'Thessaloniki', 'Santorini', 'Mykonos', 'Crete', 'Rhodes', 'Corfu'],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 days visa-free for many countries',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'July-August (very hot and crowded)',
      shoulder: 'May-June, Sept-Oct (perfect)',
      low: 'Nov-April (cold, islands closed)',
      notes: 'Spring = flowers, fewer people, ideal weather'
    },
    
    budget: {
      low: '€40-60/day',
      medium: '€70-120/day',
      high: '€150+/day'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, F',
      emergency: '112',
      tipping: '5-10% if service was good',
      bargaining: 'Common at markets and small shops'
    },
    
    culture: {
      traditions: [
        'Siesta after lunch',
        'Very late dinner (9-11pm)',
        'Family and friends are priority',
        'Exceptional hospitality with tourists'
      ],
      festivals: [
        'Patras Carnival (Feb-March)',
        'Orthodox Easter (variable date)',
        'Athens Festival (summer)',
        'Ochi Day (Oct 28)'
      ],
      etiquette: [
        'Greet with "Yassas" (hello)',
        'Don\'t point with open palm',
        'Dress modestly at monasteries',
        'Accept Greek coffee when offered'
      ]
    },
    
    food: {
      mustTry: [
        'Moussaka',
        'Souvlaki and gyros',
        'Greek salad with feta',
        'Tzatziki',
        'Baklava',
        'Ouzo (anise drink)'
      ],
      foodTips: [
        'Local tavernas = authentic and cheap',
        'Order mezze to share',
        'Free water in restaurants'
      ]
    },
    
    highlights: [
      'Acropolis and Parthenon (Athens)',
      'Santorini (sunsets)',
      'Mykonos (party and beaches)',
      'Meteora (monasteries on rocks)',
      'Delphi (archaeological site)',
      'Greek island cruise'
    ],
    
    safety: {
      level: 'Very safe',
      warnings: [
        'Pickpockets in Athens tourist areas',
        'Taxis may try to overcharge',
        'Extreme heat in summer (dehydration)'
      ]
    }
  },

  {
    id: 'paises-bajos',
    name: 'Netherlands',
    continent: 'Europe',
    flag: '🇳🇱',
    capital: 'Amsterdam',
    population: '17.5 million',
    languages: ['Dutch', 'English (widely spoken)'],
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
    timezone: 'CET (UTC+1)',
    
    mainCities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Giethoorn'],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 days visa-free for many countries',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'July-August (warm)',
      shoulder: 'April-May (tulips), Sept',
      low: 'Nov-March (cold, rain)',
      notes: 'April = tulips blooming (Keukenhof)'
    },
    
    budget: {
      low: '€50-80/day',
      medium: '€100-180/day',
      high: '€220+/day'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, F',
      emergency: '112',
      tipping: 'Round up or 5-10%',
      bargaining: 'Only at flea markets'
    },
    
    culture: {
      traditions: [
        'Bicycle = main transport',
        'Direct and honest when speaking',
        'Punctuality important',
        'Very liberal and tolerant society'
      ],
      festivals: [
        'King\'s Day (April 27) - orange party',
        'Gay Pride Parade (August)',
        'Tulip season (March-May)',
        'New Year\'s Eve in Amsterdam'
      ],
      etiquette: [
        'Respect bike lanes (don\'t walk there)',
        'Take off shoes entering home',
        'Splitting bill is normal',
        'Don\'t touch others\' bikes'
      ]
    },
    
    food: {
      mustTry: [
        'Stroopwafel (caramel waffle)',
        'Bitterballen (croquettes)',
        'Dutch cheeses',
        'Raw herring',
        'Poffertjes (mini pancakes)',
        'Licorice'
      ],
      foodTips: [
        'Try street food at markets',
        'Pannenkoeken = pancake restaurants',
        'Cafeterias = coffee, not cannabis'
      ]
    },
    
    highlights: [
      'Amsterdam Canals',
      'Keukenhof Gardens (tulips)',
      'Kinderdijk Windmills',
      'Van Gogh Museum',
      'Giethoorn (Venice of North)',
      'Zaanse Schans (windmills)'
    ],
    
    safety: {
      level: 'Very safe',
      warnings: [
        'Pickpockets in Amsterdam',
        'Watch out for bikes (go fast)',
        'Coffee shops = 18+ only',
        'Don\'t buy drugs on street'
      ]
    }
  },

  {
    id: 'suiza',
    name: 'Switzerland',
    continent: 'Europe',
    flag: '🇨🇭',
    capital: 'Bern',
    population: '8.7 million',
    languages: ['German', 'French', 'Italian', 'Romansh'],
    currency: { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc' },
    timezone: 'CET (UTC+1)',
    
    mainCities: ['Zurich', 'Geneva', 'Bern', 'Lucerne', 'Interlaken', 'Zermatt', 'Lugano'],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 days visa-free for many countries',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'July-August (hiking), Dec-Feb (skiing)',
      shoulder: 'May-June, Sept (perfect)',
      low: 'Nov, March-April (between seasons)',
      notes: 'Depends if you want green mountains or snow'
    },
    
    budget: {
      low: '€80-120/day (expensive)',
      medium: '€150-250/day',
      high: '€350+/day'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, J (3 round pins)',
      emergency: '112',
      tipping: 'Included in bill (optional to round up)',
      bargaining: 'Not common'
    },
    
    culture: {
      traditions: [
        'Extreme punctuality',
        'Quality over quantity',
        'Respect for nature',
        'Multilingual (4 official languages)'
      ],
      festivals: [
        'Fasnacht (Basel carnival)',
        'Fête de l\'Escalade (Geneva, Dec)',
        'Street Parade (Zurich, August)',
        'Cow parades (summer)'
      ],
      etiquette: [
        'Be punctual always',
        'Speak quietly in public',
        'Recycle correctly',
        'Sunday = quiet day (no noise)'
      ]
    },
    
    food: {
      mustTry: [
        'Cheese fondue',
        'Raclette',
        'Swiss chocolate',
        'Rösti (grated potatoes)',
        'Bratwurst',
        'Muesli'
      ],
      foodTips: [
        'Very expensive - consider supermarkets',
        'Menu of the day = best option',
        'Free water at public fountains'
      ]
    },
    
    highlights: [
      'Matterhorn (Zermatt)',
      'Jungfraujoch (Top of Europe)',
      'Lake Lucerne',
      'Rhine Falls',
      'Interlaken (adventure sports)',
      'Panoramic trains'
    ],
    
    safety: {
      level: 'Extremely safe',
      warnings: [
        'Avalanches in mountains (respect signs)',
        'Very expensive (budget well)'
      ]
    }
  },

  {
    id: 'portugal',
    name: 'Portugal',
    continent: 'Europe',
    flag: '🇵🇹',
    capital: 'Lisbon',
    population: '10.3 million',
    languages: ['Portuguese'],
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
    timezone: 'WET (UTC+0)',
    
    mainCities: ['Lisbon', 'Porto', 'Faro', 'Coimbra', 'Braga', 'Sintra', 'Évora'],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 days visa-free for many countries',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'June-August (hot)',
      shoulder: 'April-May, Sept-Oct (perfect)',
      low: 'Nov-March (rainy but mild)',
      notes: 'Mild weather year-round'
    },
    
    budget: {
      low: '€35-60/day (very cheap)',
      medium: '€70-130/day',
      high: '€180+/day'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, F',
      emergency: '112',
      tipping: '5-10% optional',
      bargaining: 'Uncommon'
    },
    
    culture: {
      traditions: [
        'Fado (melancholic music)',
        'Azulejos (decorative tiles)',
        'Café and pastry on every corner',
        'Relaxed pace of life'
      ],
      festivals: [
        'Lisbon Festivities (June)',
        'São João (Porto, June 23-24)',
        'Carnival (February)',
        'Fado Festival'
      ],
      etiquette: [
        'Greet with two kisses',
        'Learn "obrigado/a"',
        'Respect siesta (2-5pm)',
        'Late dinner (8-10pm)'
      ]
    },
    
    food: {
      mustTry: [
        'Bacalhau (cod - 1000 recipes)',
        'Pastéis de nata (custard tart)',
        'Francesinha (Porto sandwich)',
        'Grilled sardines',
        'Caldo verde',
        'Port wine'
      ],
      foodTips: [
        'Very cheap compared to Europe',
        'Tascas = traditional restaurants',
        'Bread, butter, olives = you pay (couvert)'
      ]
    },
    
    highlights: [
      'Alfama (Lisbon)',
      'Belém Tower',
      'Pena Palace (Sintra)',
      'Livraria Lello (Porto)',
      'Algarve Beaches',
      'Douro Valley'
    ],
    
    safety: {
      level: 'Very safe',
      warnings: [
        'Pickpockets on tram 28 (Lisbon)',
        'Tourist menu scams',
        'Steep hills (comfortable shoes)'
      ]
    }
  },

  {
    id: 'austria',
    name: 'Austria',
    continent: 'Europe',
    flag: '🇦🇹',
    capital: 'Vienna',
    population: '9 million',
    languages: ['German'],
    currency: { code: 'EUR', symbol: '€', name: 'Euro' },
    timezone: 'CET (UTC+1)',
    
    mainCities: ['Vienna', 'Salzburg', 'Innsbruck', 'Graz', 'Hallstatt'],
    
    visa: {
      schengen: true,
      requirements: 'Schengen - 90 days visa-free for many countries',
      visaOnArrival: false
    },
    
    bestTime: {
      high: 'July-August, Dec-Jan (skiing)',
      shoulder: 'May-June, Sept',
      low: 'Nov, March-April',
      notes: 'December = magical Christmas markets'
    },
    
    budget: {
      low: '€50-80/day',
      medium: '€100-170/day',
      high: '€220+/day'
    },
    
    practical: {
      voltage: '230V',
      plugType: 'C, F',
      emergency: '112',
      tipping: '5-10%',
      bargaining: 'No'
    },
    
    culture: {
      traditions: [
        'Classical music (Mozart, Strauss)',
        'Traditional cafés',
        'Opera and theater',
        'Mountains and nature'
      ],
      festivals: [
        'Salzburg Festival (summer)',
        'Vienna Opera Ball (February)',
        'Christmas Markets',
        'New Year in Vienna'
      ],
      etiquette: [
        'Formal greetings',
        'Punctuality expected',
        'Silence on public transport',
        'Dress well for opera/concerts'
      ]
    },
    
    food: {
      mustTry: [
        'Wiener Schnitzel',
        'Apfelstrudel',
        'Sachertorte (chocolate cake)',
        'Tafelspitz',
        'Kaiserschmarrn',
        'Viennese coffee'
      ],
      foodTips: [
        'Heuriger = local wine taverns',
        'Traditional café = cultural experience',
        'Large portions'
      ]
    },
    
    highlights: [
      'Schönbrunn Palace (Vienna)',
      'Mozart\'s House (Salzburg)',
      'Hallstatt (fairy tale village)',
      'Tyrolean Alps',
      'Wachau Valley',
      'Vienna Opera House'
    ],
    
    safety: {
      level: 'Very safe',
      warnings: [
        'Pickpockets in tourist areas',
        'Avalanches in Alps'
      ]
    }
  },

  // ===== AMERICAS (6 countries) =====
  {
    id: 'estados-unidos',
    name: 'United States',
    continent: 'Americas',
    flag: '🇺🇸',
    capital: 'Washington D.C.',
    population: '331 million',
    languages: ['English', 'Spanish'],
    currency: { code: 'USD', symbol: '$', name: 'Dollar' },
    timezone: 'Multiple (6 zones)',
    
    mainCities: ['New York', 'Los Angeles', 'Chicago', 'Miami', 'Las Vegas', 'San Francisco', 'Orlando'],
    
    visa: {
      schengen: false,
      requirements: 'ESTA or visa depending on nationality',
      visaOnArrival: 'ESTA online (eligible countries)'
    },
    
    bestTime: {
      high: 'Varies by region',
      shoulder: 'Spring and fall generally',
      low: 'Depends on destination',
      notes: 'Huge country - weather varies greatly by zone'
    },
    
    budget: {
      low: '$60-100/day',
      medium: '$150-250/day',
      high: '$350+/day'
    },
    
    practical: {
      voltage: '120V',
      plugType: 'A, B',
      emergency: '911',
      tipping: '15-20% mandatory in restaurants',
      bargaining: 'Not common'
    },
    
    culture: {
      traditions: [
        'Tips are mandatory',
        'Car culture (limited public transport)',
        'Friendly and talkative',
        'Huge cultural diversity'
      ],
      festivals: [
        'July 4th (Independence)',
        'Thanksgiving (November)',
        'Halloween (October 31)',
        'Super Bowl (February)'
      ],
      etiquette: [
        'Tip 15-20% always',
        'Personal space (no touching)',
        'Small talk is common',
        'Show ID always (under 21 no alcohol)'
      ]
    },
    
    food: {
      mustTry: [
        'Burgers',
        'BBQ (varies by state)',
        'New York hot dogs',
        'Tex-Mex',
        'Apple pie',
        'Buffalo wings'
      ],
      foodTips: [
        'Giant portions',
        'Fast food everywhere',
        'Diners = classic experience',
        'Free water with ice'
      ]
    },
    
    highlights: [
      'Statue of Liberty (NY)',
      'Grand Canyon',
      'Disney Parks',
      'Golden Gate (San Francisco)',
      'Las Vegas Strip',
      'National Parks (Yellowstone, Yosemite)'
    ],
    
    safety: {
      level: 'Varies by city',
      warnings: [
        'Avoid dangerous neighborhoods at night',
        'Gun crime in some areas',
        'Health insurance VERY important (expensive)',
        'Don\'t leave valuables visible in car'
      ]
    }
  },

  {
    id: 'mexico',
    name: 'Mexico',
    continent: 'Americas',
    flag: '🇲🇽',
    capital: 'Mexico City',
    population: '128 million',
    languages: ['Spanish'],
    currency: { code: 'MXN', symbol: '$', name: 'Mexican Peso' },
    timezone: 'Multiple (4 zones)',
    
    mainCities: ['Mexico City', 'Guadalajara', 'Cancún', 'Playa del Carmen', 'Oaxaca', 'Mérida', 'Puerto Vallarta'],
    
    visa: {
      schengen: false,
      requirements: 'No visa for tourism (many countries) - up to 180 days',
      visaOnArrival: 'Tourist card at airport'
    },
    
    bestTime: {
      high: 'Dec-April (dry)',
      shoulder: 'Nov, May',
      low: 'June-Oct (rain, coastal hurricanes)',
      notes: 'Coast = hot year-round'
    },
    
    budget: {
      low: '$25-40/day (very cheap)',
      medium: '$50-100/day',
      high: '$150+/day'
    },
    
    practical: {
      voltage: '127V',
      plugType: 'A, B',
      emergency: '911',
      tipping: '10-15% in restaurants',
      bargaining: 'Common at markets'
    },
    
    culture: {
      traditions: [
        'Family first',
        'Mariachi music',
        'Day of the Dead (November)',
        'Food = important social event'
      ],
      festivals: [
        'Day of the Dead (Nov 1-2)',
        'Independence Day (Sept 15-16)',
        'Holy Week',
        'Carnival (Veracruz, Mazatlán)'
      ],
      etiquette: [
        'Greet with kiss on cheek',
        'Mexicans are very friendly',
        'Don\'t drink tap water',
        'Mexican time = more flexible'
      ]
    },
    
    food: {
      mustTry: [
        'Tacos al pastor',
        'Mole',
        'Pozole',
        'Tamales',
        'Fresh guacamole',
        'Tequila and mezcal'
      ],
      foodTips: [
        'Street food = authentic and cheap',
        'Stands with long lines = good sign',
        'Spicy can be VERY spicy',
        'Bottled water always'
      ]
    },
    
    highlights: [
      'Chichén Itzá',
      'Teotihuacán',
      'Riviera Maya Beaches',
      'Yucatán Cenotes',
      'Guanajuato',
      'Copper Canyon'
    ],
    
    safety: {
      level: 'Varies greatly by area',
      warnings: [
        'Avoid dangerous border areas',
        'Don\'t take street taxis (use Uber/Didi)',
        'Don\'t show expensive items',
        'Tourist areas generally safe',
        'Don\'t drink tap water'
      ]
    }
  },

  {
    id: 'canada',
    name: 'Canada',
    continent: 'Americas',
    flag: '🇨🇦',
    capital: 'Ottawa',
    population: '38 million',
    languages: ['English', 'French'],
    currency: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    timezone: 'Multiple (6 zones)',
    
    mainCities: ['Toronto', 'Vancouver', 'Montreal', 'Quebec', 'Calgary', 'Ottawa', 'Banff'],
    
    visa: {
      schengen: false,
      requirements: 'eTA online or visa depending on nationality',
      visaOnArrival: 'eTA for eligible countries'
    },
    
    bestTime: {
      high: 'June-August (warm)',
      shoulder: 'May, Sept (pleasant)',
      low: 'Oct-April (very cold)',
      notes: 'Winter = -20°C or colder. Summer = perfect'
    },
    
    budget: {
      low: 'C$70-100/day',
      medium: 'C$130-220/day',
      high: 'C$300+/day'
    },
    
    practical: {
      voltage: '120V',
      plugType: 'A, B',
      emergency: '911',
      tipping: '15-20%',
      bargaining: 'No'
    },
    
    culture: {
      traditions: [
        'Multiculturalism',
        'Hockey = national sport',
        'Bilingual (English and French)',
        'Very polite people'
      ],
      festivals: [
        'Canada Day (July 1)',
        'Quebec Winter Carnival',
        'Jazz Festival (Montreal)',
        'Calgary Stampede (July)'
      ],
      etiquette: [
        'Canadians are extremely polite',
        '"Sorry" said for everything',
        'Queuing is sacred',
        'Cultural diversity respected'
      ]
    },
    
    food: {
      mustTry: [
        'Poutine (fries with cheese and gravy)',
        'Authentic maple syrup',
        'Montreal smoked meat',
        'Butter tarts',
        'Nanaimo bars',
        'Tourtière'
      ],
      foodTips: [
        'Tim Hortons = Canadian institution',
        'Excellent multicultural food',
        'Large portions',
        'Prices + taxes (not included)'
      ]
    },
    
    highlights: [
      'Niagara Falls',
      'Rocky Mountains and Banff',
      'Quebec (European city)',
      'Toronto CN Tower',
      'Vancouver and Stanley Park',
      'Northern Lights (Yukon)'
    ],
    
    safety: {
      level: 'Extremely safe',
      warnings: [
        'Bears in national parks (follow rules)',
        'Extreme cold in winter (hypothermia)',
        'Huge distances between cities'
      ]
    }
  },

  {
    id: 'brasil',
    name: 'Brazil',
    continent: 'Americas',
    flag: '🇧🇷',
    capital: 'Brasilia',
    population: '214 million',
    languages: ['Portuguese'],
    currency: { code: 'BRL', symbol: 'R$', name: 'Real' },
    timezone: 'Multiple (4 zones)',
    
    mainCities: ['Rio de Janeiro', 'São Paulo', 'Salvador', 'Brasilia', 'Florianópolis', 'Foz do Iguaçu', 'Manaus'],
    
    visa: {
      schengen: false,
      requirements: 'No visa for tourism (many countries) - 90 days',
      visaOnArrival: 'Depends on nationality'
    },
    
    bestTime: {
      high: 'Dec-March (summer - hot)',
      shoulder: 'April-May, Sept-Nov',
      low: 'June-August (mild winter)',
      notes: 'Carnival = February (very crowded and expensive)'
    },
    
    budget: {
      low: '$30-50/day',
      medium: '$60-120/day',
      high: '$180+/day'
    },
    
    practical: {
      voltage: '127V / 220V (varies)',
      plugType: 'C, N',
      emergency: '190 (police), 192 (ambulance)',
      tipping: '10% included in bill',
      bargaining: 'At markets and beaches'
    },
    
    culture: {
      traditions: [
        'Carnival is biggest thing',
        'Football = national passion',
        'Samba and bossa nova',
        'Very social and cheerful people'
      ],
      festivals: [
        'Carnival (February - RIO)',
        'New Year at Copacabana',
        'Festa Junina (June)',
        'Réveillon (December 31)'
      ],
      etiquette: [
        'Greet with kiss on cheek',
        'Brazilians are warm and touchy',
        'Learn basic Portuguese (not Spanish)',
        'Being late is normal'
      ]
    },
    
    food: {
      mustTry: [
        'Feijoada',
        'Churrasco (barbecue)',
        'Açaí bowl',
        'Pão de queijo',
        'Moqueca',
        'Caipirinha'
      ],
      foodTips: [
        'Rodizio = unlimited meat buffet',
        'Kilo restaurants = pay by weight',
        'Beach food (expensive but worth it)',
        'Amazing fresh juices'
      ]
    },
    
    highlights: [
      'Christ the Redeemer (Rio)',
      'Sugarloaf Mountain',
      'Iguazu Falls',
      'Amazon',
      'Rio Beaches',
      'Fernando de Noronha'
    ],
    
    safety: {
      level: 'Caution needed',
      warnings: [
        'Don\'t show expensive items',
        'Avoid favelas without local guide',
        'Theft common in tourist areas',
        'Don\'t resist if robbed',
        'Uber safer than taxi',
        'Don\'t walk alone at night'
      ]
    }
  },

  // ===== ASIA (2 countries so far) =====
  {
    id: 'japon',
    name: 'Japan',
    continent: 'Asia',
    flag: '🇯🇵',
    capital: 'Tokyo',
    population: '125 million',
    languages: ['Japanese'],
    currency: { code: 'JPY', symbol: '¥', name: 'Yen' },
    timezone: 'JST (UTC+9)',
    
    mainCities: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima', 'Nara', 'Hakone', 'Sapporo'],
    
    visa: {
      schengen: false,
      requirements: 'Visa-free 90 days for many countries',
      visaOnArrival: 'Stamp at airport'
    },
    
    bestTime: {
      high: 'March-April (sakura), Oct-Nov (autumn)',
      shoulder: 'May-June, Sept',
      low: 'July-August (hot humid), Dec-Feb (cold)',
      notes: 'Sakura = cherry blossoms (spectacular)'
    },
    
    budget: {
      low: '¥6,000-9,000/day ($40-60)',
      medium: '¥12,000-20,000/day ($80-140)',
      high: '¥25,000+/day ($170+)'
    },
    
    practical: {
      voltage: '100V',
      plugType: 'A, B',
      emergency: '110 (police), 119 (ambulance)',
      tipping: 'NO TIPPING (offensive)',
      bargaining: 'Not common'
    },
    
    culture: {
      traditions: [
        'Extreme respect and courtesy',
        'Remove shoes in homes/temples',
        'Bow when greeting',
        'Extreme punctuality'
      ],
      festivals: [
        'Hanami - Cherry Blossom (spring)',
        'Golden Week (late April-May)',
        'Obon (August)',
        'New Year (Jan 1-3 - everything closes)'
      ],
      etiquette: [
        'Bow when greeting',
        'No eating while walking',
        'Silence on trains',
        'NEVER tip',
        'Remove shoes where indicated',
        'No phone calls on trains'
      ]
    },
    
    food: {
      mustTry: [
        'Authentic sushi and sashimi',
        'Ramen',
        'Tempura',
        'Okonomiyaki',
        'Takoyaki',
        'Matcha everything'
      ],
      foodTips: [
        'Konbini (7-Eleven) = good cheap food',
        'Vending machines everywhere',
        'Menu with photos or plastic models',
        'Slurp your ramen (not rude)'
      ]
    },
    
    highlights: [
      'Mount Fuji',
      'Kyoto Temples',
      'Shibuya Crossing (Tokyo)',
      'Hiroshima Peace Memorial',
      'Deer in Nara',
      'Onsen (hot springs)'
    ],
    
    safety: {
      level: 'Extremely safe',
      warnings: [
        'Earthquakes possible',
        'Typhoons in summer',
        'Crime almost non-existent'
      ]
    }
  },

  {
    id: 'tailandia',
    name: 'Thailand',
    continent: 'Asia',
    flag: '🇹🇭',
    capital: 'Bangkok',
    population: '70 million',
    languages: ['Thai'],
    currency: { code: 'THB', symbol: '฿', name: 'Baht' },
    timezone: 'ICT (UTC+7)',
    
    mainCities: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Krabi', 'Ayutthaya', 'Chiang Rai'],
    
    visa: {
      schengen: false,
      requirements: 'Visa-free 30-60 days for many countries',
      visaOnArrival: 'Free stamp at airport'
    },
    
    bestTime: {
      high: 'Nov-Feb (cool and dry)',
      shoulder: 'March-May (extreme heat)',
      low: 'June-Oct (monsoon)',
      notes: 'North cooler than southern islands'
    },
    
    budget: {
      low: '$25-40/day (very cheap)',
      medium: '$50-90/day',
      high: '$150+/day'
    },
    
    practical: {
      voltage: '220V',
      plugType: 'A, B, C, O',
      emergency: '191 (police), 1669 (ambulance)',
      tipping: 'Not mandatory, round up',
      bargaining: 'Expected at markets (not stores)'
    },
    
    culture: {
      traditions: [
        'Buddhism is central',
        'King and royal family = sacred',
        'Mai pen rai (no worries - relaxed attitude)',
        'Always smiling'
      ],
      festivals: [
        'Songkran (New Year - water fight, April)',
        'Loy Krathong (Nov - floating lanterns)',
        'Full Moon Party (Koh Phangan)',
        'Yi Peng (sky lanterns, Nov)'
      ],
      etiquette: [
        'Wai = greeting (hands together)',
        'NEVER touch anyone\'s head',
        'Remove shoes in temples and homes',
        'Never insult royal family',
        'Feet are dirty (don\'t point with them)',
        'Dress modestly at temples'
      ]
    },
    
    food: {
      mustTry: [
        'Pad Thai',
        'Tom Yum Goong (spicy soup)',
        'Green Curry',
        'Mango Sticky Rice',
        'Som Tam (papaya salad)',
        'Satay'
      ],
      foodTips: [
        'Street food = delicious and cheap',
        'Say "mai phet" if you don\'t want spicy',
        'Night markets = experience',
        'Bottled water always'
      ]
    },
    
    highlights: [
      'Grand Palace (Bangkok)',
      'Reclining Buddha Temple',
      'Phi Phi Islands',
      'White Temple (Chiang Rai)',
      'Elephant sanctuaries',
      'Railay Beach'
    ],
    
    safety: {
      level: 'Generally safe',
      warnings: [
        'Common scams (tuk-tuk, taxi)',
        'Don\'t rent motorbike without experience',
        'Drugs = very severe penalty',
        'Respect lese-majesty laws',
        'Beware "ping pong shows" (scam)',
        'Occasional political protests'
      ]
    }
  }
];

// Helper functions
export const getCountryById = (id) => {
  return countriesGuide.find(country => country.id === id);
};

export const getCountriesByContinent = (continent) => {
  return countriesGuide.filter(country => country.continent === continent);
};

export const searchCountries = (query) => {
  const lowerQuery = query.toLowerCase();
  return countriesGuide.filter(country => 
    (country.name || '').toLowerCase().includes(lowerQuery) ||
    (country.capital || '').toLowerCase().includes(lowerQuery) ||
    (country.mainCities || []).some(city => city.toLowerCase().includes(lowerQuery))
  );
};

export const continentsList = ['Europe', 'Americas', 'Asia', 'Africa', 'Oceania'];
