import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Http, Response, RequestOptions, Headers} from '@angular/http';


@Injectable()
export class AuthService {
  public baseUrl = '';

  constructor(public cookieService: CookieService) {
  }

  setUserLoggedIn(token) {
    if (this.cookieService.get('authToken') !== '') {
    } else {
      var d = new Date();
      d.setTime(d.getTime() + ( 24 * 60 * 60 * 1000));
      this.cookieService.set('authToken', token, d, '/');
    }
  }

  getIsUserLoggedIn() {
    if (this.cookieService.get('authToken') !== '') {
      return true;
    } else {
      return false;
    }
  }


  createGetOption() {
    let myParams = new URLSearchParams();
    myParams.append('AuthId', this.cookieService.get('authToken'));
    let options = new RequestOptions({params: myParams});
    return options;
  }

  createPostOption() {
    var header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    let options = new RequestOptions({headers: header});
    return options;
  }

  setUserLogOut() {
    this.cookieService.deleteAll('/');
  }

}
