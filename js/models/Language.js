export class Language {

  constructor({ language, level }) {
    this.language = language;
    this.level = level;
  }

  toHtml() {
    return `
      <li><span class="badge">${this.language} - <strong>${this.level}</strong></span></li>
    `;
  }

}