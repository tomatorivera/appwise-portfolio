import { ProjectService } from "./services/ProjectService.js";
import { Project } from "./models/Project.js";

const projectService = new ProjectService();
const defaultProject = new Project({
  id: 0,
  name: "Portfolio de proyectos",
  description: "Este proyecto lo realizamos para resumir en única página todos los proyectos web y de videojuegos realizados en los primeros módulos de Appwise Academy. Además, aproveché este mismo proyecto para aplicar todo lo aprendido hasta aquí: maquetación con HTML semántico, CSS y Javascript aplicando modularización.",
  type: "web",
  technologies: ["HTML", "CSS", "Javascript", "JSON"],
  repositoryLink: "https://github.com/tomatorivera/appwise-portfolio",
  deployLink: ""
});

document.addEventListener('DOMContentLoaded', async () => {
  // Obtener proyecto a buscar según los parámetros de URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id') || -1;
  const project = await projectService.getProjectById(projectId);

  renderProject((!project)
    ? defaultProject
    : project
  );
});

// Elementos HTML
const labels = document.getElementById('project-labels');
const name = document.getElementById('project-name');
const description = document.getElementById('project-description');
const repository = document.getElementById('project-repo');
const deploy = document.getElementById('project-deploy');

function renderProject(project) {
  // Labels
  labels.innerHTML = `<span class="badge badge--naranja badge--conpunto">#${(project.isWebProject()) ? "ProyectoWeb" : "ProyectoVideojuego"}</span>`;
  project.technologies.forEach(t => {
    labels.innerHTML += `
      <span class="badge">${t}</span>
    `;
  });

  // Nombre y descripción
  name.innerHTML = project.name;
  description.innerHTML = project.description;

  // Repositorio y vista previa
  repository.innerHTML = project.hasPublicRepository() ? `
    <a
      class="project-link" 
      target="_blank" 
      href="${project.repositoryLink}"
    >
      ${feather.icons['external-link'].toSvg()}
      <span>Visitar repositorio</span>
    </a>
  ` : '';

  deploy.innerHTML = project.isDeployed() 
    ? `
      <iframe 
        src="${project.deployLink}" 
        frameborder="0"
      ></iframe>
    `
    : '<p>Oops... Parece que no tenemos vista previa.</p>';
}