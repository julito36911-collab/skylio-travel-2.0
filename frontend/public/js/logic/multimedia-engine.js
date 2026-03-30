/**
 * Skylio Travel 2.0 - Multimedia Engine
 * Lazy loads images and manages media galleries
 */

const MultimediaEngine = (() => {
  function init() {
    lazyLoadImages();
    enhanceVideoThumbnails();
  }

  function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
      const imgs = document.querySelectorAll('img[data-src]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '100px' });
      imgs.forEach(img => observer.observe(img));
    }
  }

  function enhanceVideoThumbnails() {
    document.querySelectorAll('[data-video-id]').forEach(el => {
      const id = el.dataset.videoId;
      const img = el.querySelector('img');
      if (img && id) {
        img.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
      }
    });
  }

  return { init };
})();

window.MultimediaEngine = MultimediaEngine;
document.addEventListener('DOMContentLoaded', () => MultimediaEngine.init());
