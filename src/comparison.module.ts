import { NgModule } from '@angular/core';

import {
  EqualToDirective,
  GreaterThanOrEqualToDirective,
  GreaterThanDirective,
  LowerThanOrEqualDirective,
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
    GreaterThanOrEqualToDirective,
    GreaterThanDirective,
    LowerThanOrEqualDirective,
    LowerThanDirective
  ]
})
export class ComparisonModule {
}
