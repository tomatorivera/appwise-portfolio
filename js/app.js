const MINIMO_WIDTH_PARA_NAV_ABIERTO = 576; // px
document.addEventListener('DOMContentLoaded', () => {
  if (window.screen.width <= MINIMO_WIDTH_PARA_NAV_ABIERTO)
    document.querySelector('.navbar').classList.add('hide');
})