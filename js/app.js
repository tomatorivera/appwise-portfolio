import { PersonalDataRepository } from "./repositories/PersonalDataRepository.js";

// Cargar información cuando cargue la página
document.addEventListener('DOMContentLoaded', async () => {
  try
  {
    // --- EXPERIENCIA --- //
    const experienceData = await PersonalDataRepository.getExperience();
    const experienceList = document.getElementById('experience');
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
    experienceList.innerHTML = experienceItems;
  }
  catch (error)
  {
    // Todo: modificar mensaje de la sección
    alert(error.message);
    console.error(error);
  }
});