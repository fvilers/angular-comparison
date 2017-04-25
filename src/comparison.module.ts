import { NgModule } from '@angular/core';

import { GreaterThanDirective } from './greater-than.directive';

@NgModule({
  declarations: [
    GreaterThanDirective
  ],
  exports: [
    GreaterThanDirective
  ]
})
export class ComparisonModule {
}
