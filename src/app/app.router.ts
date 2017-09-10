import {Routes} from '@angular/router';

import {CalculatorComponent} from './components/calculator/calculator.component';
import {CONSTANTS} from './shared/CONSTANTS';
import {DietComponent} from './components/diet/diet.component';
import {dietRoutes} from './components/diet/diet.router';
import {LandingPageComponent } from './components/landing-page/landing-page.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: CONSTANTS.ROUTING_URL.DIET,
    component: DietComponent,
    children: dietRoutes
  },
  {
    path: CONSTANTS.ROUTING_URL.CALCULATOR,
    component: CalculatorComponent,
  },
  { path: '',
    component: LandingPageComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];
