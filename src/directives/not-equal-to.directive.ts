import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

import { ComparisonDirective } from './comparison.directive';

@Directive({
  selector: '[ngNotEqualTo]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NotEqualToDirective,
      multi: true
    }
  ]
})
export class NotEqualToDirective extends ComparisonDirective {
  @Input()
  public ngNotEqualTo: any;

  constructor() {
    super('ngNotEqualTo');
  }

  validateCore(control: AbstractControl): boolean {
    return this.ngNotEqualTo !== undefined && (+control.value === +this.ngNotEqualTo);
  }
}
