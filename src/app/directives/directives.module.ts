import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { HideAfterDirective } from './hide-after/hide-after.directive';
import { MyIfDirective } from './my-if/my-if.directive';
import { MyForDirective } from './my-for/my-for.directive';



@NgModule({
  declarations: [
    DirectivesComponent,
    HideAfterDirective,
    MyIfDirective,
    MyForDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
