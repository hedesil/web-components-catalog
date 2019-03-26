import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'trimGitRepoName'
})
export class TrimGitRepoNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let nomenclature1Pattern: string = '.*_'; // Coge cualquier cosa hasta antes del ultimo guion bajo
    let nomenclature2Pattern: string = '.*_FUN'; //Coge cualquier cosa hasta el ultimo guion + el FUN que a veces ponen
    let regexObj; // Se instancia un nuevo objeto RegExp().
    let result: string;
    switch (!value.includes('_FUN') && !value.includes('_ANGULAR_')) {
      case true:
        regexObj = new RegExp(nomenclature1Pattern, 'g');
        break;
      case false:
        if (value.includes('_ANGULAR_')) {
          regexObj = new RegExp('.*_ANGULAR_', 'g');
        } else {
          regexObj = new RegExp(nomenclature2Pattern, 'g');
        }
        break;
      default:
        regexObj = new RegExp(nomenclature1Pattern, 'g');
    }
    result = value.replace(regexObj, '');
    return result;

  }


}
