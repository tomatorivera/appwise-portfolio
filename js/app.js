import { PersonalDataService } from "./services/PersonalDataService.js";

// Cargar información cuando cargue la página
document.addEventListener('DOMContentLoaded', async () => {
  const dataService = new PersonalDataService();

  try
  {
    // --- EXPERIENCIA --- //
    const experienceData = await dataService.getExperience();

    if (experienceData.length === 0)
      document.getElementById('experience-msg').innerHTML = 'Ups! No se pudo obtener la experiencia :(';
    else
    {
      let experienceItems = ""; 
      experienceData.forEach(obj => {
        experienceItems += `
          <li class="experience-item">
            <div class="experience-item-title">
              <h3 class="yeseva-one"><span>${obj.employeer}</span> — ${obj.jobName}</h3>
              <p>${obj.startDate} - ${obj.endDate}</p>
            </div>
            <p>${obj.jobDescription}</p>
          </li>
        `;
      });
      document.getElementById('experience').innerHTML = experienceItems;
    }
  }
  catch (error)
  {
    // Todo: modificar mensaje de la sección
    alert(error.message);
    console.error(error);
  }
});