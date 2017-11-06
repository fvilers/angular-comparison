import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { ComparisonDirective } from './comparison.directive';

@Directive({
  selector: '[ngEqualTo]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EqualToDirective,
      multi: true
    }
  ]
})
export class EqualToDirective extends ComparisonDirective {
  @Input()
  public ngEqualTo: any;

  constructor() {
    super('ngEqualTo');
  }

  validateCore(control: AbstractControl): boolean {
    return control.value === this.ngEqualTo;
  }
}
