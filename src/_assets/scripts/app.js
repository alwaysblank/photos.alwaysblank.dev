const basicLightbox = require('basiclightbox');
import LazyLoad from "vanilla-lazyload";

/**
 * Set up lightbox
 */
document.querySelectorAll(`[data-lightbox]`).forEach(el => {
  el.addEventListener(`click`, (e) => {
      e.preventDefault();
      basicLightbox.create(`
      <img width="1280" src="${el.href}">
    `).show();
  });
});

/**
 * Set up lazyloading
 */
new LazyLoad({
  use_native: true,
  elements_selector: `[data-srcset]`,
});