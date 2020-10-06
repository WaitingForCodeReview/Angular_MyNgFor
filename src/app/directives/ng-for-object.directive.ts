import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNgForObject]'
})
export class NgForObjectDirective implements OnChanges {
  @Input() appNgForObjectFrom: { [key: string]: any } | Array<number>;

  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appNgForObjectFrom && changes.appNgForObjectFrom.currentValue) {
      this.viewContainer.clear();

      if (!Array.isArray(this.appNgForObjectFrom)) {
        const propertyNames = Object.keys(changes.appNgForObjectFrom.currentValue);

        propertyNames.forEach((propertyName: string, index: number) => {
          this.viewContainer.createEmbeddedView(this.template, {
            $implicit: propertyName,
            propertyName
          });
        });
      } else {
        this.appNgForObjectFrom.forEach((item: number, index: number) => {
          this.viewContainer.createEmbeddedView(this.template, {
            $implicit: item,
            index
          });
        });
      }
    }
  }
}
