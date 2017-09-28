import { NgModule } from '@angular/core';

import { CalculatorComponent } from './calculator.component';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';
import { CalculatorService } from './calculator.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
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
