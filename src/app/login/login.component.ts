import { Component, OnInit } from '@angular/core';

import {SendMessagService} from '../send-messag.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkCaptcha = false;
  constructor(private  sendMessage: SendMessagService, private router: Router) {

  }

  ngOnInit() {
  }
  handleCorrectCaptcha(event) {
    this.checkCaptcha = true;
  }
  routHome(e) {
    console.log(e);
    this.sendMessage.sendMessage(e);
    this.router.navigateByUrl('');
  }
}
