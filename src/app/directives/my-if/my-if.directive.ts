import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myIf]',
})
export class MyIfDirective implements OnInit {
  _myIf: boolean = false;
  @Input()
  set myIf(value: boolean) {
    this._myIf = value;
    this.handleLogic(this._myIf);
  }

  get myIf() {
    return this._myIf;
  }

  @Input() myIfElse1: TemplateRef<unknown> | null = null;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.handleLogic(this.myIf);
  }

  handleLogic(show: boolean) {
    this.viewContainerRef.clear();
    if (show) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
      if (this.myIfElse1) {
        this.viewContainerRef.createEmbeddedView(this.myIfElse1);
      }
    }
  }
}
