import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { ComparisonDirective } from './comparison.directive';

@Directive({
  selector: '[ngLowerThan]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LowerThanDirective,
      multi: true
    }
  ]
})
export class LowerThanDirective extends ComparisonDirective {
  @Input()
  public ngLowerThan: any;

  constructor() {
    super('ngLowerThan');
  }

  validateCore(control: AbstractControl): boolean {
    return this.ngLowerThan !== undefined && (+control.value < +this.ngLowerThan);
  }
}
