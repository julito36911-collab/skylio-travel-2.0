// Datos demo de restricciones de tráfico en 15 ciudades críticas
// En producción, estos datos vendrán de APIs y scraping automatizado

export const drivingRestrictions = [
  {
    id: 'roma',
    city: 'Roma',
    country: 'Italia',
    countryCode: 'IT',
    flag: '🇮🇹',
    coordinates: { lat: 41.9028, lon: 12.4964 },
    timezone: 'Europe/Rome',
    
    severity: 'EXTREME', // LOW, MEDIUM, HIGH, EXTREME
    
    restrictions: [
      {
        type: 'ZTL',
        name: 'Zona a Traffico Limitato',
        description: 'Centro histórico cerrado a casi todo el tráfico',
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
      'El tráfico es caótico, evita auto si es posible',
      'Aparcar en el centro es casi imposible',
      'Scooters son la mejor opción local',
      'Las multas ZTL llegan 6-12 meses después',
      'Las cámaras no avisan, solo multan'
    ],
    
    usefulApps: ['Moovit', 'Rome2Rio', 'ParkMan', 'Citymapper'],
    
    weather: { temp: 18, condition: 'Soleado', icon: '☀️' }, // Demo
    
    lastUpdated: '2025-11-15'
  },

  {
    id: 'florencia',
    city: 'Florencia',
    country: 'Italia',
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
        options: ['Tranvía T1, T2', 'Bus ATAF líneas principales'],
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
      'ZTL más estricta que Roma',
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
    city: 'Milán',
    country: 'Italia',
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
        options: ['Metro M1, M2, M3, M5', 'Tranvías modernos'],
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
    city: 'París',
    country: 'Francia',
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
          notes: 'Obligatorio siempre dentro de París'
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
        options: ['Metro (14 líneas)', 'RER', 'Bus'],
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
      notes: 'París centro ahora 30 km/h máximo'
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
    country: 'España',
    countryCode: 'ES',
    flag: '🇪🇸',
    coordinates: { lat: 40.4168, lon: -3.7038 },
    timezone: 'Europe/Madrid',
    
    severity: 'HIGH',
    
    restrictions: [
      {
        type: 'ZBE',
        name: 'Zona de Bajas Emisiones Madrid 360',
        description: 'Toda la zona interior M-30 es ZBE',
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
        description: 'Restricciones adicionales en días de alta contaminación',
        notes: 'Nivel 3 = Solo ECO y CERO pueden circular'
      }
    ],
    
    alternatives: [
      {
        type: 'PUBLIC_TRANSPORT',
        options: ['Metro (12 líneas)', 'Cercanías', 'EMT buses'],
        ticketPrice: '1.50-2€',
        dayPass: '8.40€ (Zona A)',
        notes: 'Muy completo y eficiente'
      },
      {
        type: 'PARKING',
        name: 'Intercambiadores (Park & Ride)',
        price: '€2-3/día',
        recommendation: 'Aparcar fuera y usar metro'
      }
    ],
    
    generalInfo: {
      drivingSide: 'right',
      speedLimits: { urban: 50, m30: 70, rural: 90, highway: 120, unit: 'km/h' },
      fuelAvgPrice: { petrol: 1.65, diesel: 1.52, unit: 'EUR/L' },
      alcoholLimit: 0.5
    },
    
    tips: [
      'Verifica tu etiqueta DGT antes de viajar',
      'Sin etiqueta = prohibido entrar a M-30',
      'Protocolo se activa con 3+ días contaminación',
      'Parking regulado (SER) muy extendido',
      'App MiNT para pagar parking desde móvil'
    ],
    
    usefulApps: ['Cómo llegar (EMT)', 'MiNT (parking)', 'Moovit'],
    weather: { temp: 14, condition: 'Soleado', icon: '☀️' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'barcelona',
    city: 'Barcelona',
    country: 'España',
    countryCode: 'ES',
    flag: '🇪🇸',
    coordinates: { lat: 41.3851, lon: 2.1734 },
    timezone: 'Europe/Madrid',
    
    severity: 'HIGH',
    
    restrictions: [
      {
        type: 'ZBE',
        name: 'Zona de Bajas Emisiones Rondas',
        description: 'Interior de las Rondas de Barcelona',
        schedule: {
          weekdays: 'Lun-Vie 07:00 - 20:00',
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
        options: ['Metro (8 líneas)', 'FGC', 'TMB buses', 'Tranvía'],
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
      'ZBE menos restrictiva que Madrid (solo días laborables)',
      'Parking carísimo en centro (€4-5/hora)',
      'Barrios periféricos mejor para aparcar',
      'Metro llega a casi todo',
      'Bicing solo para residentes'
    ],
    
    usefulApps: ['TMB App', 'ApparkB', 'Moovit'],
    weather: { temp: 16, condition: 'Parcialmente nublado', icon: '⛅' },
    lastUpdated: '2025-11-15'
  },

  {
    id: 'london',
    city: 'Londres',
    country: 'Reino Unido',
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
          weekdays: 'Lun-Vie 07:00 - 18:00',
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
        options: ['Tube (11 líneas)', 'Buses (600+ rutas)', 'Overground', 'DLR'],
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
        options: ['U-Bahn', 'S-Bahn', 'Tranvía', 'Bus'],
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
        options: ['U-Bahn', 'S-Bahn', 'Tranvía'],
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
    city: 'Ámsterdam',
    country: 'Países Bajos',
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
        options: ['Tranvía', 'Metro', 'Bus'],
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
    city: 'Bruselas',
    country: 'Bélgica',
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
        options: ['Metro', 'Tranvía', 'Bus STIB'],
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
        options: ['U-Bahn', 'Tranvía', 'Bus'],
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
    city: 'Lisboa',
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
        options: ['Metro', 'Tranvía', 'Elevadores', 'Bus'],
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
      'Tranvía 28 icónico',
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
        options: ['Metro (12 líneas)', 'Metrobús', 'RTP'],
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
    city: 'Singapur',
    country: 'Singapur',
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
