export class Experience {

  constructor({ employeer, jobName, jobDescription, startDate, endDate }) {
    this.employeer = employeer;
    this.jobName = jobName;
    this.jobDescription = jobDescription;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  toHtml() {
    return `
      <li class="experience-item">
        <div class="experience-item-title">
          <h3 class="yeseva-one"><span>${this.employeer}</span> — ${this.jobName}</h3>
          <p>${this.startDate} - ${this.endDate}</p>
        </div>
        <p>${this.jobDescription}</p>
      </li>
    `;
  }

}