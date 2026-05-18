import { PersonalDataService } from "./services/PersonalDataService.js";

// Cargar información cuando cargue la página
document.addEventListener('DOMContentLoaded', async () => {
  const dataService = new PersonalDataService();

  // --- EXPERIENCIA --- //
  const experienceData = await dataService.getExperience();

  if (experienceData.length === 0)
    document.getElementById('experience-msg').innerHTML = 'Ups! No se pudo obtener la experiencia :(';
  else
  {
    let experienceItems = ""; 
    experienceData.forEach(obj => experienceItems += obj.toHtml());
    document.getElementById('experience').innerHTML = experienceItems;
  }

  // --- HARD SKILLS --- //
  const hardSkillsData = await dataService.getHardSkills();

  if (hardSkillsData.length === 0)
    document.getElementById('skills-msg').innerHTML = 'Ups! No se pudieron obtener las skills, pero asumí que tengo muchas';
  else
  {
    let skillsItems = ""; 
    hardSkillsData.forEach(obj => skillsItems += obj.toHtml());
    document.getElementById('skills').innerHTML = skillsItems;
  }

  // --- LANGUAGE --- //
  const languagesData = await dataService.getLanguages();

  if (languagesData.length === 0)
    document.getElementById('languages-msg').innerHTML = 'Ups! No se pudieron obtener los idiomas';
  else
  {
    let languageItems = ""; 
    languagesData.forEach(obj => languageItems += obj.toHtml());
    document.getElementById('languages').innerHTML = languageItems;
  }
});

// Barra de búsqueda de proyectos
const searchProjectsBar = document.getElementById('projects');
const projectsFoundList = document.getElementById('projects-found');

searchProjectsBar.addEventListener('input', () => {
  const search = searchProjectsBar.value;
  projectsFoundList.style.visibility = search.trim() ? "visible" : "hidden";
});