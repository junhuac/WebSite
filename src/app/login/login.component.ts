import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {AppComponent} from '../app.component';
import {CookieService} from 'ngx-cookie-service';
import * as moment from 'jalali-moment';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {ViewContainerRef} from '@angular/core';
import {Ng2DeviceService} from 'ng2-device-detector';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkCaptcha = false;
  waiting = false;
  deviceInfo;
  device;
  ip;
  constructor( private router: Router, private auth: AuthService, private http: Http, private urlRequest: AppComponent, private cookieService: CookieService, public toastr: ToastsManager, vcr: ViewContainerRef, private deviceService: Ng2DeviceService) {
    this.toastr.setRootViewContainerRef(vcr);
    http.get('https://jsonip.com/').subscribe(response => {
      if (response.json()) {
        this.ip = response.json().ip;
      }
    }, error => {
      this.toastr.error('sorry we have some problem please try again');
    });
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.device = this.deviceInfo.browser + ' ' + this.deviceInfo.os_version;
  }
  login(form) {
    this.waiting = true;
    let expire;

    expire = moment().add('1', 'days').format('YYYY-MM-DD');
    var header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    let options = new RequestOptions({headers: header});
    let post = 'email='
      + form.controls['email'].value +
      '&password='
      + form.controls['password'].value +
      '&ip=' +
      this.ip +
      '&device=' +
      this.device +
      '&expires_at=' + expire;
    /*get login information*/
    this.http.post(this.auth.baseUrl + '/Api/login', post, options).subscribe(response => {
      if ('token' in response.json()) {
        this.waiting = false;
        this.auth.setUserLoggedIn(response.json().token);
        // this.router.navigateByUrl('dashboard');
        this.toastr.success('your login is completed');
      } else if ('error' in response.json()) {
        this.waiting = false;
        this.toastr.error('your email or password is incorrect');
      }
    }, error => {
      this.waiting = false;
      this.toastr.error('sorry we have some error please try again');
    });
  }

  isLogin() {
    return this.auth.getIsUserLoggedIn();
  }
  logOut() {
    this.waiting = true;
    // this.myStorage.setItem('logoutClick', 'click');
    var header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    let options = new RequestOptions({headers: header});
    let post = 'token=' + this.cookieService.get('authToken');
    this.http.post( this.auth.baseUrl + '/Api/logout', post, options).subscribe(response => {
      if (response.json() == true) {
        this.auth.setUserLogOut();
        // this.router.navigateByUrl('');
        this.toastr.success('ok');
      } else {
        this.waiting = false;
        this.toastr.error('sorry we have some problem please try again');
      }
    }, error => {
      this.waiting = false;
      this.toastr.error('sorry we have some problem please try again');
    });
  }

  ngOnInit() {
  }
  handleCorrectCaptcha(event) {
    this.checkCaptcha = true;
  }
}
