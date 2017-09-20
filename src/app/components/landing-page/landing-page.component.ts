import {Component, OnInit} from '@angular/core';

import {Post} from '../../shared/posts.interface';
import {HttpService} from '../../core/http/http.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  lastPosts: Post[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getData('posts').subscribe((posts: Post[]) => {
      this.lastPosts = posts.reverse();
    });
  }
}
