import { NgModule } from '@angular/core';

import { DietComponent } from './diet.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    DietComponent,
  ]
})
export class DietModule { }
