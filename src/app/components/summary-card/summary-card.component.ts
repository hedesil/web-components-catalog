import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MessageService} from '../../services/message.service';
import {GitlabSrvService} from '../../services/gitlab.service';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  subscription: Subscription;
  results: any;
  packageContent;
  isFinished: boolean = false;

  constructor(private messageService: MessageService, private gitLabSrv: GitlabSrvService) {
    // Suscripcion al componente main-dashboard
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.results = message.contents;
        this.messages.push(message);
      } else {
        // Se limpian mensajes cuando se recibe un mensaje vacio
        this.messages = [];
      }
    });
  }

  ngOnInit() {
    console.log('emosido instanciado');
  }

  ngOnDestroy(): void {
    // Se elimina la suscripcion para asegurar que no haya perdidas de memoria
    this.subscription.unsubscribe();
  }

  subscribeToMessage() {
    // Suscripcion al componente main-dashboard
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.results = message.contents;
        this.messages.push(message);
      } else {
        // Se limpian mensajes cuando se recibe un mensaje vacio
        this.messages = [];
      }
    });
  }

  getPackageInformation(id) {
    this.gitLabSrv.callGitLab('https://torredecontrol.si.orange.es/gitlab/api/v4/projects/' + id + '/repository/files/package.json?ref=develop')
      .subscribe(response => {
        if (response.body.content) {
          this.packageContent = JSON.parse(atob(response.body.content));
        }
      });
  }
}

