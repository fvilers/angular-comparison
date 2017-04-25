import { NgModule } from '@angular/core';

import { GreaterThanDirective } from './directives';

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
