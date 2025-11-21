import { Plane, Hotel, Car, Wifi, Map, Anchor, Shield, Briefcase, Smartphone, Package } from 'lucide-react';

export const partners = [
  // --- HERO: GIGANTES ---
  {
    id: 'aviasales',
    name: 'aviasales',
    category: 'Vuelos',
    url: 'https://aviasales.tpx.lt/iFrxPI9T',
    widgetSrc: 'https://tpemb.com/content?currency=usd&trs=474187&shmarker=670634&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%2332a8dd&color_button=%2300A991&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&no_labels=&plain=false&promo_id=7879&campaign_id=100',
    icon: Plane,
    color: 'text-blue-400',
    type: 'widget'
  },

  // --- BUSCADORES NATIVOS & PREMIUM ---
  {
    id: 'expedia',
    name: 'expedia',
    category: 'Paquetes',
    trackingUrl: 'https://www.jdoqocy.com/click-101526697-14581765',
    searchBaseUrl: 'https://www.expedia.es/Packages-Search',
    icon: Package,
    color: 'text-yellow-400',
    type: 'search_expedia'
  },
  {
    id: 'searadar',
    name: 'searadar',
    category: 'Yates y Lujo',
    url: 'https://searadar.tpx.lt/Ji5JvebN',
    icon: Anchor,
    color: 'text-amber-400',
    type: 'link'
  },
  {
    id: 'hotels_com',
    name: 'hotels_com',
    category: 'Hoteles',
    trackingUrl: 'https://www.jdoqocy.com/click-101526697-13828058',
    icon: Hotel,
    color: 'text-red-400',
    type: 'search_hotels'
  },

  // --- MOVILIDAD ---
  { 
    id: 'economybookings',
    name: 'economybookings',
    category: 'Auto',
    url: 'https://economybookings.tpx.lt/6UI23Iqt',
    widgetSrc: 'https://tpemb.com/content?trs=474187&shmarker=670634&locale=en&powered_by=true&border_radius=0&plain=false&show_logo=true&color_background=%23ffca28&color_button=%2300A991&color_text=%23000000&color_input_text=%23000000&color_button_text=%23ffffff&promo_id=4480&campaign_id=10',
    icon: Car,
    type: 'widget'
  },
  { id: 'localrent', name: 'localrent', category: 'Local', url: 'https://localrent.tpx.lt/Bfkekclt', icon: Car, type: 'link' },
  { id: 'gettransfer', name: 'gettransfer', category: 'Taxi', url: 'https://gettransfer.tpx.lt/S5Winp9b', icon: Car, type: 'link' },
  { id: 'kiwitaxi', name: 'kiwitaxi', category: 'Taxi', url: 'https://kiwitaxi.tpx.lt/LlWkoBvb', icon: Car, type: 'link' },
  
  // --- Kiwi.com Vuelos/Multimodal (WIDGET) ---
  { 
    id: 'kiwicom_flights',
    name: 'kiwicom_flights',
    category: 'Vuelos+',
    widgetSrc: 'https://tpemb.com/content?currency=usd&trs=474187&shmarker=670634&locale=en&stops=any&show_hotels=false&powered_by=false&border_radius=0&plain=false&color_button=%2300A991&color_button_text=%23ffffff&promo_id=3414&campaign_id=111',
    icon: Plane,
    color: 'text-teal-400',
    type: 'widget'
  },

  // --- CONECTIVIDAD ---
  { id: 'airalo', name: 'airalo', category: 'Datos', url: 'https://airalo.tpx.lt/Vi6dLNJn', icon: Wifi, type: 'link' },
  { id: 'saily', name: 'saily', category: 'Datos', url: 'https://saily.tpx.lt/uibLtRBC', icon: Smartphone, type: 'link' },

  // --- EXPERIENCIAS Y VARIOS ---
  { id: 'klook', name: 'klook', category: 'Tours', url: 'https://klook.tpx.lt/WFmA39zq', icon: Map, type: 'link' },
  { id: 'tiqets', name: 'tiqets', category: 'Museos', url: 'https://tpx.lt/BQ0e35xV', icon: Map, type: 'link' },
  { id: 'radicalstorage', name: 'radicalstorage', category: 'Guarda', url: 'https://radicalstorage.tpx.lt/PNWh3TE7', icon: Briefcase, type: 'link' },
  { id: 'ekta', name: 'ekta', category: 'Salud', url: 'https://ektatraveling.tpx.lt/bwSOxHqQ', icon: Shield, type: 'link' },
];