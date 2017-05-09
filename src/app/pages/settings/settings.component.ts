import { Component, OnInit } from '@angular/core';
import {routeAnimation} from "../../route.animation";
import {User} from "../../models/user";

@Component({
  selector: 'ms-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  host: {
    '[@routeAnimation]': 'true'
  },
  animations: [ routeAnimation ]
})
export class SettingsComponent implements OnInit {

  currentUser: any;

  constructor() {
    console.log(localStorage.getItem('user'));
    this.currentUser = {
      firstname: localStorage.getItem('user.firstname'),
      lastname: localStorage.getItem('user.lastname'),
      email: localStorage.getItem('user.lastname')
  }
  }

  ngOnInit() {
  }

}
