export class Project {

  constructor({ id, name, description, type, technologies, repositoryLink, deployLink }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.technologies = technologies;
    this.repositoryLink = repositoryLink;
    this.deployLink = deployLink;
  }

  toNavbarItem() {
    return `
      <li>
        <a 
          href="./html/project.html?id=${this.id}" 
          class="dropdown-item"
        >
          ${this.name}
        </a>
      </li>
    `;
  }

  isWebProject() {
    return this.type === 'web';
  }

  isGameProject() {
    return this.type === 'videojuego';
  }

  isDeployed() {
    return this.deployLink != '';
  }

  hasPublicRepository() {
    return this.repositoryLink != '';
  }

}