import { ProjectRepository } from "../repositories/ProjectRepository.js";
import { Project } from "../models/Project.js";

export class ProjectService {
  #PROJECTS_API_URL = '/data/projects.json';

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
      console.log(error);
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
      console.log(error);
      return [];
    }
  }
}