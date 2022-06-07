import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PasswordMatchDirective } from './match-password.directive';


@NgModule({
  declarations: [
    TemplateDrivenFormComponent, PasswordMatchDirective
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
  ],
  exports: [
    TemplateDrivenFormComponent
  ]
})
export class TemplateDrivenFormModule { }
