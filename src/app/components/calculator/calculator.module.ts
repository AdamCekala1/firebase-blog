import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CalculatorFormComponent} from './calculator-form/calculator-form.component';
import {CalculatorComponent} from './calculator.component';
import {SharedModule} from '../../shared/shared.module';
import {CalculatorService} from "./calculator.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CalculatorComponent,
    CalculatorFormComponent
  ],
  providers: [
    CalculatorService
  ]
})
export class CalculatorModule { }
