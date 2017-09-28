import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ModalModule} from 'ngx-bootstrap';

import {AppComponent} from './app.component';
import {appRoutes} from './app.router';
import {CalculatorModule} from './components/calculator/calculator.module';
import {CoreModule} from './core/core.module';
import {DietModule} from './components/diet/diet.module';
import {IngredientsModule} from './components/ingredients/ingredients.module';
import {LandingPageModule} from './components/landing-page/landing-page.module';
import {SharedModule} from './shared/shared.module';
import { ScrollUpComponent } from './components/scroll-up/scroll-up.component';
import { BannerParallaxComponent } from './components/banner-parallax/banner-parallax.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CalculatorModule,
    CoreModule,
    DietModule,
    IngredientsModule,
    LandingPageModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash: true}),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
