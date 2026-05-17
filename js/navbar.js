/* navbar toggle */
const btnToggleNavbar = document.getElementById('toggle-navbar');

btnToggleNavbar.addEventListener('click', (event) => {
  event.target.closest('.navbar').classList.toggle('hide');
})

/* navbar dropdown menus */
const dropdownButtons = document.querySelectorAll(".open-dropdown");

dropdownButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.closest(".dropdown").classList.toggle("dropdown-open");
  });
});

/* navbar min width */
const MINIMO_WIDTH_PARA_NAV_ABIERTO = 576; // px
document.addEventListener('DOMContentLoaded', () => {
  if (window.screen.width <= MINIMO_WIDTH_PARA_NAV_ABIERTO)
    document.querySelector('.navbar').classList.add('hide');
})