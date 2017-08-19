import { Component, OnInit } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { forEach } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private angularFireDatabase: AngularFireDatabase) {}

  ngOnInit() {
    this.angularFireDatabase.list('ingredients', {
      query: {
        limitToLast: 3,
        orderByKey: true
        }
      }
    ).subscribe((recipes) => {
      forEach(recipes, recipe => {
        console.log(recipe);
      });
    });
  }
}
