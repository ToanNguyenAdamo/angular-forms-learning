import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormsComponent
  },
  {
    path: 'directive',
    component: DirectivesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
