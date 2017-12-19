import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReCaptchaModule} from 'angular2-recaptcha';
import {LoginComponent} from './login/login.component';
import {SendMessagService} from './send-messag.service';
import {BaseComponent} from './base/base.component';
import {CookieService} from 'ngx-cookie-service';
import {Ng2DeviceDetectorModule} from 'ng2-device-detector';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {AuthService} from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    BaseComponent
  ],
  imports: [
    Ng2DeviceDetectorModule.forRoot(),
    HttpModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    ReCaptchaModule,
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // {path: '', component: HomeComponent},
      {
        path: '', component: BaseComponent, children: [
        {path: '', component: HomeComponent, pathMatch: 'full'},
        {path: 'register', component: RegisterComponent},
        {path: 'login', component: LoginComponent}
      ]
      }
    ])
  ],
  providers: [SendMessagService,
    CookieService,
    AuthService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
