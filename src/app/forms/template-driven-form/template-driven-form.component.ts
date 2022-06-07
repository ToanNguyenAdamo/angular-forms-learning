import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  tpdForm: any;
  data: any =  {
    phone: 'abc'
  }

  constructor() {}

  ngOnInit(): void {}
  submitted = false;
  onSubmit(form: any) {
    this.submitted = true;

    console.log(form);
  }

  resetForm() {}
}
