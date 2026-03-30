/**
 * Skylio Travel 2.0 - London Bridge v2.0
 * Conserje IA completo para la guía de Londres.
 * Carga chat_intelligence_london.json + london_full.json para respuestas ricas.
 */

const LondonBridge = (() => {
  let londonData = null;
  let chatIntelligence = null;

  const HOTEL_DATA_PATHS = [
    '../london_full.json',
    '/destinos/london_full.json'
  ];

  const INTEL_DATA_PATHS = [
    '../chat_intelligence_london.json',
    '/destinos/chat_intelligence_london.json'
  ];

  // ── INIT ────────────────────────────────────────────────────────────────

  async function init() {
    await Promise.all([loadHotelData(), loadIntelligence()]);
    console.log('[LondonBridge v2] Listo.', {
      hotels: londonData?.hotels?.length ?? 0,
      intents: chatIntelligence?.intents?.length ?? 0
    });
  }

  async function loadHotelData() {
    for (const path of HOTEL_DATA_PATHS) {
      try {
        const res = await fetch(path);
        if (!res.ok) continue;
        londonData = await res.json();
        return;
      } catch (_) { /* intentar siguiente */ }
    }
  }

  async function loadIntelligence() {
    for (const path of INTEL_DATA_PATHS) {
      try {
        const res = await fetch(path);
        if (!res.ok) continue;
        chatIntelligence = await res.json();
        return;
      } catch (_) { /* intentar siguiente */ }
    }
  }

  // ── NORMALIZACIÓN ───────────────────────────────────────────────────────
  // Convierte cualquier texto a minúsculas sin tildes ni caracteres especiales.
  // "LUGARES DE INTERÉS" → "lugares de interes"
  function normalize(str) {
    return String(str)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // quitar diacríticos
      .replace(/[¿?¡!]/g, '')          // quitar signos de puntuación
      .trim();
  }

  // ── QUERY ENGINE ────────────────────────────────────────────────────────

  function handleChatQuery(rawText) {
    const input = normalize(rawText);

    if (!chatIntelligence?.intents) return null;

    // Para cada intent, contar cuántos de sus triggers aparecen como substring en el input.
    // .some() se usa para el chequeo individual: basta con que el trigger esté contenido
    // en cualquier parte del texto del usuario (no requiere coincidencia exacta).
    let best = null;
    let bestScore = 0;

    for (const intent of chatIntelligence.intents) {
      const score = intent.triggers.reduce((acc, trigger) => {
        return acc + (input.includes(normalize(trigger)) ? 1 : 0);
      }, 0);

      if (score > bestScore) {
        bestScore = score;
        best = intent;
      }
    }

    // También hacer una segunda pasada con .some() para atrapar intents
    // donde solo un trigger coincide pero con alta especificidad (frases largas).
    if (!best || bestScore === 0) {
      best = chatIntelligence.intents.find(intent =>
        intent.triggers.some(trigger => input.includes(normalize(trigger)))
      ) ?? null;
    }

    if (!best) return null;

    // Ejecutar acciones visuales
    if (best.scrollTo) scrollToSection(best.scrollTo);
    if (best.scrollAction === 'filterParking') filterHotels('PARKING');
    else if (best.scrollAction === 'filterCentro') filterHotels('CENTRO');

    return best.response;
  }

  // ── SCROLL HELPER ────────────────────────────────────────────────────────

  function scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (!el) return;
    // Delay pequeño para que el usuario vea el mensaje antes del scroll
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Highlight visual breve
      el.style.transition = 'outline 0.3s';
      el.style.outline = '2px solid rgba(245,158,11,0.5)';
      el.style.borderRadius = '12px';
      setTimeout(() => { el.style.outline = ''; }, 2000);
    }, 400);
  }

  // ── HOTEL FILTER ─────────────────────────────────────────────────────────

  function filterHotels(label) {
    const allCards = document.querySelectorAll('[data-hotel-label]');
    allCards.forEach(card => {
      const cardLabel = card.dataset.hotelLabel || '';
      if (label === 'ALL' || cardLabel.includes(label)) {
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
      window.dispatchEvent(new CustomEvent('antigravity-state-change', {
        detail: { transportMode: 'Transporte Público' }
      }));
    }
  }

  function resetFilter() {
    filterHotels('ALL');
  }

  function showFilterBanner(label) {
    removeFilterBanner();
    const labels = {
      PARKING: '🚗 Mostrando hoteles con PARKING',
      CENTRO:  '📍 Mostrando hoteles en el CENTRO',
    };
    const banner = document.createElement('div');
    banner.id = 'skylio-filter-banner';
    banner.style.cssText = `
      position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%);
      background: rgba(10,15,22,0.95); border: 1px solid rgba(245,158,11,0.5);
      color: #fbbf24; padding: 10px 20px; border-radius: 999px;
      font-size: 13px; font-weight: 600; z-index: 1000;
      backdrop-filter: blur(12px); display: flex; align-items: center; gap: 10px;
      white-space: nowrap;
    `;
    banner.innerHTML = `
      <span>${labels[label] || '🔍 Filtro activo'}</span>
      <button onclick="LondonBridge.resetFilter()" style="background:rgba(245,158,11,0.2);border:none;color:#fbbf24;cursor:pointer;padding:2px 10px;border-radius:999px;font-weight:700;">✕ Quitar</button>
    `;
    document.body.appendChild(banner);
  }

  function removeFilterBanner() {
    const existing = document.getElementById('skylio-filter-banner');
    if (existing) existing.remove();
  }

  return { init, handleChatQuery, filterHotels, resetFilter, scrollToSection };
})();

window.LondonBridge = LondonBridge;
document.addEventListener('DOMContentLoaded', () => LondonBridge.init());
