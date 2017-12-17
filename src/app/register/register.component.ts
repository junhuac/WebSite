import {Component, OnInit} from '@angular/core';
import {SendMessagService} from '../send-messag.service';
import {Router} from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checkCaptcha = false;

  constructor(private  sendMessage: SendMessagService, private router: Router) {
    let testScript = document.createElement('script');
    testScript.setAttribute('id', 'testScript');
    testScript.setAttribute('src', 'assets/js/intlTelInput.min.js');
    document.body.appendChild(testScript);
    testScript = document.createElement('script');
    testScript.setAttribute('id', 'testScript2');
    testScript.setAttribute('src', 'assets/js/callTelInput.js');
    document.body.appendChild(testScript);

  }

  getTell() {
    const tel = jQuery("#demo").intlTelInput("getNumber");
    alert(tel);
    console.log(tel);
  }

  routHome(e) {
    console.log(e + 'send');
    this.sendMessage.sendMessage(e);
    this.router.navigateByUrl('');
  }
  handleCorrectCaptcha(event) {
    this.checkCaptcha = true;
  }

  ngOnInit() {

  }

}
