import { Directive, OnChanges, Input, SimpleChanges } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

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
export class LowerThanDirective implements Validator, OnChanges {
  @Input()
  public ngLowerThan: any;

  private ctrl: AbstractControl;
  
  validate(control: AbstractControl): {[key: string]: any}|null {
    this.ctrl = control;
    
    if (this.ngLowerThan !== undefined && (+control.value < +this.ngLowerThan)) {
      return null;
    }
    
    return { 'ngLowerThan': true };
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (this.ctrl) {
      this.ctrl.updateValueAndValidity();
    }
  }
}
