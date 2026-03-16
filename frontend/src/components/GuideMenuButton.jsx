import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HelpCircle, ChevronDown } from 'lucide-react';

const GuideMenuButton = ({ onOpenGuide }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang);
    onOpenGuide();
    setIsOpen(false);
  };

  // Text based on current language
  const buttonText = i18n.language === 'en' ? 'Guide' : 'Guía';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 glass-card rounded-full hover:bg-white/10 transition-colors"
        data-testid="guide-menu-button"
      >
        <HelpCircle size={18} className="text-slate-300" />
        <span className="text-sm font-medium text-slate-300 hidden sm:inline">{buttonText}</span>
        <ChevronDown size={14} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-36 bg-gray-800/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl overflow-hidden z-50">
          <button
            onClick={() => handleSelect('es')}
            className="w-full px-4 py-3 text-left text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <span>🇪🇸</span>
            <span>Español</span>
          </button>
          <button
            onClick={() => handleSelect('en')}
            className="w-full px-4 py-3 text-left text-sm text-white hover:bg-white/10 transition-colors flex items-center gap-2 border-t border-white/5"
          >
            <span>🇬🇧</span>
            <span>English</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default GuideMenuButton;
