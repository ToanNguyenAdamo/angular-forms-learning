import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { TemplateDrivenFormModule } from './template-driven-form/template-driven-form.module';



@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    TemplateDrivenFormModule,
    ReactiveFormModule,
  ]
})
export class FormsModule { }
