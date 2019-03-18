import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class MessageService {
  private subject = new Subject<any>();

  sendMessage(message: string, messageContent: string, component: string) {
    this.subject.next({
      text: message,
      content: messageContent,
      component: component
    });
  }

  clearMessages() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}

