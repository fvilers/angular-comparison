import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { ComparisonDirective } from './comparison.directive';

@Directive({
  selector: '[ngGreaterThan]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: GreaterThanDirective,
      multi: true
    }
  ]
})
export class GreaterThanDirective extends ComparisonDirective {
  @Input()
  public ngGreaterThan: any;

  constructor() {
    super('ngGreaterThan');
  }

  validateCore(control: AbstractControl): boolean {
    return control.value > this.ngGreaterThan;
  }
}
