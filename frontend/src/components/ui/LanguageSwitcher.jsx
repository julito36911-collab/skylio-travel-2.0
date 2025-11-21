import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useEffect } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'es', name: 'ES', flag: '🇪🇸' },
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'he', name: 'HE', flag: '🇮🇱' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    
    // Configurar dirección RTL para hebreo
    if (lng === 'he') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'he');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', lng);
    }
  };

  // Establecer dirección inicial
  useEffect(() => {
    if (i18n.language === 'he') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'he');
    }
  }, [i18n.language]);

  return (
    <div className="flex items-center gap-1 glass-card rounded-full p-1">
      <Globe size={16} className="text-slate-400 mx-1" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-2 py-1 rounded-full text-xs font-bold transition-all ${
            i18n.language === lang.code
              ? 'bg-blue-500 text-white shadow-lg'
              : 'text-slate-400 hover:text-white hover:bg-white/10'
          }`}
          title={lang.name}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;