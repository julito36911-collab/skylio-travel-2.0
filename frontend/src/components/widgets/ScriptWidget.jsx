import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const ScriptWidget = ({ scriptSrc }) => {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (!scriptSrc || !containerRef.current) return;

    console.log("Cargando widget desde:", scriptSrc);
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    let finalSrc = scriptSrc;
    if (scriptSrc.includes('<script')) {
        const srcMatch = scriptSrc.match(/src="([^"]+)"/);
        if (srcMatch) {
            finalSrc = srcMatch[1];
        }
    }

    script.src = finalSrc;
    script.async = true;
    script.charset = 'UTF-8';
    containerRef.current.appendChild(script);

    // Asegurar que el contenido del widget tenga tamaño completo
    script.onload = () => {
      setTimeout(() => {
        if (containerRef.current) {
          const iframes = containerRef.current.querySelectorAll('iframe');
          const divs = containerRef.current.querySelectorAll('div');
          
          iframes.forEach(iframe => {
            iframe.style.width = '100%';
            iframe.style.height = '600px';
            iframe.style.minHeight = '600px';
            iframe.style.margin = '0';
            iframe.style.padding = '0';
            iframe.style.display = 'block';
          });
          
          divs.forEach(div => {
            if (div.id || div.className) {
              div.style.width = '100%';
              div.style.minHeight = '600px';
              div.style.margin = '0';
              div.style.padding = '0';
            }
          });
        }
      }, 500);
    };

    return () => {
      if (containerRef.current) {
         console.log("Desmontando widget...");
         containerRef.current.innerHTML = '';
      }
    };
  }, [scriptSrc]);

  return (
    <div 
      ref={containerRef} 
      className="widget-container min-h-[600px] w-full bg-white rounded-xl overflow-hidden relative z-20 shadow-inner flex flex-col items-start justify-start"
      style={{ minHeight: '600px', width: '100%', height: '100%', margin: '0', padding: '0' }}
    >
      <span className="text-slate-400 text-sm animate-pulse p-4">{t('messages.loading_search')}</span>
    </div>
  );
};

export default ScriptWidget;