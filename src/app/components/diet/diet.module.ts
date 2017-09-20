import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { DietComponent } from './diet.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    DietComponent,
  ]
})
export class DietModule { }
