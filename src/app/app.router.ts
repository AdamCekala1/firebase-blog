import { Routes } from '@angular/router';

import { CalculatorComponent } from './components/calculator/calculator.component';
import { CONSTANTS } from './shared/CONSTANTS';
import { DietComponent } from './components/diet/diet.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';

export const appRoutes: Routes = [
  {
    path: CONSTANTS.ROUTING_URL.DIET,
    component: DietComponent
  },
  {
    path: CONSTANTS.ROUTING_URL.CALCULATOR,
    component: CalculatorComponent,
  },
  { path: '',
    component: LandingPageComponent,
  },
  { path: CONSTANTS.ROUTING_URL.IGREDIENTS,
    component: IngredientsComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];
