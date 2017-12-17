import {Component, OnInit} from '@angular/core';
import {SendMessagService} from '../send-messag.service';
import {Router} from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private  sendMessage: SendMessagService, private router: Router) {

  }

  routeHome() {
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}
