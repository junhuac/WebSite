import {Component, OnInit} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checkCaptcha = false;

  constructor() {
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
    const tel = jQuery("#demo").intlTelInput("isValidNumber");
    console.log(tel);
  }

  handleCorrectCaptcha(event) {
    this.checkCaptcha = true;
  }

  ngOnInit() {

  }

}
