import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  firstState = true;

  forArray = [
    {
      title: 'hello',
    },
    {
      title: 'world',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
