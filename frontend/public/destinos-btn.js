(function() {
  'use strict';
  function injectButton() {
    if (document.getElementById('skylio-destinos-btn')) return;
    var btnContainer = document.createElement('div');
    btnContainer.id = 'skylio-destinos-btn';
    btnContainer.innerHTML = '<a href="/destinos/" id="destinos-float-btn" title="Explorar Destinos"><span class="destinos-icon">🌍</span><span class="destinos-text">Destinos</span></a>';
    var style = document.createElement('style');
    style.textContent = '#skylio-destinos-btn{position:fixed;top:14px;right:380px;z-index:99999;animation:destinosFadeIn .6s ease-out}#destinos-float-btn{display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,rgba(212,168,83,.15),rgba(212,168,83,.05));border:1px solid rgba(212,168,83,.35);color:#d4a853;padding:7px 16px;border-radius:50px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:13px;font-weight:600;text-decoration:none;transition:all .3s ease;backdrop-filter:blur(10px);cursor:pointer}#destinos-float-btn:hover{background:linear-gradient(135deg,rgba(212,168,83,.25),rgba(212,168,83,.1));border-color:rgba(212,168,83,.6);color:#e8c97a;transform:translateY(-1px);box-shadow:0 4px 15px rgba(212,168,83,.2)}.destinos-icon{font-size:15px;line-height:1}.destinos-text{letter-spacing:.5px}@keyframes destinosFadeIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@media(max-width:768px){#skylio-destinos-btn{right:70px;top:12px}.destinos-text{display:none}#destinos-float-btn{padding:8px 12px}}@media(max-width:480px){#skylio-destinos-btn{right:60px}}';
    document.head.appendChild(style);
    document.body.appendChild(btnContainer);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(injectButton, 800); });
  } else {
    setTimeout(injectButton, 800);
  }
})();
