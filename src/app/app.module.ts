import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ModalModule} from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {appRoutes} from './app.router';
import {DietModule} from './components/diet/diet.module';
import {LandingPageModule} from './components/landing-page/landing-page.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    ModalModule.forRoot(),
    DietModule,
    LandingPageModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
