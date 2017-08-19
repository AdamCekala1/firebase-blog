import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { DietComponent } from './diet.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    DietComponent,
    IngredientsComponent
  ]
})
export class DietModule { }
