import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { partners } from './data/partners';
import { Search, Map as MapIcon, Tag, User, Bell, ShoppingBag, Menu, Plane, Hotel, Car, Wifi, Compass, Shield } from 'lucide-react';
import Modal from './components/ui/Modal';
import ScriptWidget from './components/widgets/ScriptWidget';
import HotelsForm from './components/search/HotelsForm';
import ExpediaForm from './components/search/ExpediaForm';
import NewsSection from './components/news/NewsSection';
import LanguageSwitcher from './components/ui/LanguageSwitcher';
import CategoryAccordion from './components/ui/CategoryAccordion';
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
      className={`glass-card p-4 cursor-pointer relative overflow-hidden group flex flex-col ${tall ? 'justify-between' : 'justify-start gap-3'} ${className}`}
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

  const handleCardClick = (partner) => {
    if (partner.type === 'widget' || partner.type.startsWith('search_')) {
      setActiveModal(partner.id);
    } else if (partner.type === 'link') {
      window.open(partner.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Helpers de datos
  const heroFlight = partners.find(p => p.id === 'aviasales');
  const featuredExpedia = partners.find(p => p.id === 'expedia');
  const featuredYacht = partners.find(p => p.id === 'searadar');
  const heroHotelsCom = partners.find(p => p.id === 'hotels_com');
  const economyBookings = partners.find(p => p.id === 'economybookings');
  const kiwiFlights = partners.find(p => p.id === 'kiwicom_flights');

  const techCluster = partners.filter(p => ['airalo', 'saily'].includes(p.id));
  const mobilityCluster = partners.filter(p => ['economybookings', 'localrent', 'gettransfer', 'kiwitaxi', 'kiwicom_flights'].includes(p.id));
  const extrasCluster = partners.filter(p => ['ekta', 'radicalstorage', 'tiqets'].includes(p.id));

  return (
    <div className="pb-28">
      <header className="px-6 py-5 flex justify-between items-center sticky top-0 z-50 bg-background/30 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center gap-3">
          <button className="p-2 -ml-2 rounded-full hover:bg-white/10 transition md:hidden">
            <Menu size={24} className="text-slate-300" />
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-gradient-to-tr from-blue-500 to-violet-500 rounded-md animate-slow-pulse shadow-lg shadow-blue-500/20"></div>
            <h1 className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-400 to-violet-400">{t('app.title')}</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button className="p-2 glass-card rounded-full relative">
            <Bell size={18} className="text-slate-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full"></span>
          </button>
        </div>
      </header>

      <main className="p-4 md:p-6 max-w-5xl mx-auto">
        <h2 className="text-[2.5rem] leading-[1.1] font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400/80">
          {t('app.tagline')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-min">

          {/* SECCIÓN HERO */}
          <GlassCard
            partner={heroFlight}
            tall
            onClick={() => handleCardClick(heroFlight)}
            className="col-span-1 md:col-span-2 h-[220px] bg-gradient-to-br from-blue-600/10 via-transparent to-transparent"
          />

          <GlassCard
            partner={heroHotelsCom}
            tall
            onClick={() => handleCardClick(heroHotelsCom)}
            className="col-span-1 md:col-span-2 h-[220px] bg-gradient-to-br from-red-600/10 via-transparent to-transparent"
          />

          <GlassCard partner={featuredExpedia} onClick={() => handleCardClick(featuredExpedia)} className="col-span-2 md:col-span-3 bg-gradient-to-r from-yellow-600/5 to-orange-600/5" />
          <GlassCard partner={featuredYacht} className="col-span-1 md:col-span-1 border-amber-500/20 bg-gradient-to-b from-amber-900/5 to-transparent" />

          {techCluster.map(partner => (<GlassCard key={partner.id} partner={partner} onClick={() => handleCardClick(partner)} className="col-span-1" />))}

          <div className="col-span-2 grid grid-cols-2 gap-3 mt-2">
            <h3 className="col-span-2 text-xs uppercase tracking-wider text-slate-500 font-semibold ml-1">{t('categories.mobility')}</h3>
            {mobilityCluster.map(partner => (<GlassCard key={partner.id} partner={partner} onClick={() => handleCardClick(partner)} className="aspect-[4/3]" />))}
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-3 mt-2">
             <h3 className="col-span-2 text-xs uppercase tracking-wider text-slate-500 font-semibold ml-1">{t('categories.essentials')}</h3>
            {extrasCluster.map(partner => (<GlassCard key={partner.id} partner={partner} onClick={() => handleCardClick(partner)} className="" />))}
          </div>
        </div>

        <NewsSection />

        <section className="mb-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            <ShoppingBag size={20} className="text-slate-100"/> {t('categories.travel_essentials')}
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {[1, 2, 3].map(i => (<div key={i} className="glass-card min-w-[140px] h-[160px] flex items-center justify-center text-slate-600 snap-center shrink-0 bg-white/5">Producto {i} (Amazon)</div>))}
          </div>
        </section>
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

      <nav className="glass-dock fixed bottom-0 left-0 right-0 p-3 flex justify-around items-center z-50 md:hidden safe-area-bottom">
        <button className="flex flex-col items-center gap-1.5 p-1 text-blue-400 relative" data-testid="nav-explore">
          <Search size={22} strokeWidth={2.5} />
          <span className="text-[9px] font-bold tracking-wide">{t('nav.explore')}</span>
          <span className="absolute -bottom-2 w-1 h-1 bg-blue-400 rounded-full"></span>
        </button>
        <button className="flex flex-col items-center gap-1.5 p-1 text-slate-500 hover:text-slate-300 transition" data-testid="nav-guide">
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
    </div>
  )
}

export default App;
