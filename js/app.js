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
});