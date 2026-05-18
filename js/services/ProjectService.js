import { ProjectRepository } from "../repositories/ProjectRepository.js";
import { Project } from "../models/Project.js";

export class ProjectService {
  #PROJECTS_API_URL = window.location.hostname.includes('github.io')
    ? '/portfolio/data/projects.json'
    : '/data/projects.json';

  constructor() {
    this.projectsRepository = new ProjectRepository(this.#PROJECTS_API_URL);
  }

  async getWebProjects() {
    try 
    {
      const projects = await this.projectsRepository.getAllProjects();
      return projects.map(p => new Project(p)).filter(p => p.isWebProject());
    }
    catch (error)
    {
      console.error(error);
      return [];
    }
  }

  async getGameProjects() {
    try 
    {
      const projects = await this.projectsRepository.getAllProjects();
      return projects.map(p => new Project(p)).filter(p => p.isGameProject());
    }
    catch (error)
    {
      console.error(error);
      return [];
    }
  }

  async getProjectById(id) {
    try 
    {
      const projects = await this.projectsRepository.getAllProjects();
      const projectMatch = projects.find(p => p.id == id);

      if (!projectMatch)
        throw new Error(`Projecto de ID: ${id} no encontrado`);

      return new Project(projectMatch);
    }
    catch (error)
    {
      console.error(error);
      return null;
    }
  }
}