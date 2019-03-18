// Clase que contiene las constantes de las llamadas a los backends

export class AppConstants {

  public static get baseGitLab(): string {
    return 'https://torredecontrol.si.orange.es/gitlab/';
  }

  public static get gitLabProjects(): string {
    return 'api/v4/projects';
  }


}
