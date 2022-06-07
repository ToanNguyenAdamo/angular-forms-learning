import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myFor]',
})
export class MyForDirective implements OnInit {
  @Input() myForOf: Array<any> = [];
  @Input() myForCount: number = -1;
  constructor(
    private vcr: ViewContainerRef,
    private templateRef: TemplateRef<unknown>
  ) {}
  ngOnInit(): void {
    this.vcr.clear();
    for (const element of this.myForOf) {
      const index = this.myForOf.indexOf(element);
      if(index < this.myForCount || this.myForCount < 0)
      this.vcr.createEmbeddedView(this.templateRef,  {
        $implicit: element,
        index1: index,
      });
      
    }
  }
}
