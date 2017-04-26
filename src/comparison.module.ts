import { NgModule } from '@angular/core';

import { GreaterThanDirective, LowerThanDirective } from './directives/index';

@NgModule({
  declarations: [
    GreaterThanDirective,
    LowerThanDirective
  ],
  exports: [
    GreaterThanDirective,
    LowerThanDirective
  ]
})
export class ComparisonModule {
}
