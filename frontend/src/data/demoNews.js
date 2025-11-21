// Noticias de demostración para desarrollo/preview
// En producción con dominio real, se usarán noticias reales de NewsAPI

export const demoNews = {
  es: [
    {
      source: { id: null, name: "El País Viajes" },
      author: "Redacción Viajes",
      title: "Los 10 destinos turísticos más populares de 2025",
      description: "Desde Japón hasta Perú, estos son los lugares que los viajeros están eligiendo para sus próximas vacaciones. Una combinación perfecta de cultura, naturaleza y aventura.",
      url: "https://example.com/destinos-2025",
      urlToImage: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&q=80",
      publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Los destinos más buscados para 2025 combinan cultura, naturaleza y aventura..."
    },
    {
      source: { id: null, name: "Condé Nast Traveler" },
      author: "María González",
      title: "Aerolíneas lanzan ofertas de vuelos internacionales con hasta 40% de descuento",
      description: "Las principales aerolíneas mundiales anuncian promociones especiales para vuelos a Europa, Asia y América con descuentos significativos para reservas anticipadas.",
      url: "https://example.com/ofertas-vuelos",
      urlToImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Las aerolíneas ofrecen descuentos históricos para la temporada alta..."
    },
    {
      source: { id: null, name: "National Geographic Viajes" },
      author: "Carlos Ruiz",
      title: "Turismo sostenible: hoteles ecológicos que están marcando tendencia",
      description: "Una nueva generación de hoteles de lujo apuesta por la sostenibilidad sin renunciar al confort. Descubre los alojamientos más innovadores del mundo.",
      url: "https://example.com/hoteles-ecologicos",
      urlToImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Los hoteles ecológicos están revolucionando la industria del turismo..."
    },
    {
      source: { id: null, name: "Lonely Planet" },
      author: "Ana Martínez",
      title: "España bate récord de turismo con 85 millones de visitantes internacionales",
      description: "El país se consolida como uno de los principales destinos turísticos del mundo, impulsado por sus playas, gastronomía y patrimonio cultural.",
      url: "https://example.com/record-turismo-espana",
      urlToImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
      publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      content: "España cierra el año con cifras récord en turismo internacional..."
    },
    {
      source: { id: null, name: "Travel + Leisure" },
      author: "Pedro Sánchez",
      title: "Nuevos requisitos de visado para viajeros: lo que debes saber en 2025",
      description: "Varios países implementan cambios en sus políticas de visado. Guía completa con todo lo que necesitas para planificar tus vacaciones sin contratiempos.",
      url: "https://example.com/visados-2025",
      urlToImage: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80",
      publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Los cambios en las políticas de visado afectarán a millones de viajeros..."
    },
    {
      source: { id: null, name: "Forbes Viajes" },
      author: "Laura Torres",
      title: "Aeropuertos del futuro: tecnología que transformará tu experiencia de viaje",
      description: "Check-in biométrico, inteligencia artificial y sostenibilidad: así serán los aeropuertos en los próximos años. Una revolución que ya está aquí.",
      url: "https://example.com/aeropuertos-futuro",
      urlToImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      content: "La tecnología está transformando la experiencia aeroportuaria..."
    }
  ],
  
  en: [
    {
      source: { id: null, name: "Travel Weekly" },
      author: "Sarah Johnson",
      title: "Top 10 Travel Destinations for 2025: Where Travelers Are Heading",
      description: "From Japan to Peru, these are the places travelers are choosing for their next vacation. A perfect blend of culture, nature, and adventure awaits.",
      url: "https://example.com/destinations-2025",
      urlToImage: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&q=80",
      publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      content: "The most sought-after destinations for 2025 combine culture, nature and adventure..."
    },
    {
      source: { id: null, name: "CNN Travel" },
      author: "Michael Brown",
      title: "Airlines Launch International Flight Deals with Up to 40% Discounts",
      description: "Major world airlines announce special promotions for flights to Europe, Asia and America with significant discounts for early bookings.",
      url: "https://example.com/flight-deals",
      urlToImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Airlines are offering historic discounts for peak season travel..."
    },
    {
      source: { id: null, name: "National Geographic Travel" },
      author: "Emma Wilson",
      title: "Sustainable Tourism: Eco-Friendly Hotels Setting New Standards",
      description: "A new generation of luxury hotels embraces sustainability without sacrificing comfort. Discover the world's most innovative accommodations.",
      url: "https://example.com/eco-hotels",
      urlToImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Eco-friendly hotels are revolutionizing the tourism industry..."
    },
    {
      source: { id: null, name: "Lonely Planet" },
      author: "David Martinez",
      title: "Spain Breaks Tourism Record with 85 Million International Visitors",
      description: "The country consolidates itself as one of the world's top tourist destinations, driven by its beaches, gastronomy and cultural heritage.",
      url: "https://example.com/spain-tourism-record",
      urlToImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
      publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Spain closes the year with record numbers in international tourism..."
    },
    {
      source: { id: null, name: "Travel + Leisure" },
      author: "Jennifer Lee",
      title: "New Visa Requirements for Travelers: What You Need to Know in 2025",
      description: "Several countries are implementing changes to their visa policies. Complete guide with everything you need to plan your vacation hassle-free.",
      url: "https://example.com/visa-2025",
      urlToImage: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80",
      publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Changes in visa policies will affect millions of travelers..."
    },
    {
      source: { id: null, name: "Forbes Travel" },
      author: "Robert Taylor",
      title: "Airports of the Future: Technology Transforming Your Travel Experience",
      description: "Biometric check-in, artificial intelligence and sustainability: this is what airports will look like in the coming years. A revolution that's already here.",
      url: "https://example.com/future-airports",
      urlToImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Technology is transforming the airport experience..."
    }
  ],

  he: [
    {
      source: { id: null, name: "Travel Weekly" },
      author: "Sarah Johnson",
      title: "Top 10 Travel Destinations for 2025: Where Travelers Are Heading",
      description: "From Japan to Peru, these are the places travelers are choosing for their next vacation. A perfect blend of culture, nature, and adventure awaits.",
      url: "https://example.com/destinations-2025",
      urlToImage: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&q=80",
      publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      content: "The most sought-after destinations for 2025 combine culture, nature and adventure..."
    },
    {
      source: { id: null, name: "CNN Travel" },
      author: "Michael Brown",
      title: "Airlines Launch International Flight Deals with Up to 40% Discounts",
      description: "Major world airlines announce special promotions for flights to Europe, Asia and America with significant discounts for early bookings.",
      url: "https://example.com/flight-deals",
      urlToImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Airlines are offering historic discounts for peak season travel..."
    },
    {
      source: { id: null, name: "National Geographic Travel" },
      author: "Emma Wilson",
      title: "Sustainable Tourism: Eco-Friendly Hotels Setting New Standards",
      description: "A new generation of luxury hotels embraces sustainability without sacrificing comfort. Discover the world's most innovative accommodations.",
      url: "https://example.com/eco-hotels",
      urlToImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Eco-friendly hotels are revolutionizing the tourism industry..."
    },
    {
      source: { id: null, name: "Lonely Planet" },
      author: "David Martinez",
      title: "Spain Breaks Tourism Record with 85 Million International Visitors",
      description: "The country consolidates itself as one of the world's top tourist destinations, driven by its beaches, gastronomy and cultural heritage.",
      url: "https://example.com/spain-tourism-record",
      urlToImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80",
      publishedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Spain closes the year with record numbers in international tourism..."
    },
    {
      source: { id: null, name: "Travel + Leisure" },
      author: "Jennifer Lee",
      title: "New Visa Requirements for Travelers: What You Need to Know in 2025",
      description: "Several countries are implementing changes to their visa policies. Complete guide with everything you need to plan your vacation hassle-free.",
      url: "https://example.com/visa-2025",
      urlToImage: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80",
      publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Changes in visa policies will affect millions of travelers..."
    },
    {
      source: { id: null, name: "Forbes Travel" },
      author: "Robert Taylor",
      title: "Airports of the Future: Technology Transforming Your Travel Experience",
      description: "Biometric check-in, artificial intelligence and sustainability: this is what airports will look like in the coming years. A revolution that's already here.",
      url: "https://example.com/future-airports",
      urlToImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      publishedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      content: "Technology is transforming the airport experience..."
    }
  ]
};
