# angular-comparison
A collection of comparison directives for Angular

## Installation
Add the package to your application.

```
npm install --save angular-comparison
```

## Getting started

Import the comparison module to your angular module.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ComparisonModule } from 'angular-comparison';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComparisonModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Greater Than directive
Add the greater than directive to an input element and specify the value to compare.

```
<input type="number" name="first" [(ngModel)]="values.first">
<input type="number" #second="ngModel" name="second" [(ngModel)]="values.second" [greaterThan]="values.first">
```

Then, you can add a specific error message if the input value is not greater than the specified one.

```
<div *ngIf="second.errors && (second.dirty || second.touched)">
  <div [hidden]="!second.errors.greaterThan">Second value must be greater than first value.</div>
</div>
```
