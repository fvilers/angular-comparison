import { NgModule } from '@angular/core';

import {
  EqualToDirective,
  GreaterThanOrEqualToDirective,
  GreaterThanDirective,
  LowerThanOrEqualDirective,
  LowerThanDirective,
  NotEqualToDirective
} from './directives/index';

@NgModule({
  declarations: [
    EqualToDirective,
    GreaterThanDirective,
    GreaterThanOrEqualToDirective,
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
export class ComparisonModule {
}
