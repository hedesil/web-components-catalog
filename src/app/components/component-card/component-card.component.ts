import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GitlabSrvService} from '../../services/gitlab.service';
import {MarkdownService} from 'ngx-markdown';
import {MessageService} from '../../services/message.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrls: ['./component-card.component.css']
})
export class ComponentCardComponent implements OnInit {
  subscription: Subscription;
  public packageContent;
  public readmeContent: string;
  public isLoading: boolean;

  constructor(private route: ActivatedRoute,
              private gitLabSrv: GitlabSrvService,
              private messageService: MessageService) {
    this.isLoading = true;
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap) {
      let gitlabId: string;
      gitlabId = this.route.snapshot.paramMap.get('id');
      this.getParentData(gitlabId);
      this.getRepositoryFile(gitlabId, 'README.md');
      this.getRepositoryFile(gitlabId, 'package.json');
    }
  }

  private getRepositoryFile(id: string, file: string): any {
    this.gitLabSrv.callGitLab('https://torredecontrol.si.orange.es/gitlab/api/v4/projects/' + id + '/repository/files/' + file + '?ref=develop')
      .subscribe(response => {
        switch (file) {
          case 'README.md':
            if (response.body.content) {
              this.readmeContent = atob(response.body.content);
              this.isLoading = false;
            } else {
              this.readmeContent = '';
            }
            break;
          case 'package.json':
            if (response.body.content) {
              this.packageContent = JSON.parse(atob(response.body.content));
              this.isLoading = false;
            } else {
              this.packageContent = '';
            }
        }
      });
  }

  private getParentData(id: string) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message.contents[0]['id'] == id) {

      } else {
        // Se limpian mensajes cuando se recibe un mensaje vacio

      }
    });
  }

}
