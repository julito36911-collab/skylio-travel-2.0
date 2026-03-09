// Datos demo de restricciones de tráfico en 15 ciudades críticas
// En producción, estos datos vendrán de APIs y scraping automatizado

export const drivingRestrictions = [
  {
    id: 'roma',
    city: 'Rome',
    country: 'Italy',
    countryCode: 'IT',
    flag: '🇮🇹',
    coordinates: { lat: 41.9028, lon: 12.4964 },
    timezone: 'Europe/Rome',
    
    severity: 'EXTREME', // LOW, MEDIUM, HIGH, EXTREME
    
    restrictions: [
      {
        type: 'ZTL',
        name: 'Zona a Traffico Limitato',
        description: 'Historic center closed to almost all traffic',
        schedule: {
          weekdays: '06:30 - 18:00',
          saturday: '14:00 - 18:00',
          sunday: 'Libre',
          notes: 'Horarios pueden variar en eventos especiales'
        },
        fines: {
          amount: 83,
          currency: 'EUR',
          perCamera: true,
          notes: 'Cada cámara genera una multa independiente'
        },
        cameras: 52,
        permits: {
          available: false,
          forTourists: false,
          requirements: ['Solo residentes', 'Hoteles del centro', 'Taxis autorizados']
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PARKING',
        name: 'Terminal Gianicolo',
        price: '2€/hora',
        distance: '500m al metro',
        recommendation: 'Mejor opción para turistas'
      },
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metro A y B', 'Bus 40, 64, 910'],
        ticketPrice: '1.50€',
        dayPass: '7€'
      },
      {
        type: 'BIKE_SCOOTER',
        services: ['Lime', 'Bird', 'Dott'],
        notes: 'Perfectos para el centro'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: {
        urban: 50,
        rural: 90,
        highway: 130,
        unit: 'km/h'
      },
      fuelAvgPrice: { petrol: 1.85, diesel: 1.72, unit: 'EUR/L' },
      alcoholLimit: 0.5,
      requiredDocs: ['Licencia de conducir', 'IDP recomendado', 'Seguro obligatorio']
    },
    
    tips: [
      'Traffic is chaotic, avoid car if possible',
      'Parking downtown is almost impossible',
      'Scooters are the best local option',
      'ZTL fines arrive 6-12 months later',
      'Las cámaras no avisan, solo multan'
    ],
    
    usefulApps: ['Moovit', 'Rome2Rio', 'ParkMan', 'Citymapper'],
    
    weather: { temp: 18, condition: 'Soleado', icon: '☀️' }, // Demo
    
    lastUpdated: '2025-11-15'
  },

  {
    id: 'florencia',
    city: 'Florence',
    country: 'Italy',
    countryCode: 'IT',
    flag: '🇮🇹',
    coordinates: { lat: 43.7696, lon: 11.2558 },
    timezone: 'Europe/Rome',
    
    severity: 'EXTREME',
    
    restrictions: [
      {
        type: 'ZTL',
        name: 'Zona a Traffico Limitato',
        description: 'Centro histórico completamente restringido',
        schedule: {
          weekdays: '07:30 - 19:30',
          saturday: '07:30 - 16:00',
          sunday: 'Libre',
          notes: 'Zona F (más amplia) tiene horarios diferentes'
        },
        fines: {
          amount: 100,
          currency: 'EUR',
          perCamera: true,
          notes: 'Multas acumulativas por cada cámara'
        },
        cameras: 48,
        permits: {
          available: true,
          forTourists: 'Hotel puede tramitar',
          cost: '€30-50',
          requirements: ['Reserva de hotel en ZTL', 'Solicitud 48h antes']
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PARKING',
        name: 'Fortezza da Basso',
        price: '2€/hora',
        distance: '15 min caminando',
        recommendation: 'Parking seguro y céntrico'
      },
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Tram T1, T2', 'Bus ATAF lines principales'],
        ticketPrice: '1.50€',
        dayPass: '5€'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 50, rural: 90, highway: 130, unit: 'km/h' },
      fuelAvgPrice: { petrol: 1.87, diesel: 1.74, unit: 'EUR/L' },
      alcoholLimit: 0.5
    },
    
    tips: [
      'ZTL más estricta que Rome',
      'Hotel puede dar permiso temporal',
      'Centro es pequeño, caminar es mejor',
      'Parking Fortezza es tu mejor aliado'
    ],
    
    usefulApps: ['ATAF Firenze', 'ParkMan', 'Moovit'],
    weather: { temp: 17, condition: 'Parcialmente nublado', icon: '⛅' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'milan',
    city: 'Milan',
    country: 'Italy',
    countryCode: 'IT',
    flag: '🇮🇹',
    coordinates: { lat: 45.4642, lon: 9.1900 },
    timezone: 'Europe/Rome',
    
    severity: 'HIGH',
    
    restrictions: [
      {
        type: 'AREA_C',
        name: 'Area C',
        description: 'Pago obligatorio + restricciones ambientales',
        schedule: {
          weekdays: '07:30 - 19:30',
          saturday: 'Libre',
          sunday: 'Libre'
        },
        fines: {
          amount: 5,
          currency: 'EUR',
          daily: true,
          notes: 'Pago diario obligatorio'
        },
        cameras: 43,
        permits: {
          available: true,
          forTourists: true,
          cost: '€5/día',
          requirements: ['Vehículo Euro 4 o superior']
        }
      },
      {
        type: 'ZTL',
        name: 'ZTL Nocturna',
        description: 'Restricción nocturna en centro',
        schedule: {
          weekdays: '00:00 - 06:00',
          notes: 'Solo residentes y autorizados'
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metro M1, M2, M3, M5', 'Trams modernos'],
        ticketPrice: '2€',
        dayPass: '7€',
        notes: 'Excelente red de metro'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 50, rural: 90, highway: 130, unit: 'km/h' },
      fuelAvgPrice: { petrol: 1.89, diesel: 1.76, unit: 'EUR/L' }
    },
    
    tips: [
      'Area C es de pago pero accesible',
      'Metro es excepcional',
      'Tráfico pesado en horas pico',
      'Paga Area C online para evitar multas'
    ],
    
    usefulApps: ['ATM Milano', 'Area C Milano', 'Moovit'],
    weather: { temp: 15, condition: 'Nublado', icon: '☁️' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'paris',
    city: 'Paris',
    country: 'France',
    countryCode: 'FR',
    flag: '🇫🇷',
    coordinates: { lat: 48.8566, lon: 2.3522 },
    timezone: 'Europe/Paris',
    
    severity: 'HIGH',
    
    restrictions: [
      {
        type: 'CRITAIR',
        name: "Crit'Air - Certificat qualité de l'air",
        description: 'Sistema de etiquetas ambientales obligatorio',
        schedule: {
          weekdays: '24/7',
          notes: 'Obligatorio siempre dentro de Paris'
        },
        fines: {
          amount: 68,
          currency: 'EUR',
          notes: 'Sin etiqueta Crit\'Air = multa automática'
        },
        permits: {
          available: true,
          forTourists: true,
          cost: '€3.70',
          requirements: ['Solicitar online antes de viajar', 'Tarda 1-2 semanas en llegar'],
          url: 'https://www.certificat-air.gouv.fr'
        },
        colors: {
          green: 'Eléctricos e hidrógeno',
          purple: 'Híbridos recargables',
          yellow: 'Euro 5-6',
          orange: 'Euro 4',
          red: 'Euro 3',
          grey: 'Euro 2 (prohibido días pico)'
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metro (14 lines)', 'RER', 'Bus'],
        ticketPrice: '2.10€',
        dayPass: '8€ (Mobilis)',
        notes: 'Uno de los mejores sistemas del mundo'
      },
      {
        type: 'BIKE',
        services: ['Vélib (bicicletas públicas)'],
        price: '€3/día',
        notes: '20,000 bicis disponibles'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 30, peripherique: 70, rural: 80, highway: 130, unit: 'km/h' },
      fuelAvgPrice: { petrol: 1.92, diesel: 1.79, unit: 'EUR/L' },
      alcoholLimit: 0.5,
      notes: 'Paris centro ahora 30 km/h máximo'
    },
    
    tips: [
      'Crit\'Air obligatorio, solicitar con anticipación',
      'Aparcar es carísimo (€4-6/hora)',
      'Metro es la mejor opción',
      'Días de contaminación alta = restricciones extra',
      'Périphérique (circunvalación) siempre congestionado'
    ],
    
    usefulApps: ['Citymapper', 'RATP', 'Vélib', 'PayByPhone'],
    weather: { temp: 12, condition: 'Lluvioso', icon: '🌧️' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'madrid',
    city: 'Madrid',
    country: 'Spain',
    countryCode: 'ES',
    flag: '🇪🇸',
    coordinates: { lat: 40.4168, lon: -3.7038 },
    timezone: 'Europe/Madrid',
    
    severity: 'HIGH',
    
    restrictions: [
      {
        type: 'ZBE',
        name: 'Zona de Bajas Emisiones Madrid 360',
        description: 'All inner M-30 area is LEZ',
        schedule: {
          weekdays: '24/7',
          notes: 'Activa todo el año'
        },
        fines: {
          amount: 200,
          currency: 'EUR',
          notes: 'Sin distintivo ambiental DGT'
        },
        permits: {
          available: true,
          forTourists: false,
          requirements: ['Etiqueta DGT ECO o CERO para circular libremente'],
          url: 'https://sede.dgt.gob.es'
        },
        labels: {
          cero: 'Eléctricos/Hidrógeno - Sin restricciones',
          eco: 'Híbridos - Sin restricciones',
          c: 'Gasolina post-2006, Diesel post-2014 - Permitido',
          b: 'Gasolina post-2000, Diesel post-2006 - Restringido',
          none: 'Prohibido en ZBE'
        }
      },
      {
        type: 'PROTOCOL',
        name: 'Protocolo Anti-Contaminación',
        description: 'Additional restrictions on high pollution days',
        notes: 'Nivel 3 = Solo ECO y CERO pueden circular'
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metro (12 lines)', 'Commuter rail', 'EMT buses'],
        ticketPrice: '1.50-2€',
        dayPass: '8.40€ (Zona A)',
        notes: 'Muy completo y eficiente'
      },
      {
        type: 'PARKING',
        name: 'Intercambiadores (Park & Ride)',
        price: '€2-3/día',
        recommendation: 'Park outside and use metro'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 50, m30: 70, rural: 90, highway: 120, unit: 'km/h' },
      fuelAvgPrice: { petrol: 1.65, diesel: 1.52, unit: 'EUR/L' },
      alcoholLimit: 0.5
    },
    
    tips: [
      'Check your DGT sticker before traveling',
      'No sticker = forbidden to enter M-30',
      'Protocol activates with 3+ days of pollution',
      'Regulated parking (SER) widely extended',
      'App MiNT para pagar parking desde móvil'
    ],
    
    usefulApps: ['Cómo llegar (EMT)', 'MiNT (parking)', 'Moovit'],
    weather: { temp: 14, condition: 'Soleado', icon: '☀️' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'barcelona',
    city: 'Barcelona',
    country: 'Spain',
    countryCode: 'ES',
    flag: '🇪🇸',
    coordinates: { lat: 41.3851, lon: 2.1734 },
    timezone: 'Europe/Madrid',
    
    severity: 'HIGH',
    
    restrictions: [
      {
        type: 'ZBE',
        name: 'Zona de Bajas Emisiones Rondas',
        description: 'Inside Barcelona Ring Roads',
        schedule: {
          weekdays: 'Mon-Fri 07:00 - 20:00',
          notes: 'Prohibido circular sin etiqueta ambiental'
        },
        fines: {
          amount: 200,
          currency: 'EUR',
          escalation: 'Hasta €500 en reincidencia'
        },
        permits: {
          forTourists: false,
          requirements: ['Etiqueta ambiental DGT obligatoria']
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metro (8 lines)', 'FGC', 'TMB buses', 'Tram'],
        ticketPrice: '2.55€',
        t10: '11.35€ (10 viajes)',
        notes: 'Sistema integrado muy bueno'
      },
      {
        type: 'BIKE',
        services: ['Bicing (residentes)', 'Lime', 'Bird'],
        notes: 'Ciudad muy bike-friendly'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 50, rondas: 80, highway: 120, unit: 'km/h' },
      fuelAvgPrice: { petrol: 1.67, diesel: 1.54, unit: 'EUR/L' }
    },
    
    tips: [
      'ZBE menos restrictiva que Madrid (solo weekdays)',
      'Very expensive parking downtown (€4-5/hora)',
      'Peripheral neighborhoods better for parking',
      'Metro reaches almost everywhere',
      'Bicing for residents only'
    ],
    
    usefulApps: ['TMB App', 'ApparkB', 'Moovit'],
    weather: { temp: 16, condition: 'Parcialmente nublado', icon: '⛅' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    coordinates: { lat: 51.5074, lon: -0.1278 },
    timezone: 'Europe/London',
    
    severity: 'EXTREME',
    
    restrictions: [
      {
        type: 'CONGESTION',
        name: 'Congestion Charge',
        description: 'Pago obligatorio para entrar al centro',
        schedule: {
          weekdays: 'Mon-Fri 07:00 - 18:00',
          saturday: 'Sáb 12:00 - 18:00',
          sunday: 'Libre'
        },
        fines: {
          amount: 15,
          currency: 'GBP',
          daily: true,
          late: '£17.50 si pagas al día siguiente',
          penalty: '£160 si no pagas'
        },
        permits: {
          available: true,
          cost: '£15/día',
          url: 'https://tfl.gov.uk/modes/driving/congestion-charge'
        }
      },
      {
        type: 'ULEZ',
        name: 'Ultra Low Emission Zone',
        description: 'Cargo adicional por emisiones',
        schedule: {
          weekdays: '24/7'
        },
        fines: {
          amount: 12.50,
          currency: 'GBP',
          daily: true,
          notes: 'Acumulativo con Congestion Charge'
        },
        requirements: 'Gasolina Euro 4+, Diesel Euro 6+'
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Tube (11 lines)', 'Buses (600+ rutas)', 'Overground', 'DLR'],
        ticketPrice: '£2.80 con Oyster',
        dayPass: '£8.10 (Zonas 1-2)',
        notes: 'Sistema más extenso de Europa'
      },
      {
        type: 'PARKING',
        name: 'Park & Ride periféricos',
        recommendation: 'Aparcar fuera y usar Tube'
      }
    ],
    
    generalInfo: {
      drivingSide: 'left', // ¡IMPORTANTE!
      speedLimits: { urban: 30, rural: 60, highway: 70, unit: 'mph' },
      fuelAvgPrice: { petrol: 1.45, diesel: 1.52, unit: 'GBP/L' },
      alcoholLimit: 0.8,
      notes: '¡Se conduce por la izquierda!'
    },
    
    tips: [
      '¡CONDUCCIÓN POR LA IZQUIERDA!',
      'Congestion + ULEZ = £27.50/día',
      'Pagar online antes de medianoche',
      'Oyster card es esencial',
      'Parking público £4-6/hora',
      'Auto NO recomendado para turistas'
    ],
    
    usefulApps: ['Citymapper', 'TfL Go', 'JustPark', 'RingGo'],
    weather: { temp: 10, condition: 'Lluvioso', icon: '🌧️' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'berlin',
    city: 'Berlín',
    country: 'Alemania',
    countryCode: 'DE',
    flag: '🇩🇪',
    coordinates: { lat: 52.5200, lon: 13.4050 },
    timezone: 'Europe/Berlin',
    
    severity: 'MEDIUM',
    
    restrictions: [
      {
        type: 'UMWELTZONE',
        name: 'Umweltzone (Zona Ambiental)',
        description: 'Pegatina verde obligatoria',
        schedule: {
          weekdays: '24/7'
        },
        fines: {
          amount: 100,
          currency: 'EUR',
          notes: 'Sin pegatina = multa'
        },
        permits: {
          available: true,
          forTourists: true,
          cost: '€5-15',
          types: ['Verde (permitida)', 'Amarilla (prohibida)', 'Roja (prohibida)'],
          where: 'Gasolineras, online, TÜV'
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['U-Bahn', 'S-Bahn', 'Tram', 'Bus'],
        ticketPrice: '3€',
        dayPass: '9€ (AB zones)',
        notes: 'Muy eficiente y puntual'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 50, rural: 100, autobahn: 'Sin límite (recomendado 130)', unit: 'km/h' },
      fuelAvgPrice: { petrol: 1.78, diesel: 1.65, unit: 'EUR/L' }
    },
    
    tips: [
      'Pegatina verde fácil de obtener',
      'Autobahn sin límite fuera de ciudad',
      'Berlin es muy ciclista-friendly',
      'Parking regulado pero no imposible',
      'Transporte público excelente'
    ],
    
    usefulApps: ['BVG Fahrinfo', 'FREE NOW (taxi)', 'Park Now'],
    weather: { temp: 8, condition: 'Nublado', icon: '☁️' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'munich',
    city: 'Múnich',
    country: 'Alemania',
    countryCode: 'DE',
    flag: '🇩🇪',
    coordinates: { lat: 48.1351, lon: 11.5820 },
    timezone: 'Europe/Berlin',
    
    severity: 'MEDIUM',
    
    restrictions: [
      {
        type: 'UMWELTZONE',
        name: 'Zona Ambiental',
        description: 'Pegatina verde obligatoria',
        schedule: { weekdays: '24/7' },
        fines: { amount: 80, currency: 'EUR' },
        permits: {
          available: true,
          cost: '€5-15',
          types: ['Verde obligatoria']
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['U-Bahn', 'S-Bahn', 'Tram'],
        ticketPrice: '3.70€',
        dayPass: '9€'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 50, rural: 100, autobahn: 'Recomendado 130', unit: 'km/h' },
      fuelAvgPrice: { petrol: 1.80, diesel: 1.67, unit: 'EUR/L' }
    },
    
    tips: [
      'Muy organizado y limpio',
      'Parking caro pero disponible',
      'Durante Oktoberfest = caos total',
      'Autobahn sin límite cerca'
    ],
    
    usefulApps: ['MVG Fahrinfo', 'Park Now'],
    weather: { temp: 9, condition: 'Frío', icon: '🌡️' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'amsterdam',
    city: 'Amsterdam',
    country: 'Netherlands',
    countryCode: 'NL',
    flag: '🇳🇱',
    coordinates: { lat: 52.3676, lon: 4.9041 },
    timezone: 'Europe/Amsterdam',
    
    severity: 'HIGH',
    
    restrictions: [
      {
        type: 'DIESEL_BAN',
        name: 'Prohibición Diesel',
        description: 'Diesel antiguo prohibido progresivamente',
        schedule: { weekdays: '24/7' },
        fines: { amount: 95, currency: 'EUR' },
        notes: 'Diesel pre-2005 prohibido desde 2025'
      }
    ],
    
    alternatives: [
      {
        type: 'BIKE',
        recommendation: 'BICICLETA - La mejor opción',
        services: ['Alquiler bikes en todas partes'],
        price: '€10-15/día',
        notes: '¡Capital mundial de la bicicleta!'
      },
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Tram', 'Metro', 'Bus'],
        ticketPrice: '3.40€',
        dayPass: '9€'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 50, rural: 80, highway: 100, unit: 'km/h' },
      fuelAvgPrice: { petrol: 1.95, diesel: 1.75, unit: 'EUR/L' }
    },
    
    tips: [
      '¡USA BICICLETA! Es lo más fácil',
      'Aparcar casi imposible y carísimo',
      'Cuidado con ciclistas (tienen prioridad)',
      'Centro muy peatonal',
      'Auto solo útil fuera de ciudad'
    ],
    
    usefulApps: ['9292 (transporte)', 'Swapfiets (bicis)'],
    weather: { temp: 11, condition: 'Lluvioso', icon: '🌧️' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'brussels',
    city: 'Brussels',
    country: 'Belgium',
    countryCode: 'BE',
    flag: '🇧🇪',
    coordinates: { lat: 50.8503, lon: 4.3517 },
    timezone: 'Europe/Brussels',
    
    severity: 'MEDIUM',
    
    restrictions: [
      {
        type: 'LEZ',
        name: 'Low Emission Zone',
        description: 'Restricciones según emisiones',
        schedule: { weekdays: '24/7' },
        fines: { amount: 350, currency: 'EUR' },
        permits: {
          available: true,
          forTourists: true,
          requirements: ['Diesel Euro 4+', 'Gasolina Euro 2+'],
          register: 'Obligatorio registrar online antes'
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metro', 'Tram', 'Bus STIB'],
        ticketPrice: '2.50€',
        dayPass: '8€'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 30, rural: 90, highway: 120, unit: 'km/h' },
      fuelAvgPrice: { petrol: 1.72, diesel: 1.60, unit: 'EUR/L' }
    },
    
    tips: [
      'Registrar vehículo online ANTES de viajar',
      'Centro 30 km/h desde 2021',
      'Parking caro',
      'Buen transporte público'
    ],
    
    usefulApps: ['STIB/MIVB', '4411 (parking)'],
    weather: { temp: 10, condition: 'Nublado', icon: '☁️' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'vienna',
    city: 'Viena',
    country: 'Austria',
    countryCode: 'AT',
    flag: '🇦🇹',
    coordinates: { lat: 48.2082, lon: 16.3738 },
    timezone: 'Europe/Vienna',
    
    severity: 'LOW',
    
    restrictions: [
      {
        type: 'VIGNETTE',
        name: 'Viñeta de Autopista',
        description: 'Obligatoria para autopistas',
        fines: { amount: 120, currency: 'EUR' },
        permits: {
          available: true,
          cost: '€9.90 (10 días)',
          where: 'Gasolineras, online'
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['U-Bahn', 'Tram', 'Bus'],
        ticketPrice: '2.40€',
        dayPass: '8€',
        notes: 'Uno de los mejores de Europa'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 50, rural: 100, highway: 130, unit: 'km/h' },
      fuelAvgPrice: { petrol: 1.68, diesel: 1.56, unit: 'EUR/L' }
    },
    
    tips: [
      'Ciudad muy ordenada',
      'Transporte público excelente',
      'Viñeta obligatoria en autopistas',
      'Centro histórico peatonal'
    ],
    
    usefulApps: ['Wiener Linien', 'Park & Joy'],
    weather: { temp: 7, condition: 'Frío', icon: '❄️' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'lisbon',
    city: 'Lisbon',
    country: 'Portugal',
    countryCode: 'PT',
    flag: '🇵🇹',
    coordinates: { lat: 38.7223, lon: -9.1393 },
    timezone: 'Europe/Lisbon',
    
    severity: 'LOW',
    
    restrictions: [
      {
        type: 'ZER',
        name: 'Zona de Emissões Reduzidas',
        description: 'Restricciones en días de contaminación',
        notes: 'No siempre activa, solo episodios contaminación'
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metro', 'Tram', 'Elevadores', 'Bus'],
        ticketPrice: '1.50€',
        dayPass: '6.40€'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 50, rural: 90, highway: 120, unit: 'km/h' },
      fuelAvgPrice: { petrol: 1.75, diesel: 1.58, unit: 'EUR/L' }
    },
    
    tips: [
      'Cuestas muy empinadas',
      'Aparcar en colinas = pesadilla',
      'Tram 28 icónico',
      'Driving relativamente relajado'
    ],
    
    usefulApps: ['Moovit', 'Via Verde (peajes)'],
    weather: { temp: 16, condition: 'Soleado', icon: '☀️' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'mexico-city',
    city: 'Ciudad de México',
    country: 'México',
    countryCode: 'MX',
    flag: '🇲🇽',
    coordinates: { lat: 19.4326, lon: -99.1332 },
    timezone: 'America/Mexico_City',
    
    severity: 'HIGH',
    
    restrictions: [
      {
        type: 'HOY_NO_CIRCULA',
        name: 'Hoy No Circula',
        description: 'Restricción por último dígito de placa',
        schedule: {
          notes: 'Varía según dígito y día de la semana'
        },
        fines: {
          amount: 1641,
          currency: 'MXN',
          notes: '~€75-80'
        },
        rules: {
          '5-6': 'Lunes',
          '7-8': 'Martes',
          '3-4': 'Miércoles',
          '1-2': 'Jueves',
          '9-0': 'Viernes',
          sábados: 'Placas terminadas en número par/impar alternado'
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metro (12 lines)', 'Metrobús', 'RTP'],
        ticketPrice: '5-7 MXN (€0.30)',
        notes: 'Muy barato pero congestionado'
      },
      {
        type: 'RIDE_HAILING',
        services: ['Uber', 'Didi', 'Cabify'],
        notes: 'Muy populares y económicos'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 50, viaducto: 80, autopista: 110, unit: 'km/h' },
      fuelAvgPrice: { petrol: 23, diesel: 25, unit: 'MXN/L' },
      alcoholLimit: 0.4
    },
    
    tips: [
      'Verifica tu engomado antes de circular',
      'Tráfico puede ser terrible',
      'Uber es económico y seguro',
      'Evita auto si es posible',
      'Metro muy barato pero lleno'
    ],
    
    usefulApps: ['Waze (tráfico)', 'Moovit', 'Verificación 5 y 6'],
    weather: { temp: 20, condition: 'Soleado', icon: '☀️' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    countryCode: 'SG',
    flag: '🇸🇬',
    coordinates: { lat: 1.3521, lon: 103.8198 },
    timezone: 'Asia/Singapore',
    
    severity: 'HIGH',
    
    restrictions: [
      {
        type: 'ERP',
        name: 'Electronic Road Pricing',
        description: 'Peajes electrónicos dinámicos',
        schedule: {
          weekdays: '07:30 - 09:30 (entrada) y 18:00 - 20:00 (salida)',
          notes: 'Precios varían según congestión'
        },
        fines: {
          amount: 70,
          currency: 'SGD',
          notes: 'Sin IU (In-vehicle Unit) = multa'
        },
        permits: {
          available: true,
          requirements: ['IU device en autos de alquiler']
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['MRT (muy moderno)', 'Buses'],
        ticketPrice: '1.50-2.50 SGD',
        notes: 'Uno de los mejores del mundo'
      },
      {
        type: 'TAXI',
        services: ['Grab (app)', 'Gojek'],
        notes: 'Muy eficiente'
      }
    ],
    
    generalInfo: {
      drivingSide: 'left',
      speedLimits: { urban: 50, expressway: 90, unit: 'km/h' },
      fuelAvgPrice: { petrol: 2.80, diesel: 2.20, unit: 'SGD/L' },
      alcoholLimit: 0.8,
      notes: 'Multas muy altas por todo'
    },
    
    tips: [
      'Auto de alquiler incluye IU device',
      'Comprar auto es carísimo (COE)',
      'MRT es perfecto',
      'Multas por exceso son severas',
      'Ciudad muy pequeña y conectada'
    ],
    
    usefulApps: ['MyTransport', 'Grab', 'Parking.sg'],
    weather: { temp: 30, condition: 'Caluroso y húmedo', icon: '🌡️' },
    lastUpdated: '2025-11-15'
  },

  // ===== USA CITIES =====
  {
    id: 'new-york',
    city: 'Nueva York',
    country: 'Estados Unidos',
    countryCode: 'US',
    flag: '🇺🇸',
    coordinates: { lat: 40.7128, lon: -74.0060 },
    timezone: 'America/New_York',
    
    severity: 'HIGH',
    
    restrictions: [
      {
        type: 'CONGESTION_PRICING',
        name: 'Central Business District Toll',
        description: 'Peaje de congestión en Manhattan (2024)',
        schedule: {
          weekdays: 'Mon-Fri 05:00 - 21:00',
          weekend: 'Fines de semana 09:00 - 21:00'
        },
        fines: {
          amount: 15,
          currency: 'USD',
          daily: true,
          notes: 'Al sur de calle 60 en Manhattan'
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Subway (24/7)', 'Bus MTA', 'PATH', 'Ferry'],
        ticketPrice: '$2.90',
        weekPass: '$34',
        notes: 'Sistema más grande de USA'
      },
      {
        type: 'PARKING',
        name: 'Garages periféricos',
        price: '$30-60/día en Manhattan',
        recommendation: 'Evitar auto en Manhattan'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 25, highway: 55, unit: 'mph' },
      fuelAvgPrice: { petrol: 3.50, diesel: 4.20, unit: 'USD/gal' },
      alcoholLimit: 0.08
    },
    
    tips: [
      'Manhattan es MUY difícil para conducir',
      'Parking carísimo ($50-70/día)',
      'Subway funciona 24/7',
      'Tráfico intenso siempre',
      'Uber/Lyft muy accesibles',
      'Auto solo útil para salir de la ciudad'
    ],
    
    usefulApps: ['Citymapper', 'MTA', 'SpotHero', 'Waze'],
    weather: { temp: 12, condition: 'Frío', icon: '❄️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'los-angeles',
    city: 'Los Ángeles',
    country: 'Estados Unidos',
    countryCode: 'US',
    flag: '🇺🇸',
    coordinates: { lat: 34.0522, lon: -118.2437 },
    timezone: 'America/Los_Angeles',
    
    severity: 'MEDIUM',
    
    restrictions: [
      {
        type: 'HOV_LANES',
        name: 'Carriles para vehículos compartidos',
        description: 'Carriles HOV/Carpool en autopistas',
        schedule: {
          weekdays: 'Mon-Fri 05:00 - 09:00 y 15:00 - 19:00',
          notes: 'Mínimo 2-3 ocupantes según carril'
        },
        fines: {
          amount: 490,
          currency: 'USD',
          notes: 'Multa por uso indebido de carril HOV'
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metro Rail', 'Metro Bus'],
        ticketPrice: '$1.75',
        dayPass: '$7',
        notes: 'Limitado comparado con otras ciudades'
      },
      {
        type: 'RIDE_SHARE',
        services: ['Uber', 'Lyft'],
        notes: 'Muy populares, tráfico pesado'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 25, freeway: 65, unit: 'mph' },
      fuelAvgPrice: { petrol: 4.50, diesel: 5.00, unit: 'USD/gal' },
      alcoholLimit: 0.08,
      notes: 'Ciudad diseñada para autos'
    },
    
    tips: [
      'Auto es casi necesario en LA',
      'Tráfico terrible 07:00-10:00 y 16:00-19:00',
      'Autopistas gratis (excepto algunas Express Lanes)',
      'Parking relativamente fácil vs NYC',
      'Waze es esencial para evitar tráfico',
      'Distancias muy largas entre puntos'
    ],
    
    usefulApps: ['Waze', 'SpotHero', 'Metro LA', 'FasTrak'],
    weather: { temp: 22, condition: 'Soleado', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'las-vegas',
    city: 'Las Vegas',
    country: 'Estados Unidos',
    countryCode: 'US',
    flag: '🇺🇸',
    coordinates: { lat: 36.1699, lon: -115.1398 },
    timezone: 'America/Los_Angeles',
    
    severity: 'LOW',
    
    restrictions: [
      {
        type: 'STRIP_RESTRICTIONS',
        name: 'Restricciones en el Strip',
        description: 'Tráfico lento, estacionamiento regulado',
        notes: 'Strip muy congestionado viernes-domingo'
      }
    ],
    
    alternatives: [
      {
        type: 'MONORAIL',
        options: ['Las Vegas Monorail'],
        ticketPrice: '$5',
        dayPass: '$15',
        notes: 'Conecta hoteles principales del Strip'
      },
      {
        type: 'WALKING',
        recommendation: 'Caminar en el Strip',
        notes: 'Distancias engañan, parece cerca pero no lo es'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 25, highway: 75, unit: 'mph' },
      fuelAvgPrice: { petrol: 3.80, diesel: 4.10, unit: 'USD/gal' },
      alcoholLimit: 0.08
    },
    
    tips: [
      'Parking gratis en casi todos los casinos',
      'Strip muy lento en coche (caminar es mejor)',
      'Uber/Lyft baratos',
      'Auto útil para ir al Gran Cañón',
      'Calor extremo en verano (45°C)',
      'No beber alcohol abierto en el auto'
    ],
    
    usefulApps: ['Waze', 'Uber', 'RTC (bus)'],
    weather: { temp: 28, condition: 'Caluroso', icon: '🌡️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'chicago',
    city: 'Chicago',
    country: 'Estados Unidos',
    countryCode: 'US',
    flag: '🇺🇸',
    coordinates: { lat: 41.8781, lon: -87.6298 },
    timezone: 'America/Chicago',
    
    severity: 'MEDIUM',
    
    restrictions: [
      {
        type: 'PARKING',
        name: 'Parking restrictions estrictas',
        description: 'Regulación de parking muy estricta',
        fines: {
          amount: 100,
          currency: 'USD',
          notes: 'Multas + grúa común'
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['CTA L Train', 'CTA Bus', 'Metra'],
        ticketPrice: '$2.50',
        dayPass: '$5',
        notes: 'Excelente sistema de transporte'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 30, highway: 55, unit: 'mph' },
      fuelAvgPrice: { petrol: 3.60, diesel: 4.00, unit: 'USD/gal' },
      alcoholLimit: 0.08
    },
    
    tips: [
      'Inviernos brutales (-20°C común)',
      'Parking difícil en Loop',
      'L Train muy eficiente',
      'Traffic pesado en rush hour',
      'Grúas muy activas (cuidado con señales)'
    ],
    
    usefulApps: ['Ventra', 'SpotHero', 'Transit'],
    weather: { temp: 5, condition: 'Frío', icon: '❄️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'miami',
    city: 'Miami',
    country: 'Estados Unidos',
    countryCode: 'US',
    flag: '🇺🇸',
    coordinates: { lat: 25.7617, lon: -80.1918 },
    timezone: 'America/New_York',
    
    severity: 'LOW',
    
    restrictions: [
      {
        type: 'BEACH_RESTRICTIONS',
        name: 'Restricciones en zonas de playa',
        description: 'Parking limitado en South Beach',
        notes: 'Fines de semana muy congestionado'
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metrorail', 'Metromover (gratis en Downtown)', 'Metrobus'],
        ticketPrice: '$2.25',
        dayPass: '$5.65'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 30, highway: 70, unit: 'mph' },
      fuelAvgPrice: { petrol: 3.40, diesel: 3.90, unit: 'USD/gal' },
      alcoholLimit: 0.08
    },
    
    tips: [
      'Auto recomendado (ciudad extensa)',
      'South Beach parking caro ($3-5/hora)',
      'Tráfico moderado comparado con NYC/LA',
      'Keys accesibles en auto',
      'Conductor agresivo común',
      'Free trolleys en varias zonas'
    ],
    
    usefulApps: ['Waze', 'Miami Parking Authority', 'Freebee (shuttle gratis)'],
    weather: { temp: 26, condition: 'Caluroso y húmedo', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'orlando',
    city: 'Orlando',
    country: 'Estados Unidos',
    countryCode: 'US',
    flag: '🇺🇸',
    coordinates: { lat: 28.5383, lon: -81.3792 },
    timezone: 'America/New_York',
    
    severity: 'LOW',
    
    restrictions: [
      {
        type: 'THEME_PARK_TRAFFIC',
        name: 'Congestión en zonas de parques',
        description: 'I-4 muy congestionada hacia parques',
        notes: 'Peor en temporada alta y fines de semana'
      }
    ],
    
    alternatives: [
      {
        type: 'SHUTTLE',
        options: ['Shuttles de hoteles', 'Lynx bus'],
        notes: 'Muchos hoteles ofrecen shuttle a parques'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 30, highway: 70, unit: 'mph' },
      fuelAvgPrice: { petrol: 3.20, diesel: 3.70, unit: 'USD/gal' },
      alcoholLimit: 0.08
    },
    
    tips: [
      'Auto casi obligatorio',
      'Parking en parques: $25-30/día',
      'I-4 es pesadilla en rush hour',
      'Distancias largas entre atracciones',
      'Universal/Disney tienen parking propio',
      'Uber/Lyft útiles entre parques'
    ],
    
    usefulApps: ['Waze', 'My Disney Experience', 'Universal Orlando'],
    weather: { temp: 24, condition: 'Caluroso', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  // ===== LATIN AMERICA =====
  {
    id: 'buenos-aires',
    city: 'Buenos Aires',
    country: 'Argentina',
    countryCode: 'AR',
    flag: '🇦🇷',
    coordinates: { lat: -34.6037, lon: -58.3816 },
    timezone: 'America/Argentina/Buenos_Aires',
    
    severity: 'MEDIUM',
    
    restrictions: [
      {
        type: 'PARKING',
        name: 'Estacionamiento regulado',
        description: 'Parking medido en zonas céntricas',
        fines: {
          amount: 5000,
          currency: 'ARS',
          notes: '~$5 USD'
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Subte (6 lines)', 'Colectivos (150+ lines)', 'Tren'],
        ticketPrice: '125 ARS (~$0.15)',
        notes: 'Sistema extenso y muy barato'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 40, avenidas: 60, autopista: 130, unit: 'km/h' },
      fuelAvgPrice: { petrol: 800, diesel: 900, unit: 'ARS/L' },
      alcoholLimit: 0.5
    },
    
    tips: [
      'Tráfico caótico pero manejable',
      'Subte muy eficiente y barato',
      'Cuidado con motos (circulan entre autos)',
      'Estacionar en la calle relativamente fácil',
      'Apps de parking obligatorias en zonas reguladas',
      'Conductor porteño es agresivo'
    ],
    
    usefulApps: ['BA Móvil', 'Cómo Llego', 'Waze'],
    weather: { temp: 20, condition: 'Templado', icon: '⛅' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'bogota',
    city: 'Bogotá',
    country: 'Colombia',
    countryCode: 'CO',
    flag: '🇨🇴',
    coordinates: { lat: 4.7110, lon: -74.0721 },
    timezone: 'America/Bogota',
    
    severity: 'HIGH',
    
    restrictions: [
      {
        type: 'PICO_Y_PLACA',
        name: 'Pico y Placa',
        description: 'Restricción por último dígito de placa',
        schedule: {
          weekdays: 'Mon-Fri 06:00 - 08:30 y 15:00 - 19:30',
          notes: 'Varía según último dígito'
        },
        fines: {
          amount: 468000,
          currency: 'COP',
          notes: '~$120 USD'
        },
        rules: {
          '0-1': 'Lunes',
          '2-3': 'Martes',
          '4-5': 'Miércoles',
          '6-7': 'Jueves',
          '8-9': 'Viernes'
        }
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['TransMilenio (BRT)', 'SITP buses'],
        ticketPrice: '3100 COP (~$0.80)',
        notes: 'TransMilenio eficiente pero lleno'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 50, autopista: 80, unit: 'km/h' },
      fuelAvgPrice: { petrol: 14000, diesel: 13500, unit: 'COP/gal' },
      alcoholLimit: 0.0,
      notes: 'Ley seca: 0 tolerancia alcohol'
    },
    
    tips: [
      'Pico y Placa ESTRICTO (verifica antes)',
      'Tráfico terrible en horas pico',
      'TransMilenio útil pero lleno',
      'Uber/Didi muy usados',
      'Altura (2600m) afecta rendimiento del auto',
      'Ciclovía dominical (cierre de calles)'
    ],
    
    usefulApps: ['Waze', 'Moovit', 'Tappsi', 'Mi Movilidad Bogotá'],
    weather: { temp: 14, condition: 'Fresco', icon: '🌧️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'lima',
    city: 'Lima',
    country: 'Perú',
    countryCode: 'PE',
    flag: '🇵🇪',
    coordinates: { lat: -12.0464, lon: -77.0428 },
    timezone: 'America/Lima',
    
    severity: 'MEDIUM',
    
    restrictions: [
      {
        type: 'PICO_Y_PLACA',
        name: 'Restricción vehicular',
        description: 'Solo en algunas zonas y horarios',
        notes: 'Menos estricto que Bogotá'
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metropolitano (BRT)', 'Línea 1 Metro', 'Combis/Buses'],
        ticketPrice: 'S/ 2.50 (~$0.70)',
        notes: 'Sistema en desarrollo'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 60, via_expresa: 80, panamericana: 100, unit: 'km/h' },
      fuelAvgPrice: { petrol: 15, diesel: 13, unit: 'PEN/gal' },
      alcoholLimit: 0.5
    },
    
    tips: [
      'Tráfico caótico, conductor agresivo',
      'Combis (minibuses) muy impredecibles',
      'Uber/Cabify seguros y económicos',
      'Parking en centros comerciales seguro',
      'Evitar conducir de noche en zonas no conocidas',
      'Niebla (garúa) común mayo-octubre'
    ],
    
    usefulApps: ['Waze', 'Moovit', 'Beat (taxi)'],
    weather: { temp: 22, condition: 'Nublado', icon: '☁️' },
    lastUpdated: '2025-11-20'
  },

  {
    id: 'rio-de-janeiro',
    city: 'Río de Janeiro',
    country: 'Brasil',
    countryCode: 'BR',
    flag: '🇧🇷',
    coordinates: { lat: -22.9068, lon: -43.1729 },
    timezone: 'America/Sao_Paulo',
    
    severity: 'LOW',
    
    restrictions: [
      {
        type: 'RODIZIO',
        name: 'Rodízio (en algunas zonas)',
        description: 'Restricción por placa en zonas específicas',
        notes: 'Menos común que en São Paulo'
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metro (3 lines)', 'BRT', 'Bus convencional'],
        ticketPrice: 'R$ 4.70 (~$1)',
        notes: 'Metro limitado pero eficiente'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 60, via_expressa: 90, unit: 'km/h' },
      fuelAvgPrice: { petrol: 6.20, diesel: 5.80, unit: 'BRL/L' },
      alcoholLimit: 0.0,
      notes: 'Ley seca: 0 tolerancia'
    },
    
    tips: [
      'Tráfico pesado pero menos caótico que CDMX',
      'Túneles y vías costeras congestionadas',
      'Auto útil para playas alejadas',
      'Uber muy usado y confiable',
      'Cuidado en favelas (no entrar en auto)',
      'Parking de playa R$ 20-40',
      'Conductor carioca más relajado'
    ],
    
    usefulApps: ['Waze', '99 (taxi app)', 'Moovit'],
    weather: { temp: 28, condition: 'Caluroso', icon: '☀️' },
    lastUpdated: '2025-11-20'
  },

  // ===== ASIA =====
  {
    id: 'tokyo',
    city: 'Tokyo',
    country: 'Japan',
    countryCode: 'JP',
    flag: '🇯🇵',
    coordinates: { lat: 35.6762, lon: 139.6503 },
    timezone: 'Asia/Tokyo',
    
    severity: 'MEDIUM',
    
    restrictions: [
      {
        type: 'PARKING',
        name: 'Certificado de estacionamiento',
        description: 'Necesitas demostrar que tienes dónde aparcar para comprar auto',
        notes: 'Parking escaso y carísimo'
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['JR Lines', 'Metro (13 lines)', 'Trenes privados'],
        ticketPrice: '¥170-320 (~$1-2)',
        dayPass: '¥600-900',
        notes: 'Mejor sistema de transporte del mundo'
      }
    ],
    
    generalInfo: {
      drivingSide: 'left',
      speedLimits: { urban: 40, expressway: 100, unit: 'km/h' },
      fuelAvgPrice: { petrol: 170, diesel: 150, unit: 'JPY/L' },
      alcoholLimit: 0.0,
      notes: 'Tolerancia CERO al alcohol'
    },
    
    tips: [
      'Auto NO recomendado en Tokyo',
      'Transporte público perfecto',
      'Parking ¥300-500/hora (¥3000-5000/día)',
      'Autopistas de pago caras',
      'GPS en japonés complicado',
      'Auto útil para áreas rurales',
      'Multas por exceso muy altas'
    ],
    
    usefulApps: ['Google Maps Japan', 'Navitime', 'Japan Transit Planner'],
    weather: { temp: 15, condition: 'Templado', icon: '⛅' },
    lastUpdated: '2025-11-20'
  }
];

// Función helper para obtener ciudad por ID
export const getCityById = (id) => {
  return drivingRestrictions.find(city => city.id === id);
};

// Función helper para buscar ciudades
export const searchCities = (query) => {
  const lowerQuery = query.toLowerCase();
  return drivingRestrictions.filter(city => 
    city.city.toLowerCase().includes(lowerQuery) ||
    city.country.toLowerCase().includes(lowerQuery)
  );
};

// Función helper para obtener ciudades por severidad
export const getCitiesBySeverity = (severity) => {
  return drivingRestrictions.filter(city => city.severity === severity);
};
