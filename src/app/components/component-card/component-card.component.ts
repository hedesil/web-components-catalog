import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitlabSrvService} from '../../services/gitlab.service';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrls: ['./component-card.component.css']
})
export class ComponentCardComponent implements OnInit {
  gitlabId: any;
  public readmeContent: string;
  constructor(private route: ActivatedRoute, private gitLabSrv: GitlabSrvService) {

  }

  ngOnInit() {

    if(this.route.snapshot.paramMap){
      this.gitlabId = this.route.snapshot.paramMap.get("id");
      let readmeBase64;
      this.gitLabSrv.callGitLab('https://torredecontrol.si.orange.es/gitlab/api/v4/projects/'+ this.gitlabId + '/repository/files/README.md?ref=develop')
        .subscribe(response => {
          readmeBase64 = response.body.content;
          this.readmeContent = atob(readmeBase64);
          });
    }

  }

}
