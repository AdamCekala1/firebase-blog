import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import * as moment from 'moment';

interface Image {
  path: string;
  filename: string;
  downloadURL?: string;
  $key?: string;
}

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  quickCreatePost: FormGroup;

  constructor(private angularFireDatabase: AngularFireDatabase,
              private formBuilder: FormBuilder) {}

  createNewPost() {
    const {title, content, thumbnail} = this.quickCreatePost.value;

    this.angularFireDatabase.list('posts').push({
      authorId: 1,
      content,
      date: moment().format('DD/MM/YYYY HH:mm:ss'),
      lastUpdate: '',
      thumbnail,
      title
    });
  }

  ngOnInit() {
    this.quickCreatePost = this.formBuilder.group({
      title: ['', Validators.required ],
      content: ['', Validators.required ],
      thumbnail: [''],
    });
  }
}
