export class ProjectRepository {

  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async getAllProjects() {
    const response = await fetch(this.apiUrl);
    if (!response.ok)
      throw new Error(`Ocurrió un error obteniendo la información - STATUS: ${response.statusText}`);

    const data = await response.json();
    return data;
  }

}