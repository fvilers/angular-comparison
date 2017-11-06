import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public eq = {
    value1: 0,
    value2: 0
  };
  public gte = {
    value1: 0,
    value2: 0
  };
  public gt = {
    value1: 0,
    value2: 0
  };
  public lte = {
    value1: 0,
    value2: 0
  };
  public lt = {
    value1: 0,
    value2: 0
  };
  public neq = {
    value1: 0,
    value2: 0
  };
}
