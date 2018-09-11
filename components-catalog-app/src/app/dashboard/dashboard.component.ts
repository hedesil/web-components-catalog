import {Component, Input, OnInit} from '@angular/core';
import {GitlabSrvService} from "../services/gitlab-service/gitlab-srv.service";
import {Observable} from "rxjs/internal/Observable";
import {HttpResponse} from "@angular/common/http";

export interface Observer {
  notify();
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public results: any;
  protected repositories$: HttpResponse<Object>;
  headers;
  config;
  constructor(private GitLabSrv: GitlabSrvService) {
  }

  ngOnInit() {
    this.GitLabSrv.callGitLab()
      .subscribe(res => {
        const keys = res.headers.keys();
        this.headers = keys.map(
          key => `${key}: ${res.headers.get('link')}`);
      })
  }
}

