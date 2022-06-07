import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[passwordMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatchDirective,
      multi: true,
    },
  ],
})
export class PasswordMatchDirective {
  @Input('mustMatch') mustMatch: string[] = [];

  validate(c: AbstractControl): ValidationErrors | null {
    return validatePassword(this.mustMatch[0], this.mustMatch[1])(c);
  }
}

export function validatePassword(target: string, match: string): ValidatorFn {
  return (control: AbstractControl) => {
    let isValid = false;
    if (control && control instanceof FormGroup) {
      let group = control as FormGroup;
      if (group.controls[target] && group.controls[match]) {
        isValid = group.controls[target].value == group.controls[match].value;
      }
    }
    if (isValid) {
      return null;
    } else {
      let group = control as FormGroup;
      group.controls[match]?.setErrors({ confirmPasswordValidator: true });
      return { confirmPasswordValidator: true };
    }
  };
}
