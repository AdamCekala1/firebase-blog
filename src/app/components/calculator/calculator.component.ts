import { Component } from '@angular/core';

import { Calories } from './calculator.interface';

@Component({
  selector: 'c-root',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  allCalories: Calories;
  
  setCalories(data: Calories) {
    this.allCalories = data;
  }
}
