import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Post } from '../../shared/posts.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  lastPosts: Post[] = [];

  constructor(private angularFireDatabase: AngularFireDatabase) {}

  ngOnInit() {
    this.angularFireDatabase.list('posts', { query: {
      limitToLast: 9,
      orderByKey: true
    }}).subscribe((posts: Post[]) => {
      this.lastPosts = posts.reverse();
    });
  }

}
