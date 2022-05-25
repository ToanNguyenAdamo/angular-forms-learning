import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  rfForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rfForm = this.createForm();
    // this.rfForm.controls.phone.setValue('12345');
  }
  createForm(): FormGroup {
    return this.fb.group({
      fullName: ['', Validators.required],
      phone: ['1', Validators.pattern('^[0-9]*$')],
      email: ['', Validators.required],
      passwords: this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(6)]],
          rePassword: ['', [Validators.required]],
        },
        { validators: this.confirmPasswordValidator('password', 'rePassword') }
      ),
      selected: ['', [Validators.required, Validators.pattern('valid')]],
      radio: ['', [Validators.required]],
    });
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;

    console.log(this.rfForm);
  }

  confirmPasswordValidator(
    controlName: string,
    matchingControlName: string
  ): ValidatorFn {
    return (controls: AbstractControl) => {
      let control = controls.get(controlName);
      let matchingControl = controls.get(matchingControlName);
      if (!control || !matchingControl) {
        return null;
      }
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmPasswordValidator
      ) {
        return null;
      }
      if (control.value !== matchingControl.value) {
        controls
          .get(matchingControlName)
          ?.setErrors({ confirmPasswordValidator: true });
        return { confirmPasswordValidator: true };
      } else {
        return null;
      }
    };
  }
  @ViewChild(FormGroupDirective) myForm: any;
  resetForm() {
    this.submitted = false;
    this.myForm?.resetForm();
  }
}
