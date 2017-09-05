import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {ModalModule} from 'ngx-bootstrap/modal';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {firebaseConfig} from '../firebaseConfig';
import {FooterComponent} from '../components/footer/footer.component';
import {HeaderComponent} from '../components/header/header.component';
import {LoaderComponent} from '../components/loader/loader.component';
import {MenuComponent} from '../components/menu/menu.component';
import {NewPostComponent} from '../components/new-post/new-post.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    BrowserModule,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    ModalModule,
    NewPostComponent,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    MenuComponent,
    NewPostComponent,
    PageNotFoundComponent
  ],
  providers: []
})
export class SharedModule {}
