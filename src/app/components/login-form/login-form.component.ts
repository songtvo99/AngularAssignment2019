import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
  }

  public login(loginForm) {

  }

  public navigateToRegister() {
    this.router.navigate(['../register'], { relativeTo: this.route });
  }

}
