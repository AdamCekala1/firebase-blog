import {IngredientsAddComponent} from './ingredients-add/ingredients-add.component';
import {IngredientsComponent} from './ingredients.component';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    IngredientsComponent,
    IngredientsAddComponent
  ]
})
export class IngredientsModule { }
