const basicLightbox = require('basiclightbox');

document.querySelectorAll(`[data-lightbox]`).forEach(el => {
  el.addEventListener(`click`, (e) => {
      e.preventDefault();
      basicLightbox.create(`
      <img width="1280" src="${el.href}">
    `).show()
  })
});