import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CalculatorFormComponent} from './calculator-form/calculator-form.component';
import {CalculatorComponent} from './calculator.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CalculatorComponent,
    CalculatorFormComponent
  ]
})
export class CalculatorModule { }
