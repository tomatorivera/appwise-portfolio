export class PersonalDataRepository {
  static PERSONAL_DATA_URL = './data/personal-data.json';

  static async getExperience() {
    const response = await fetch(this.PERSONAL_DATA_URL);
    if (!response.ok)
      throw new Error(`Ocurrió un error obteniendo la experiencia - STATUS: ${response.statusText}`);

    const data = await response.json();
    return data.experience;
  }

  static async getHardSkills() {
    const response = await fetch(this.PERSONAL_DATA_URL);
    if (!response.ok)
      throw new Error(`Ocurrió un error obteniendo las hard skills - STATUS: ${response.statusText}`);

    const data = await response.json();
    return data.hardSkills;
  }

  static async getLanguages() {
    const response = await fetch(this.PERSONAL_DATA_URL);
    if (!response.ok)
      throw new Error(`Ocurrió un error obteniendo los lenguajes - STATUS: ${response.statusText}`);

    const data = await response.json();
    return data.languages;
  }
}