import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checkCaptcha = false;
  constructor( private router: Router) {
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
    jQuery(document).ready(function () {
      var countryData = jQuery("#demo").intlTelInput("getSelectedCountryData");
      var val = jQuery('#demo').val();
      console.log(val);
      console.log(countryData);

    });

  }

  handleCorrectCaptcha(event) {
    this.checkCaptcha = true;
  }

  ngOnInit() {

  }

}
