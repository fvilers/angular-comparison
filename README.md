# angular-comparison

A collection of comparison directives for Angular

## Quick links

- [Demo](https://fvilers.github.io/angular-comparison/index.html)

## Support

If you use and like this library, feel free to support my Open Source projects.

[![donate](https://www.paypalobjects.com/en_US/BE/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=JZ26X897M9V9L&currency_code=EUR)

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

## Equal To directive

Add the equal to directive to an input element and specify the value to compare.

```
<input type="number" name="first" [(ngModel)]="values.first">
<input type="number" #second="ngModel" name="second" [(ngModel)]="values.second" [ngEqualTo]="values.first">
```

Then, you can add a specific error message if the input value is not equal to the specified one.

```
<div *ngIf="second.errors && (second.dirty || second.touched)">
  <div [hidden]="!second.errors.ngEqualTo">Second value must be equal to {{values.first}}.</div>
</div>
```

## Greater Than directive

Add the greater than directive to an input element and specify the value to compare.

```
<input type="number" name="first" [(ngModel)]="values.first">
<input type="number" #second="ngModel" name="second" [(ngModel)]="values.second" [ngGreaterThan]="values.first">
```

Then, you can add a specific error message if the input value is not greater than the specified one.

```
<div *ngIf="second.errors && (second.dirty || second.touched)">
  <div [hidden]="!second.errors.ngGreaterThan">Second value must be greater than {{values.first}}.</div>
</div>
```

## Greater Than Or Equal directive

Add the greater than or equal directive to an input element and specify the value to compare.

```
<input type="number" name="first" [(ngModel)]="values.first">
<input type="number" #second="ngModel" name="second" [(ngModel)]="values.second" [ngGreaterThanOrEqual]="values.first">
```

Then, you can add a specific error message if the input value is not greater than or equal to the specified one.

```
<div *ngIf="second.errors && (second.dirty || second.touched)">
  <div [hidden]="!second.errors.ngGreaterThanOrEqual">Second value must be greater than or equal to {{values.first}}.</div>
</div>
```

## Lower Than directive

Add the lower than directive to an input element and specify the value to compare.

```
<input type="number" name="first" [(ngModel)]="values.first">
<input type="number" #second="ngModel" name="second" [(ngModel)]="values.second" [ngLowerThan]="values.first">
```

Then, you can add a specific error message if the input value is not lower than the specified one.

```
<div *ngIf="second.errors && (second.dirty || second.touched)">
  <div [hidden]="!second.errors.ngLowerThan">Second value must be lower than {{values.first}}.</div>
</div>
```

## Lower Than Or Equal directive

Add the lower than or equal directive to an input element and specify the value to compare.

```
<input type="number" name="first" [(ngModel)]="values.first">
<input type="number" #second="ngModel" name="second" [(ngModel)]="values.second" [ngLowerThanOrEqual]="values.first">
```

Then, you can add a specific error message if the input value is not lower than or equal to the specified one.

```
<div *ngIf="second.errors && (second.dirty || second.touched)">
  <div [hidden]="!second.errors.ngLowerThanOrEqual">Second value must be lower than or equal to {{values.first}}.</div>
</div>
```

## Not Equal To directive

Add the not equal to directive to an input element and specify the value to compare.

```
<input type="number" name="first" [(ngModel)]="values.first">
<input type="number" #second="ngModel" name="second" [(ngModel)]="values.second" [ngNotEqualTo]="values.first">
```

Then, you can add a specific error message if the input value is equal to the specified one.

```
<div *ngIf="second.errors && (second.dirty || second.touched)">
  <div [hidden]="!second.errors.ngNotEqualTo">Second value must be different from {{values.first}}.</div>
</div>
```
