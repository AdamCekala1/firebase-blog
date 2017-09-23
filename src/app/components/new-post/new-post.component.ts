import * as moment from 'moment';
import {AlertService} from 'ngx-alerts';
import {AngularFireDatabase} from 'angularfire2/database';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../core/http/http.service';
import {InputFile} from '../../core/http/http.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  quickCreatePost: FormGroup;
  uploadImage: {file?: InputFile, url?: string, error?: string} = {};
  uploadImageUrl: string;
  uploadImageError: string;

  constructor(private alertService: AlertService,
              private angularFireDatabase: AngularFireDatabase,
              private formBuilder: FormBuilder,
              private httpService: HttpService) {}

  createNewPost() {
    const {title, content} = this.quickCreatePost.value;


    if(this.uploadImage.file) {
      this.httpService.saveImgToStorageFromInput(this.uploadImage.file).then((response: { fileUrl?: string, error?: string }) => {
        if (response.fileUrl) {
          this.uploadImage.url = response.fileUrl;
        } else {
          this.uploadImageError = response.error;
        }

        this.angularFireDatabase.list('posts').push({
          authorId: 1,
          content,
          date: moment().format('DD/MM/YYYY HH:mm:ss'),
          lastUpdate: '',
          thumbnail: this.uploadImage.url || '',
          title
        });
      });
    } else {
      this.angularFireDatabase.list('posts').push({
        authorId: 1,
        content,
        date: moment().format('DD/MM/YYYY HH:mm:ss'),
        lastUpdate: '',
        thumbnail: this.uploadImage.url || '',
        title
      });
    }
  }

  readInputFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.uploadImage.file = event.target.files[0];
    }
  }

  ngOnInit() {
    this.quickCreatePost = this.formBuilder.group({
      title: ['', Validators.required ],
      content: ['', Validators.required ]
    });
  }
}
