import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

export class FieldsErrorMatcher extends ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective| NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}
