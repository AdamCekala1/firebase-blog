import { AlertModule } from 'ngx-alerts';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { firebaseConfig } from '../firebaseConfig';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { NewPostComponent } from '../components/new-post/new-post.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { BannerComponent } from '../components/banner/banner.component';
import { ScrollUpComponent } from '../components/scroll-up/scroll-up.component';
import { BannerParallaxComponent } from '../components/banner-parallax/banner-parallax.component';

@NgModule({
  imports: [
    AngularFireDatabaseModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ModalModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AlertModule,
    BannerComponent,
    BannerParallaxComponent,
    BrowserModule,
    BsDropdownModule,
    CommonModule,
    FooterComponent,
    FormsModule,
    HeaderComponent,
    ModalModule,
    NewPostComponent,
    ReactiveFormsModule,
    RouterModule,
    ScrollUpComponent
  ],
  declarations: [
    BannerComponent,
    BannerParallaxComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    NewPostComponent,
    PageNotFoundComponent,
    ScrollUpComponent
  ],
  providers: []
 })
export class SharedModule { }
