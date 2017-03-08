import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';
import {UserService} from '../../services/user.service';
import {fadeInAnimation} from '../../route.animation';
import {AuthenticationService} from '../../services/authentication.service';


@Component({
  selector: 'ms-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [fadeInAnimation]
})


export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }


  register() {
    // TODO: Implement loading
    this.loading = true;
    this.authenticationService.register(this.model.firstname, this.model.lastname, this.model.email, this.model.password)
      .subscribe(
        (data) => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
          this.alertService.error(err);
          this.loading = false;
        });
  }
}
