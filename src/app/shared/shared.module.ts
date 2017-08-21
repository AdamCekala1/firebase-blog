import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { firebaseConfig } from '../firebaseConfig';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    BrowserModule,
    RouterModule,
    CommonModule
  ],
  declarations: []
})
export class SharedModule { }
