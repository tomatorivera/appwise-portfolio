import { ProjectService } from "./services/ProjectService.js";

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

const MINIMO_WIDTH_PARA_NAV_ABIERTO = 576; // px
document.addEventListener('DOMContentLoaded', async () => {
  /* ajustar estado del navbar (colapsado/expandido) según el ancho de pantalla */
  if (window.screen.width <= MINIMO_WIDTH_PARA_NAV_ABIERTO)
    document.querySelector('.navbar').classList.add('hide');

  /* cargar datos de proyectos */
  const webProjectsList = document.getElementById('web-projects');
  const gameProjectsList = document.getElementById('game-projects');
  const projectsService = new ProjectService();

  const webProjects = await projectsService.getWebProjects();
  if (webProjects.length === 0)
    webProjectsList.innerHTML = '<li><a href="#" class="dropdown-item">Próximamente...</a></li>';
  else
  {
    let projectItem = webProjects.map(p => p.toNavbarItem()).join("");
    webProjectsList.innerHTML = projectItem;
  }

  const gameProjects = await projectsService.getGameProjects();
  if (gameProjects.length === 0)
    gameProjectsList.innerHTML = '<li><a href="#" class="dropdown-item">Próximamente...</a></li>';
  else
  {
    let projectItem = gameProjects.map(p => p.toNavbarItem()).join("");
    gameProjectsList.innerHTML = projectItem;
  }
})