import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {AlertService} from '../../services/alert.service';
import {fadeInAnimation} from '../../route.animation';
import {MdSnackBar} from "@angular/material";


@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar: MdSnackBar) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.isLoading = true;

    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.router.navigateByUrl(this.returnUrl);
        },
        error => {
          console.log(error);
          this.snackBar.open(error.message, '', {
            duration: 6000
          });
          this.isLoading = false;
        });
  }

}
