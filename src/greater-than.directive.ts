import { Directive, OnChanges, Input, SimpleChanges } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

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
export class GreaterThanDirective implements Validator, OnChanges {
  @Input()
  public ngGreaterThan: any;

  private ctrl: AbstractControl;
  
  validate(control: AbstractControl): {[key: string]: any}|null {
    this.ctrl = control;
    
    if (this.ngGreaterThan !== undefined && (+control.value > +this.ngGreaterThan)) {
      return null;
    }
    
    return { 'ngGreaterThan': true };
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (this.ctrl) {
      this.ctrl.updateValueAndValidity();
    }
  }
}
