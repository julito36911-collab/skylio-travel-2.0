/**
 * Skylio Travel 2.0 - City Bridge (genérico)
 * Motor de chat IA reutilizable para cualquier destino.
 * Lee window.SKYLIO_CITY_DATA_URL para saber qué JSON cargar.
 */

const CityBridge = (() => {
  let cityData = null;

  // ── INIT ────────────────────────────────────────────────────────────────

  async function init() {
    const url = window.SKYLIO_CITY_DATA_URL;
    if (!url) {
      console.warn('[CityBridge] window.SKYLIO_CITY_DATA_URL no definida.');
      return;
    }
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      cityData = await res.json();
      console.log(`[CityBridge] Listo — ${cityData.destination}. ${cityData.intents?.length ?? 0} intents cargados.`);
    } catch (e) {
      console.warn('[CityBridge] No se pudo cargar datos de ciudad:', e);
    }
  }

  // ── NORMALIZACIÓN ────────────────────────────────────────────────────────
  // "¿DÓNDE DORMIR?" → "donde dormir"

  function normalize(str) {
    return String(str)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[¿?¡!,.:;]/g, '')
      .trim();
  }

  // ── QUERY ENGINE ─────────────────────────────────────────────────────────

  function handleChatQuery(rawText) {
    const input = normalize(rawText);
    if (!cityData?.intents) return null;

    // Pasada 1: intent con más triggers coincidentes (scoring)
    let best = null;
    let bestScore = 0;
    for (const intent of cityData.intents) {
      const score = intent.triggers.reduce((acc, t) => {
        return acc + (input.includes(normalize(t)) ? 1 : 0);
      }, 0);
      if (score > bestScore) { bestScore = score; best = intent; }
    }

    // Pasada 2: cualquier coincidencia de substring (fallback flexible)
    if (!best || bestScore === 0) {
      best = cityData.intents.find(intent =>
        intent.triggers.some(t => input.includes(normalize(t)))
      ) ?? null;
    }

    if (!best) return null;

    if (best.scrollTo) scrollToSection(best.scrollTo);
    if (best.scrollAction === 'filterParking') filterHotels('PARKING');
    else if (best.scrollAction === 'filterCentro') filterHotels('CENTRO');

    return best.response;
  }

  // ── SCROLL ───────────────────────────────────────────────────────────────

  function scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (!el) return;
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.style.transition = 'outline 0.3s';
      el.style.outline = '2px solid rgba(245,158,11,0.5)';
      el.style.borderRadius = '12px';
      setTimeout(() => { el.style.outline = ''; }, 2000);
    }, 400);
  }

  // ── HOTEL FILTER ─────────────────────────────────────────────────────────

  function filterHotels(label) {
    document.querySelectorAll('[data-hotel-label]').forEach(card => {
      const l = card.dataset.hotelLabel || '';
      if (label === 'ALL' || l.includes(label)) {
        card.style.display = '';
        card.style.outline = label !== 'ALL' ? '2px solid rgba(245,158,11,0.6)' : '';
        card.style.borderRadius = '12px';
      } else {
        card.style.display = 'none';
      }
    });
    if (label !== 'ALL') {
      window.dispatchEvent(new CustomEvent('antigravity-state-change', {
        detail: { transportMode: label === 'PARKING' ? 'Coche' : 'Transporte Público' }
      }));
      showFilterBanner(label);
    } else {
      removeFilterBanner();
    }
  }

  function resetFilter() { filterHotels('ALL'); }

  function showFilterBanner(label) {
    removeFilterBanner();
    const labels = {
      PARKING: '🚗 Solo hoteles con PARKING',
      CENTRO: '📍 Solo hoteles en el CENTRO'
    };
    const banner = document.createElement('div');
    banner.id = 'skylio-filter-banner';
    banner.style.cssText = `
      position:fixed;bottom:90px;left:50%;transform:translateX(-50%);
      background:rgba(10,15,22,0.95);border:1px solid rgba(245,158,11,0.5);
      color:#fbbf24;padding:10px 20px;border-radius:999px;
      font-size:13px;font-weight:600;z-index:1000;
      backdrop-filter:blur(12px);display:flex;align-items:center;gap:10px;white-space:nowrap;
    `;
    banner.innerHTML = `
      <span>${labels[label] || '🔍 Filtro activo'}</span>
      <button onclick="CityBridge.resetFilter()" style="background:rgba(245,158,11,0.2);border:none;color:#fbbf24;cursor:pointer;padding:2px 10px;border-radius:999px;font-weight:700;">✕ Quitar</button>
    `;
    document.body.appendChild(banner);
  }

  function removeFilterBanner() {
    document.getElementById('skylio-filter-banner')?.remove();
  }

  return { init, handleChatQuery, filterHotels, resetFilter, scrollToSection };
})();

window.CityBridge = CityBridge;
document.addEventListener('DOMContentLoaded', () => CityBridge.init());
