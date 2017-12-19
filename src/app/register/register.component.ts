import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {AppComponent} from '../app.component';
import {CookieService} from 'ngx-cookie-service';
import * as moment from 'jalali-moment';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {ViewContainerRef} from '@angular/core';
import {Ng2DeviceService} from 'ng2-device-detector';

declare var jQuery: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checkCaptcha = false;
  waiting = false;
  deviceInfo;
  device;
  ip;
  tell;
  tellLength

  constructor(private router: Router, private auth: AuthService, private http: Http, private urlRequest: AppComponent, private cookieService: CookieService, public toastr: ToastsManager, vcr: ViewContainerRef, private deviceService: Ng2DeviceService) {
    let testScript = document.createElement('script');
    testScript.setAttribute('id', 'testScript');
    testScript.setAttribute('src', 'assets/js/intlTelInput.min.js');
    document.body.appendChild(testScript);
    testScript = document.createElement('script');
    testScript.setAttribute('id', 'testScript2');
    testScript.setAttribute('src', 'assets/js/callTelInput.js');
    document.body.appendChild(testScript);
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

  register(form) {
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
      '&expires_at=' + expire +
      '&first_name=' +
      form.controls['firstName'].value +
      '&last_name=' +
      form.controls['lastName'].value +
      '&user_name=' +
      form.controls['userName'].value +
      '&cell=' +
      jQuery('#demo').val();
    /*get login information*/
    this.http.post(this.auth.baseUrl + '/Api/register', post, options).subscribe(response => {
      if ('token' in response.json()) {
        this.waiting = false;
        this.auth.setUserLoggedIn(response.json().token);
        this.toastr.success('your login is completed');
      } else if ('error' in response.json()) {
        this.waiting = false;
        this.toastr.error('sorry we have some error please try again');
      }
    }, error => {
      this.waiting = false;
      this.toastr.error('sorry we have some error please try again');
    });
  }

  getTell() {
    jQuery(document).ready(function () {
      var countryData = jQuery("#demo").intlTelInput("getSelectedCountryData");
      var val = jQuery('#demo').val();
      console.log(val);
      console.log(countryData);

    });
  }

  myFunction() {
    this.tell = jQuery('#demo').val();
    this.tellLength = jQuery('#demo').val().length;
  }

  handleCorrectCaptcha(event) {
    this.checkCaptcha = true;
  }

  ngOnInit() {

  }

}
