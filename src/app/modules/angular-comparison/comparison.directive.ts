import { Directive, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, Validator } from '@angular/forms';

export abstract class ComparisonDirective implements Validator, OnChanges {
  private ctrl: AbstractControl;

  constructor(private key: string) {
  }

  validate(control: AbstractControl): {[key: string]: any}|null {
    this.ctrl = control;

    return !this.validateCore(control) ? this.createErrorObject() : null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ctrl) {
      this.ctrl.updateValueAndValidity();
    }
  }

  private createErrorObject(): {[key: string]: any} {
    const error: {[key: string]: any} = {};

    error[this.key] = true;

    return error;
  }

  abstract validateCore(control: AbstractControl): boolean;
}
