import {Component, OnInit} from '@angular/core';

import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
