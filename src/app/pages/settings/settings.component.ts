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

  currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')).data;
  }

  ngOnInit() {
  }

}
