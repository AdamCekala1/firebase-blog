import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {CONSTANTS} from '../../../shared/CONSTANTS';
import {bodyType, intensityType, periodType} from './calculator-form.enums';
import {UtilsService} from '../../../core/utils/utils.service';

@Component({
  selector: 'c-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.scss']
})
export class CalculatorFormComponent implements OnInit {
  calculatorForm: FormGroup;
  periodTypesStringArray: string[] = [];
  bodyTypesStringArray: string[] = [];
  intensityTypesStringArray: string[] = [];

  constructor(private formBuilder: FormBuilder, private utilsService: UtilsService) { }

  getPeriodReadable(type: string): string {
    return CONSTANTS.periodsReadable[periodType[type]];
  }

  getBodyTypeReadable(type: string): string {
    return CONSTANTS.bodyTypeReadable[bodyType[type]];
  }

  getIntensityReadable(type: string): string {
    return CONSTANTS.intensitTypeReadable[intensityType[type]];
  }

  ngOnInit() {
    this.periodTypesStringArray = this.utilsService.enumToKeysArray(periodType);
    this.bodyTypesStringArray = this.utilsService.enumToKeysArray(bodyType);
    this.intensityTypesStringArray = this.utilsService.enumToKeysArray(intensityType);

    this.calculatorForm = this.formBuilder.group({
      isMen: true,
      weigth: '',
      heigth: '',
      type: '',
      aeroTime: '',
      aeroPeriod: '',
      aeroIntensity: '',
      gymTime: '',
      gymPeriod: '',
    });
  }
}
