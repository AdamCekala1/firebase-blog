import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { cloneDeep } from 'lodash';

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
  singleAerobicActivity: {
    aerobicTraining: {
      time: number, period: periodType, intensity: intensityType
    },
    gymTraining: {
      time: number, period: periodType
    }
  } = {
    aerobicTraining: {
      time: 0, period: periodType.DAY, intensity: intensityType.LIGHT
    },
    gymTraining: {
      time: 0, period: periodType.DAY
    }
  };
  userInformation: {
    isMen: boolean,
    weight: number,
    heigth: number,
    builType: bodyType,
    aerobicTraining: {time: number, period: periodType, intensity: intensityType}[],
    gymTraining: {time: number, period: periodType}[],
  } = {
    isMen: true,
    weight: 0,
    heigth: 0,
    builType: bodyType.ENDO,
    aerobicTraining: [],
    gymTraining: [],
  };

  constructor(private formBuilder: FormBuilder, private utilsService: UtilsService) { }

  userBuildTypeClass(type: string): string {
    return this.userInformation.builType === bodyType[type] ? 'active' : '';
  }

  getBodyTypeReadable(type: string): string {
    return CONSTANTS.bodyTypeReadable[bodyType[type]];
  }

  getPeriodReadable(type: string): string {
    return CONSTANTS.periodsReadable[periodType[type]];
  }

  getPeriodReadableActive(type: periodType): string {
    return CONSTANTS.periodsReadable[type];
  }

  getIntensityReadable(type: string): string {
    return CONSTANTS.intensitTypeReadable[intensityType[type]];
  }

  getIntensityReadableActive(type: intensityType): string {
    return CONSTANTS.intensitTypeReadable[type];
  }

  builTypeHandler(value: string) {
    this.userInformation.builType = bodyType[value];
  }

  addPeriod(name: string, type: string) {
    this.singleAerobicActivity[name].period = periodType[type];
  }

  addAeorbicIntensity(type: string) {
    this.singleAerobicActivity.aerobicTraining.intensity = intensityType[type];
  }

  addAnotherAero() {
    this.userInformation.aerobicTraining.push(cloneDeep(this.singleAerobicActivity.aerobicTraining));
    console.log(this.userInformation.aerobicTraining)
  }

  addAnotherGym() {
    this.userInformation.gymTraining.push(cloneDeep(this.singleAerobicActivity.gymTraining));
  }

  ngOnInit() {
    this.periodTypesStringArray = this.utilsService.enumToKeysArray(periodType);
    this.bodyTypesStringArray = this.utilsService.enumToKeysArray(bodyType);
    this.intensityTypesStringArray = this.utilsService.enumToKeysArray(intensityType);

    this.calculatorForm = this.formBuilder.group({
      isMen: true,
      weigth: 0,
      heigth: 0,
      aeroTime: 0,
      gymTime: 0
    });
  }
}
