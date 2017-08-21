import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DietComponent } from './components/diet/diet.component';
import { dietRoutes } from './components/diet/diet.router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const appRoutes: Routes = [
  {
    path: 'diet',
    component: DietComponent,
    children: dietRoutes
  },
  { path: '',
    component: LandingPageComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];
