import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { partners } from './data/partners';
import { Search, Map as MapIcon, Tag, User, Bell, ShoppingBag, Menu, Plane, Hotel, Car, Wifi, Compass, Shield, Anchor, BookOpen, MapPin } from 'lucide-react';
import Modal from './components/ui/Modal';
import ScriptWidget from './components/widgets/ScriptWidget';
import HotelsForm from './components/search/HotelsForm';
import ExpediaForm from './components/search/ExpediaForm';
import NewsSection from './components/news/NewsSection';
import VideoSection from './components/video/VideoSection';
import LanguageSwitcher from './components/ui/LanguageSwitcher';
import CategoryAccordion from './components/ui/CategoryAccordion';
import GuidesHub from './pages/GuidesHub';
import GuidePage from './pages/GuidePage';
import ParkingFinder from './components/ParkingFinder';
import WhatsAppButton from './components/WhatsAppButton';
import GuideMenuButton from './components/GuideMenuButton';
import './App.css';

// Componente GlassCard
const GlassCard = ({ partner, className = '', children, tall = false, onClick }) => {
  const { t } = useTranslation();
  
  if (!partner) return null;
  const Icon = partner.icon;
  
  // Obtener nombre traducido
  const partnerName = t(`partners.${partner.name}.name`, partner.name);
  const partnerDescription = t(`partners.${partner.name}.description`, '');
  const partnerBadge = t(`partners.${partner.name}.badge`, '');

  const resolveClick = onClick || (() => {
     if (partner.type === 'link') window.open(partner.url, '_blank', 'noopener,noreferrer');
  });

  return (
    <div
      onClick={resolveClick}
      className={`p-4 cursor-pointer relative overflow-hidden group flex flex-col bg-slate-800 border border-white/10 rounded-xl shadow-lg shadow-black/50 hover:-translate-y-1 hover:border-gray-500 hover:shadow-xl transition-all duration-300 ${tall ? 'justify-between' : 'justify-start gap-3'} ${className}`}
      data-testid={`partner-card-${partner.id}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 w-full flex justify-between items-start">
        <div className={`p-2.5 rounded-xl bg-white/5 backdrop-blur-sm ${partner.color} shadow-sm`}>
          <Icon size={tall ? 28 : 22} />
        </div>
        {partnerBadge && (
          <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-gradient-to-r from-white/10 to-white/5 rounded-full text-white/90 border border-white/10 shadow-sm">
            {partnerBadge}
          </span>
        )}
      </div>
      <div className={`relative z-10 ${!tall && 'mt-1'}`}>
        <h3 className={`font-bold leading-tight ${tall ? 'text-xl mb-1' : 'text-base'}`}>{partnerName}</h3>
        {partnerDescription && <p className={`text-slate-400 leading-snug ${tall ? 'text-sm' : 'text-xs line-clamp-2'}`}>{partnerDescription}</p>}
      </div>
      {children}
    </div>
  );
};

function App() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);
  const [showGuidesHub, setShowGuidesHub] = useState(false);
  const [showGuidePage, setShowGuidePage] = useState(false);

  const handleCardClick = (partner) => {
    if (partner.type === 'widget' || partner.type.startsWith('search_')) {
      setActiveModal(partner.id);
    } else if (partner.type === 'link') {
      window.open(partner.url, '_blank', 'noopener,noreferrer');
    }
  };

  // PRINCIPALES - Siempre visibles
  const heroFlight = partners.find(p => p.id === 'aviasales');
  const heroHotelsCom = partners.find(p => p.id === 'hotels_com');
  const economyBookings = partners.find(p => p.id === 'economybookings');

  // CATEGORÍAS - En acordeones
  const categoryVuelos = {
    title: t('categories.travel_search', 'Búsquedas de Viaje'),
    icon: Plane,
    partners: partners.filter(p => ['kiwicom_flights', 'expedia'].includes(p.id))
  };

  const categoryLujo = {
    title: t('categories.luxury', 'Lujo & Yates'),
    icon: Anchor,
    partners: partners.filter(p => ['searadar'].includes(p.id))
  };

  const categoryMovilidad = {
    title: t('categories.mobility', 'Movilidad'),
    icon: Car,
    partners: partners.filter(p => ['localrent', 'gettransfer', 'kiwitaxi'].includes(p.id))
  };

  const categoryConectividad = {
    title: t('categories.connectivity', 'Conectividad'),
    icon: Wifi,
    partners: partners.filter(p => ['airalo', 'saily'].includes(p.id))
  };

  const categoryExperiencias = {
    title: t('categories.experiences', 'Experiencias'),
    icon: Compass,
    partners: partners.filter(p => ['klook', 'tiqets'].includes(p.id))
  };

  const categoryEsenciales = {
    title: t('categories.essentials', 'Esenciales'),
    icon: Shield,
    partners: partners.filter(p => ['ekta', 'radicalstorage'].includes(p.id))
  };

  const kiwiFlights = partners.find(p => p.id === 'kiwicom_flights');
  const featuredExpedia = partners.find(p => p.id === 'expedia');

  return (
    <div className="pb-28">
      <header className="px-6 py-5 flex justify-between items-center sticky top-0 z-50 bg-background/30 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center gap-3">
          <button className="p-2 -ml-2 rounded-full hover:bg-white/10 transition md:hidden">
            <Menu size={24} className="text-slate-300" />
          </button>
          <div className="flex items-center gap-2.5">
            {/* Logo de Skylio - Proporcional, Premium y Fondo Negro */}
            <div className="flex items-center bg-black p-2.5 rounded-2xl shadow-xl shadow-black border border-amber-500/30 hover:scale-105 hover:border-amber-500/50 transition-all duration-500">
              <div className="bg-white/95 rounded-xl p-1.5 shadow-inner">
                <img 
                  src="/images/logo-new.jpg" 
                  alt="Skylio Viajes" 
                  className="h-14 md:h-20 w-auto object-contain rounded-lg flex-shrink-0" 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowGuidesHub(true)}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 hover:bg-amber-500/20 hover:border-amber-500/50 transition-all duration-300 font-semibold text-sm mr-2 shadow-sm shadow-amber-500/5"
          >
            <MapIcon size={18} />
            <span>Destinos</span>
          </button>
          <GuideMenuButton onOpenGuide={() => setShowGuidePage(true)} />
          <div className="h-8 w-[1px] bg-white/10 mx-1 hidden md:block"></div>
          <LanguageSwitcher />
          <button className="p-2.5 glass-card rounded-full relative hover:bg-white/5 transition-colors">
            <Bell size={20} className="text-slate-300" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full ring-2 ring-black/50"></span>
          </button>
        </div>
      </header>

      <main className="p-4 md:p-6 max-w-5xl mx-auto">
        <h2 className="text-[2.5rem] leading-[1.1] font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400/80">
          {t('app.tagline')}
        </h2>

        {/* SECCIÓN PRINCIPAL - 3 Cards Grandes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <GlassCard
            partner={heroFlight}
            tall
            onClick={() => handleCardClick(heroFlight)}
            className="h-[200px] bg-gradient-to-br from-blue-600/10 via-transparent to-transparent"
          />

          <GlassCard
            partner={heroHotelsCom}
            tall
            onClick={() => handleCardClick(heroHotelsCom)}
            className="h-[200px] bg-gradient-to-br from-red-600/10 via-transparent to-transparent"
          />

          <GlassCard
            partner={economyBookings}
            tall
            onClick={() => handleCardClick(economyBookings)}
            className="h-[200px] bg-gradient-to-br from-yellow-600/10 via-transparent to-transparent"
          />
        </div>

        {/* BUSCADOR DE PARKINGS */}
        <ParkingFinder />

        {/* SECCIÓN DE GUÍAS DE VIAJE */}
        <section className="mb-8">
          <div 
            onClick={() => setShowGuidesHub(true)}
            className="p-8 cursor-pointer group bg-white/5 border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:border-amber-500/30 hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] -mr-32 -mt-32 rounded-full group-hover:bg-amber-500/20 transition-all duration-700"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 backdrop-blur-xl">
                    <BookOpen size={32} className="text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white group-hover:text-amber-400 transition-colors tracking-tight">
                      {t('guides.hub_title', 'HUB DE DESTINOS')}
                    </h3>
                    <p className="text-slate-400 font-medium">
                      {t('guides.hub_subtitle', 'Mapa Interactivo • Guías Premium • Asistente IA')}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap mt-6">
                  <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <MapPin size={12} className="text-amber-500" /> 25+ Destinos
                  </span>
                  <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    🚗 Restricciones
                  </span>
                  <span className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    ✨ IA Travel Assistant
                  </span>
                </div>
              </div>
              <div className="text-7xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 opacity-80">
                🌍
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORÍAS EN ACORDEONES */}
        <section className="mb-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            <Tag size={20} className="text-slate-100"/> {t('categories.more_services', 'Más Servicios')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <CategoryAccordion
              title={categoryVuelos.title}
              icon={categoryVuelos.icon}
              partners={categoryVuelos.partners}
              onPartnerClick={handleCardClick}
            />

            <CategoryAccordion
              title={categoryLujo.title}
              icon={categoryLujo.icon}
              partners={categoryLujo.partners}
              onPartnerClick={handleCardClick}
            />

            <CategoryAccordion
              title={categoryMovilidad.title}
              icon={categoryMovilidad.icon}
              partners={categoryMovilidad.partners}
              onPartnerClick={handleCardClick}
            />

            <CategoryAccordion
              title={categoryConectividad.title}
              icon={categoryConectividad.icon}
              partners={categoryConectividad.partners}
              onPartnerClick={handleCardClick}
            />

            <CategoryAccordion
              title={categoryExperiencias.title}
              icon={categoryExperiencias.icon}
              partners={categoryExperiencias.partners}
              onPartnerClick={handleCardClick}
            />

            <CategoryAccordion
              title={categoryEsenciales.title}
              icon={categoryEsenciales.icon}
              partners={categoryEsenciales.partners}
              onPartnerClick={handleCardClick}
            />
          </div>
        </section>

        <NewsSection />
        <VideoSection />
      </main>

      {/* MODALES */}
      <Modal isOpen={activeModal === 'aviasales'} onClose={() => setActiveModal(null)} title={t('forms.flights.title')} color={heroFlight?.color}>
        <ScriptWidget scriptSrc={heroFlight?.widgetSrc} />
      </Modal>

      <Modal isOpen={activeModal === 'economybookings'} onClose={() => setActiveModal(null)} title={t('forms.cars.title')} color={economyBookings?.color}>
        <ScriptWidget scriptSrc={economyBookings?.widgetSrc} />
      </Modal>
      
      <Modal isOpen={activeModal === 'kiwicom_flights'} onClose={() => setActiveModal(null)} title={t('forms.kiwi.title')} color={kiwiFlights?.color}>
        <ScriptWidget scriptSrc={kiwiFlights?.widgetSrc} />
      </Modal>

      <Modal isOpen={activeModal === 'hotels_com'} onClose={() => setActiveModal(null)} title={t('forms.hotels.title')} color={heroHotelsCom?.color}>
        <HotelsForm partnerData={heroHotelsCom} onClose={() => setActiveModal(null)} />
      </Modal>
      
      <Modal isOpen={activeModal === 'expedia'} onClose={() => setActiveModal(null)} title={t('forms.expedia.title')} color={featuredExpedia?.color}>
        <ExpediaForm partnerData={featuredExpedia} onClose={() => setActiveModal(null)} />
      </Modal>

      {showGuidesHub && (
        <div className="fixed inset-0 z-[100] bg-[#0a0f16]/95 backdrop-blur-2xl animate-in fade-in duration-300" onClick={() => setShowGuidesHub(false)}>
          <div className="h-full overflow-y-auto custom-scrollbar" onClick={(e) => e.stopPropagation()}>
            <div className="min-h-full pb-20">
              <div className="sticky top-0 z-[110] bg-[#0a0f16]/80 backdrop-blur-xl px-6 py-4 border-b border-white/5 flex justify-between items-center shadow-2xl">
                <button
                  onClick={() => setShowGuidesHub(false)}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-all bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-white/20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="font-bold text-sm uppercase tracking-wider">{t('common.back', 'Cerrar Hub')}</span>
                </button>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Skylio Destinations Hub</span>
                </div>
              </div>
              <GuidesHub />
            </div>
          </div>
        </div>
      )}

      <nav className="glass-dock fixed bottom-0 left-0 right-0 p-3 flex justify-around items-center z-50 md:hidden safe-area-bottom">
        <button className="flex flex-col items-center gap-1.5 p-1 text-blue-400 relative" data-testid="nav-explore">
          <Search size={22} strokeWidth={2.5} />
          <span className="text-[9px] font-bold tracking-wide">{t('nav.explore')}</span>
          <span className="absolute -bottom-2 w-1 h-1 bg-blue-400 rounded-full"></span>
        </button>
        <button 
          onClick={() => setShowGuidesHub(true)}
          className="flex flex-col items-center gap-1.5 p-1 text-slate-500 hover:text-slate-300 transition" 
          data-testid="nav-guide"
        >
          <MapIcon size={22} />
          <span className="text-[9px] font-medium tracking-wide">{t('nav.guide')}</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 p-1 text-slate-500 hover:text-slate-300 transition" data-testid="nav-offers">
          <Tag size={22} />
          <span className="text-[9px] font-medium tracking-wide">{t('nav.offers')}</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 p-1 text-slate-500 hover:text-slate-300 transition" data-testid="nav-profile">
          <User size={22} />
          <span className="text-[9px] font-medium tracking-wide">{t('nav.profile')}</span>
        </button>
      </nav>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Guide Page Modal */}
      {showGuidePage && (
        <GuidePage onClose={() => setShowGuidePage(false)} />
      )}
    </div>
  )
}

export default App;
