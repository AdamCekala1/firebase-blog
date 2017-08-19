import { Routes } from '@angular/router';

import {IngredientsComponent} from './ingredients/ingredients.component';

export const dietRoutes: Routes = [
  {
    path: 'ingredients',
    component: IngredientsComponent,
  }
];
