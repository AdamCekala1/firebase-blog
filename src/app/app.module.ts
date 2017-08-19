import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { appRoutes } from './app.router';
import { DietModule } from './components/diet/diet.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    DietModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
