import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";
import {Config} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class GitlabSrvService {
  protected gitLabUrl = 'https://torredecontrol.si.orange.es/gitlab/api/v4/projects';
  private headers: HttpHeaders = new HttpHeaders({'Private-Token': 'Jr1bgb7iA46sbYqzxjRe'});

  constructor(private http: HttpClient) {

  }

  callGitLab(): Observable<HttpResponse<Config>> {
    return this.http
      .get<Config>(this.gitLabUrl, {observe: 'response', headers: this.headers})
  }
}
