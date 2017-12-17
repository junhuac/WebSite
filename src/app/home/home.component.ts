import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {SendMessagService} from '../send-messag.service';

declare var jQuery: any;
import {Router} from '@angular/router';
import {NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private  sendMessage: SendMessagService, private router: Router) {
    let testScript = document.createElement('script');
    testScript.setAttribute('id', 'testScript');
    testScript.setAttribute('src', 'assets/js/particles.min.js');
    document.body.appendChild(testScript);
    testScript = document.createElement('script');
    testScript.setAttribute('id', 'testScript2');
    testScript.setAttribute('src', 'assets/js/app.js');
    document.body.appendChild(testScript);
    testScript = document.createElement('script');
    testScript.setAttribute('id', 'testScript3');
    testScript.setAttribute('src', 'assets/js/script.js');
    document.body.appendChild(testScript);
  }

  ngOnInit() {
  }

}
