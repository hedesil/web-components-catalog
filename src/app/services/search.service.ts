import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../constants/api-constants.constant';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // Constantes del API
  headers: HttpHeaders = new HttpHeaders();
  baseUrl: string = AppConstants.baseGitLab + AppConstants.gitLabProjects;
  queryUrl: string = '?search=';


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Private-Token': 'Jr1bgb7iA46sbYqzxjRe'});
  }

  // Llamada http al API de GitLab
  search(queryString: string) {
    return this.http.get(this.baseUrl + this.queryUrl + queryString, {observe: 'response', headers: this.headers});
   // return this.http.get('./assets/repositoryList.json'); // Datos mockeados
  }
}
