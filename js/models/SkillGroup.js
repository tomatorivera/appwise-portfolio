export class SkillGroup {

  constructor({ area, skills }) {
    this.area = area;
    this.skills = skills;
  }

  toHtml() {
    return `
      <li class="skills-item">
        <h3 class="yeseva-one">${this.area}</h3>
        <div class="skills-group">
          ${this.skills.map(skill => '<span class="badge">' + skill + '</span>').join("")}
        </div>
      </li>
    `;
  }

}