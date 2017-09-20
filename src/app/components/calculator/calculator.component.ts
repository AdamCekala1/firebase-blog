import { Component, OnInit } from '@angular/core';

import {Calories} from './calculator.interface';

@Component({
  selector: 'c-root',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  allCalories: Calories;

  constructor() { }

  ngOnInit() {
  }

  setCalories(data: Calories) {
    this.allCalories = data;
  }
}
