import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DietComponent } from './components/diet/diet.component';
import { dietRoutes } from './components/diet/diet.router';

export const appRoutes: Routes = [
  {
    path: 'diet',
    component: DietComponent,
    children: dietRoutes
  },
  { path: '',
    redirectTo: '/diet',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
