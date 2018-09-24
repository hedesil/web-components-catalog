import {Component, Input, OnInit} from '@angular/core';
import {GitlabSrvService} from '../services/gitlab-service/gitlab-srv.service';
import {Observable} from 'rxjs/internal/Observable';
import {HttpResponse} from '@angular/common/http';
import {AppConstants} from '../constants/app.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  _baseGitLab: string;
  _gitLabProjects: string;
  public results: any;
  protected repositories$: HttpResponse<Object>;

  constructor(private GitLabSrv: GitlabSrvService) {
    this._baseGitLab = AppConstants.baseGitLab;
    this._gitLabProjects = AppConstants.gitLabProjects;
  }

  ngOnInit() {
    this.GitLabSrv.callGitLab(this._baseGitLab + this._gitLabProjects)
      .subscribe(
        repositories => this.results = repositories
      );
  }

}
