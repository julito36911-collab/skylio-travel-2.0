import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CategoryAccordion = ({ title, icon: Icon, partners, onPartnerClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="bg-slate-800 border border-white/10 rounded-xl shadow-lg shadow-black/50 hover:-translate-y-1 hover:border-gray-500 hover:shadow-xl transition-all duration-300 overflow-hidden mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-white/5 transition"
        data-testid={`category-${title}`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5">
            <Icon size={20} className="text-blue-400" />
          </div>
          <span className="font-bold text-sm">{title}</span>
          <span className="text-xs text-slate-400">({partners.length})</span>
        </div>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      
      {isOpen && (
        <div className="p-3 pt-0 grid grid-cols-2 gap-2 animate-in slide-in-from-top-2 duration-200">
          {partners.map((partner) => {
            const PartnerIcon = partner.icon;
            const partnerName = t(`partners.${partner.name}.name`, partner.name);
            const partnerDescription = t(`partners.${partner.name}.description`, '');
            const partnerBadge = t(`partners.${partner.name}.badge`, '');

            return (
              <button
                key={partner.id}
                onClick={() => onPartnerClick(partner)}
                className="p-3 text-left group bg-slate-800 border border-white/10 rounded-xl shadow-md hover:-translate-y-1 hover:border-gray-500 hover:shadow-lg transition-all duration-300"
                data-testid={`partner-card-${partner.id}`}
              >
                <div className="flex items-start gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg bg-white/5 ${partner.color || 'text-slate-300'}`}>
                    <PartnerIcon size={16} />
                  </div>
                  {partnerBadge && (
                    <span className="text-[8px] font-bold uppercase px-1.5 py-0.5 bg-white/10 rounded-full text-white/80">
                      {partnerBadge}
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-bold mb-1 group-hover:text-blue-400 transition">
                  {partnerName}
                </h4>
                <p className="text-[10px] text-slate-400 line-clamp-1">
                  {partnerDescription}
                </p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryAccordion;
