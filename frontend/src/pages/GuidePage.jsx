import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, MessageCircle, Plane, Hotel, Car, Wifi, Map, ParkingCircle, Newspaper, Bot } from 'lucide-react';

const GuidePage = ({ onClose }) => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const content = {
    es: {
      title: '¿Cómo usar Skylio Viajes?',
      intro: 'Skylio Viajes es 100% gratuito. No cobramos nada. Aquí te explicamos cómo funciona.',
      howItWorksTitle: 'Cómo funciona',
      howItWorks: [
        'Elige lo que necesitas — vuelo, hotel, auto, paquete, yate, eSIM, traslado, tour, entrada a museo, guarda equipaje o seguro de viaje.',
        'Llena los datos del viaje — destino, fechas y número de viajeros.',
        'Skylio te lleva directo a la plataforma oficial (Aviasales, Hotels.com, Expedia, etc.)',
        'Allí ves los precios reales y efectúas la compra directamente.',
        'Skylio nunca toca tu dinero ni tus datos de pago. Todo lo gestiona la plataforma oficial.'
      ],
      freeToolsTitle: 'Herramientas Gratuitas',
      freeToolsIntro: 'Además de los buscadores, Skylio ofrece estas herramientas completamente gratis y sin registro:',
      freeTools: [
        { icon: Bot, name: 'Asistente IA', desc: 'Escribe cualquier destino y recibe información detallada al instante' },
        { icon: Map, name: 'Guías de 25 destinos', desc: 'Qué ver, cómo llegar, dónde comer, tips prácticos' },
        { icon: Car, name: 'Restricciones de tráfico', desc: 'Información de conducción en ciudades del mundo' },
        { icon: ParkingCircle, name: 'Buscador de parking', desc: 'Encuentra estacionamientos seguros cerca de cualquier atracción' },
        { icon: Newspaper, name: 'Noticias de viajes', desc: 'Últimas noticias del mundo de los viajes en tiempo real' }
      ],
      contactTitle: '¿Tienes dudas?',
      contactText: 'Contáctanos por WhatsApp',
      back: 'Volver'
    },
    en: {
      title: 'How to use Skylio Viajes?',
      intro: 'Skylio Viajes is 100% free. We charge nothing. Here\'s how it works.',
      howItWorksTitle: 'How it works',
      howItWorks: [
        'Choose what you need — flight, hotel, car, package, yacht, eSIM, transfer, tour, museum ticket, luggage storage or travel insurance.',
        'Fill in your trip details — destination, dates and number of travelers.',
        'Skylio takes you directly to the official platform (Aviasales, Hotels.com, Expedia, etc.)',
        'There you see the real prices and complete your purchase directly.',
        'Skylio never touches your money or payment details. Everything is handled by the official platform.'
      ],
      freeToolsTitle: 'Free Tools',
      freeToolsIntro: 'In addition to the search engines, Skylio offers these tools completely free and without registration:',
      freeTools: [
        { icon: Bot, name: 'AI Assistant', desc: 'Type any destination and get detailed information instantly' },
        { icon: Map, name: '25 Destination Guides', desc: 'What to see, how to get there, where to eat, practical tips' },
        { icon: Car, name: 'Traffic Restrictions', desc: 'Driving information for cities around the world' },
        { icon: ParkingCircle, name: 'Parking Finder', desc: 'Find safe parking near any tourist attraction' },
        { icon: Newspaper, name: 'Travel News', desc: 'Latest travel news from around the world in real time' }
      ],
      contactTitle: 'Any questions?',
      contactText: 'Contact us on WhatsApp',
      back: 'Back'
    }
  };

  const t = isEnglish ? content.en : content.es;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="min-h-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-gray-900/95 backdrop-blur-md px-6 py-4 border-b border-white/10">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
            >
              <ArrowLeft size={24} />
              <span className="font-semibold">{t.back}</span>
            </button>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              {t.title}
            </h1>
            
            {/* Intro */}
            <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              {t.intro}
            </p>

            {/* How it works */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-blue-500/20 rounded-xl">
                  <Plane size={24} className="text-blue-400" />
                </span>
                {t.howItWorksTitle}
              </h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <ol className="space-y-4">
                  {t.howItWorks.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-500/30 text-blue-300 rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <p className="text-gray-300 pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Free Tools */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="p-2 bg-green-500/20 rounded-xl">
                  <span className="text-2xl">🎁</span>
                </span>
                {t.freeToolsTitle}
              </h2>
              <p className="text-gray-400 mb-6">{t.freeToolsIntro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.freeTools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <div key={index} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <Icon size={24} className="text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-1">{tool.name}</h3>
                          <p className="text-gray-400 text-sm">{tool.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Contact */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">{t.contactTitle}</h2>
              <a
                href="https://wa.me/972526489461"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-2xl transition-all hover:scale-105 shadow-lg hover:shadow-green-500/30"
              >
                <MessageCircle size={24} />
                {t.contactText}
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
