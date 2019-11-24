import { CommonService } from '@services/common.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

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
    private commonService: CommonService,
    private userService: UserService,
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
      console.log('loginModel:', loginModel);
    } else {
      console.log('error');
    }
  }

  public navigateToRegister() {
    this.router.navigate(['../register'], { relativeTo: this.route });
  }
}
