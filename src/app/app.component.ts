import { Component, OnInit } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { forEach } from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // constructor(private angularFireDatabase: AngularFireDatabase) {}

  ngOnInit() {
    // this.angularFireDatabase.list('ingredients', {
    //   query: {
    //     limitToLast: 3,
    //     orderByKey: true
    //     }
    //   }
    // ).subscribe((recipes) => {
    //   console.log(recipes);
    // });

    // this.angularFireDatabase.list('posts').push({
    //   title: 'hello',
    //   content: 'lorem ipsum',
    //   thumbnail: '',
    //   authorId: 1,
    //   date: moment().format("DD/MM/YYYY HH:mm:ss"),
    //   lastUpdate: ''
    // });
  }
}
