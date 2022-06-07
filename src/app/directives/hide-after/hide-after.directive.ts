import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[hideAfter]',
})
export class HideAfterDirective implements OnInit {
  @Input() hideAfter: number = 0;

  interval: number = 0;
  countTime = 0;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
  ngOnInit(): void {
    this.doHideElem();
  }

  doHideElem() {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    setInterval(() => {
      this.countTime += 1000;
      if(this.countTime > this.hideAfter){
        this.viewContainerRef.clear();
      }
    }, 1000);
  }
}
