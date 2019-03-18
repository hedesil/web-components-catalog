import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {SearchService} from '../../services/search.service';
import {MessageService} from '../../services/message.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  public isCollapsed = true;
  public results: any;
  public queryField: FormControl = new FormControl();

  constructor(private _searchService: SearchService, private messageService: MessageService) { }

  ngOnInit() {
    this.queryField.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(keyValue =>
          this._searchService.search(keyValue)
        )
      )
      .subscribe(response => {
        this.sendMessage('repositories', response.body, 'app-searchbox');
      });
  }

  sendMessage(messageTitle, result, componentName): void {
    // Se manda un mensaje a los suscriptores por medio de un subject observable
    this.messageService.sendMessage(messageTitle, result, componentName);
    console.log('enviado mensaje ' + messageTitle)
  }

  clearMessages(): void {
    this.messageService.clearMessages();
  }

}
