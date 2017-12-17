import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class SendMessagService {
  urlRequest = 'http://storeapi.swiftpole.com';
  imgUrlPrefix = 'http://storeapi.swiftpole.com/images/Products/';
  private subject = new Subject<any>();

  constructor() {
  }

  sendMessage(message: string) {
    this.subject.next({text: message});
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
















