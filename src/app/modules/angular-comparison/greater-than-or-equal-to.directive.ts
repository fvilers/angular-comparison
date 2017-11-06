import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { ComparisonDirective } from './comparison.directive';

@Directive({
  selector: '[ngGreaterThanOrEqualTo]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: GreaterThanOrEqualToDirective,
      multi: true
    }
  ]
})
export class GreaterThanOrEqualToDirective extends ComparisonDirective {
  @Input()
  public ngGreaterThanOrEqualTo: any;

  constructor() {
    super('ngGreaterThanOrEqualTo');
  }

  validateCore(control: AbstractControl): boolean {
    return control.value >= this.ngGreaterThanOrEqualTo;
  }
}
