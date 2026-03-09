import { X } from 'lucide-react';
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children, color }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col" style={{maxHeight: '95vh'}}>
        <div className={`flex justify-between items-center p-4 border-b border-white/10 flex-shrink-0 ${color}`}>
          <h3 className="text-lg font-bold">{title}</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 transition">
            <X size={20} />
          </button>
        </div>
        <div className="px-6 pt-6 pb-10 text-slate-200 overflow-y-scroll flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
