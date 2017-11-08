import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqualToDirective } from './equal-to.directive';
import { GreaterThanOrEqualToDirective } from './greater-than-or-equal-to.directive';
import { GreaterThanDirective } from './greater-than.directive';
import { LowerThanOrEqualDirective } from './lower-than-or-equal.directive';
import { LowerThanDirective } from './lower-than.directive';
import { NotEqualToDirective } from './not-equal-to.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EqualToDirective,
    GreaterThanDirective,
    GreaterThanOrEqualToDirective,
    LowerThanOrEqualDirective,
    LowerThanDirective,
    NotEqualToDirective
  ],
  exports: [
    EqualToDirective,
    GreaterThanOrEqualToDirective,
    GreaterThanDirective,
    LowerThanOrEqualDirective,
    LowerThanDirective,
    NotEqualToDirective
  ] 
})
export class AngularComparisonModule { }
