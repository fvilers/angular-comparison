import { NgModule } from '@angular/core';

import {
  EqualToDirective,
  GreaterThanDirective,
  GreaterThanOrEqualToDirective,
  LowerThanDirective
} from './directives/index';

@NgModule({
  declarations: [
    EqualToDirective,
    GreaterThanDirective,
    GreaterThanOrEqualToDirective,
    LowerThanDirective
  ],
  exports: [
    EqualToDirective,
    GreaterThanDirective,
    GreaterThanOrEqualToDirective,
    LowerThanDirective
  ]
})
export class ComparisonModule {
}
