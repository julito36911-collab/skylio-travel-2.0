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
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 h-[95vh] flex flex-col overflow-hidden">
        <div className={`flex justify-between items-center p-4 border-b border-white/10 ${color} flex-shrink-0`}>
          <h3 className="text-lg font-bold">{title}</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 transition">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 text-slate-200 overflow-y-auto flex-1 overscroll-contain min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;