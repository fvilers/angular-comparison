import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { ComparisonDirective } from './comparison.directive';

@Directive({
  selector: '[ngLowerThanOrEqual]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LowerThanOrEqualDirective,
      multi: true
    }
  ]
})
export class LowerThanOrEqualDirective extends ComparisonDirective {
  @Input()
  public ngLowerThanOrEqual: any;

  constructor() {
    super('ngLowerThanOrEqual');
  }

  validateCore(control: AbstractControl): boolean {
    return control.value < this.ngLowerThanOrEqual;
  }
}
