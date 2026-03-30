/**
 * Skylio Travel 2.0 - DestinationGrid component
 * Premium Dark Mode with Glassmorphism
 * Requires Tailwind CSS and AntiGravity CLI v1.107.0
 */

const DestinationGrid = (containerId, initialData) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  let currentMode = 'Transporte Público'; // Default mode

  const render = (hotels) => {
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        ${hotels.map(hotel => {
          const isVisible = currentMode === 'Coche' 
            ? hotel.labels.includes('PARKING') 
            : hotel.labels.includes('CENTRO');

          if (!isVisible) return '';

          return `
            <div class="hotel-card group bg-[#ffffff08] backdrop-blur-md border border-[#ffffff15] rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-orange-500/50 hover:bg-[#ffffff0d] shadow-xl">
              <div class="flex justify-between items-start mb-4">
                <span class="px-2 py-1 text-[10px] font-bold uppercase tracking-widest bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-md">
                  ${hotel.category}
                </span>
                <span class="text-slate-400 text-sm font-semibold">${hotel.price_level}</span>
              </div>
              
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                ${hotel.name}
              </h3>
              
              <div class="flex items-center gap-1 mb-4">
                ${Array(5).fill(0).map((_, i) => `
                  <span class="${i < hotel.rating ? 'text-orange-500' : 'text-slate-700'} text-xs">★</span>
                `).join('')}
              </div>

              <div class="flex flex-wrap gap-2 mb-6">
                ${hotel.labels.map(label => `
                  <span class="text-[9px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-white/5">
                    ${label}
                  </span>
                `).join('')}
              </div>

              <a href="${hotel.link}" target="_blank" class="block w-full py-3 text-center bg-transparent border border-orange-500/30 text-orange-500 font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all transform active:scale-95">
                Reservar en Booking
              </a>
            </div>
          `;
        }).join('')}
      </div>
    `;
  };

  // Initial render
  render(initialData.hotels);

  // AntiGravity Shared State Listener
  window.addEventListener('antigravity-state-change', (e) => {
    if (e.detail && e.detail.transportMode) {
      currentMode = e.detail.transportMode; // 'Coche' or 'Transporte Público'
      render(initialData.hotels);
    }
  });

  // Example of how to trigger the state change from outside
  window.setTransportMode = (mode) => {
    const event = new CustomEvent('antigravity-state-change', {
      detail: { transportMode: mode }
    });
    window.dispatchEvent(event);
  };
};

/**
 * GLOBAL STYLES (To be included in main CSS file)
 * 
 * :root {
 *   --skylio-dark: #0a0f16;
 *   --skylio-accent: #f97316;
 * }
 * 
 * body {
 *   background-color: var(--skylio-dark);
 *   color: #e2e8f0;
 * }
 * 
 * .glass-premium {
 *   background: rgba(255, 255, 255, 0.03);
 *   backdrop-filter: blur(10px);
 *   border: 1px solid rgba(255, 255, 255, 0.08);
 * }
 */

// Export or make globally available
window.DestinationGrid = DestinationGrid;
