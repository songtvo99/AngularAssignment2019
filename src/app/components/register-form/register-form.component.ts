import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@app/services/user.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public navigateToLogin() {
    this.router.navigate(['../login'], { relativeTo: this.activatedRoute });
  }

  //TODO: Need to call api and show notification when success or error
  public submitToRegister(registerForm: Form) {
    return false;
  }

}
