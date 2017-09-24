import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from './landing-page.component';
import {SharedModule} from '../../shared/shared.module';
import { LandingPageBannerComponent } from './landing-page-banner/landing-page-banner.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    LandingPageComponent,
    LandingPageBannerComponent
  ]
})
export class LandingPageModule { }
