import { Routes } from '@angular/router';

import { CalculatorComponent } from './components/calculator/calculator.component';
import { CONSTANTS } from './shared/CONSTANTS';
import { DietComponent } from './components/diet/diet.component';
import { DietLogsComponent } from './components/diet-logs/diet-logs.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
  { path: CONSTANTS.ROUTING_URL.DIET_LOG,
    component: DietLogsComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];
