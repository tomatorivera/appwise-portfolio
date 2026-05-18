import { Experience } from "../models/Experience.js";
import { Language } from "../models/Language.js";
import { SkillGroup } from "../models/SkillGroup.js";
import { PersonalDataRepository } from "../repositories/PersonalDataRepository.js";

export class PersonalDataService {
  #PERSONAL_DATA_API_URL = './data/personal-data.json';

  constructor() {
    this.dataRepository = new PersonalDataRepository(this.#PERSONAL_DATA_API_URL);
  }

  async getExperience() {
    try
    {
      const personalData = await this.dataRepository.getAllData();
      return personalData.experience.map(obj => new Experience(obj));
    }
    catch (error)
    {
      console.error(error);
      return [];
    }
  }

  async getHardSkills() {
    try
    {
      const personalData = await this.dataRepository.getAllData();
      return personalData.hardSkills.map(obj => new SkillGroup(obj));
    }
    catch (error)
    {
      console.error(error);
      return [];
    }
  }

  async getLanguages() {
    try
    {
      const personalData = await this.dataRepository.getAllData();
      return personalData.languages.map(obj => new Language(obj));
    }
    catch (error)
    {
      console.error(error);
      return [];
    }
  }

}