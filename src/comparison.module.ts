import { NgModule } from '@angular/core';

import { EqualToDirective, GreaterThanDirective, LowerThanDirective } from './directives/index';

@NgModule({
  declarations: [
    EqualToDirective,
    GreaterThanDirective,
    LowerThanDirective
  ],
  exports: [
    EqualToDirective,
    GreaterThanDirective,
    LowerThanDirective
  ]
})
export class ComparisonModule {
}
