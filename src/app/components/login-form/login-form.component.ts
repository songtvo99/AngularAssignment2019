import { RoutingUrl } from '@constants/url-routing.constant';
import { AuthenticationService } from '@services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.buildLoginForm();
  }

  private buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public login() {
    if (!this.loginForm.invalid) {
      const loginModel = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      };

      this.authenticationService
        .login(loginModel)
        .pipe(first())
        .subscribe(data => this.router.navigate['/bookstore']);
    }
  }

  public navigateToRegister() {
    const registerUrl = RoutingUrl.registerUrl();
    this.router.navigate([registerUrl], { relativeTo: this.route });
  }
}
