import { FieldsErrorMatcher } from './../../utils/fields-error-matcher';
import { CommonService } from '@services/common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@app/services/user.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public registerForm: FormGroup;
  public fieldsErrorMatcher = new FieldsErrorMatcher();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildRegisterFormControls();
  }

  public buildRegisterFormControls() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      typedPassword: [
        '',
        [Validators.required]
      ],
      retypedPassword: [
        '',
        [Validators.required]
      ]
    }, {
      validators: [
        this.passwordValidator
      ]
    });
  }

  public navigateToLogin() {
    this.router.navigate(['../login'], { relativeTo: this.activatedRoute });
  }

  // TODO: Need to call api and show notification when success or error
  public onRegisterFormSubmit() {
    if (!this.registerForm.invalid) {
      const registerModel = {
        firstName: this.registerForm.get('firstName').value,
        lastName: this.registerForm.get('lastName').value,
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('typedPassword').value
      };
      console.log(registerModel);
    }
    console.log('Not correct');
  }

  passwordValidator(formGroup: FormGroup) {
    const condition = formGroup.get('typedPassword').value !== formGroup.get('retypedPassword').value;
    return condition ? { passwordDoesNotMatch: true } : null;
  }

}
