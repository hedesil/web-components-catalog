import {Component} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {AppConstants} from '../constants/app.constants';
import {GitlabSrvService} from '../services/gitlab-service/gitlab-srv.service';

@Component({
  selector: 'app-principal-dashboard',
  templateUrl: './principal-dashboard.component.html',
  styleUrls: ['./principal-dashboard.component.css']
})
export class PrincipalDashboardComponent {
  _gitLabProjects: string;
  _baseGitLab: string;
  results: any;
  cards: any;

  constructor(private breakpointObserver: BreakpointObserver, private GitLabSrv: GitlabSrvService) {
    this._baseGitLab = AppConstants.baseGitLab;
    this._gitLabProjects = AppConstants.gitLabProjects;
  }

  ngOnInit() {
    this.GitLabSrv.callGitLab(this._baseGitLab + this._gitLabProjects + '?search=_ANG_')
      .subscribe(
        cards => this.cards = cards.body
      );
  }

}
