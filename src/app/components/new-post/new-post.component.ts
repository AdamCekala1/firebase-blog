import * as firebase from 'firebase/app';
import * as moment from 'moment';
import {AlertService} from 'ngx-alerts';
import {AngularFireDatabase} from 'angularfire2/database';
import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalDirective} from 'ngx-bootstrap';

import {CONSTANTS} from '../../shared/CONSTANTS';
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
  @ViewChild('createNewPostModal') createNewPostModal: ModalDirective;

  constructor(private alertService: AlertService,
              private angularFireDatabase: AngularFireDatabase,
              private formBuilder: FormBuilder,
              private httpService: HttpService) {}

  createNewPost() {
    if(this.uploadImage.file) {
      this.httpService.saveImgToStorageFromInput(this.uploadImage.file).then((response: { fileUrl?: string, error?: string }) => {
        if (response.fileUrl) {
          this.uploadImage.url = response.fileUrl;
          this.postData();
        } else {
          this.uploadImage.error = response.error;
        }
      });
    } else {
      this.postData();
    }
  }

  readInputFile(event) {
    if(event.target.files && event.target.files[0]) {
      const file: InputFile = event.target.files[0];

      if (file.size < CONSTANTS.MAX_IMAGES_SIZE && file.type.slice(0, 5) === 'image') {
        this.uploadImage.file = event.target.files[0];
      } else {
        this.quickCreatePost.get('file').reset();
        this.alertService.danger('Plik za duży lub zły format.');
      }
    }
  }

  clearInputs() {
    delete this.uploadImage.file;
    this.quickCreatePost.reset();
  }

  ngOnInit() {
    this.quickCreatePost = this.formBuilder.group({
      title: ['', Validators.required ],
      content: ['', Validators.required ],
      file: ''
    });
  }

  private postData() {
    const {title, content} = this.quickCreatePost.value;

    return this.angularFireDatabase.list('posts').push({
      authorId: 1,
      content,
      date: moment().format('DD/MM/YYYY HH:mm:ss'),
      lastUpdate: '',
      thumbnail: this.uploadImage.url || '',
      title
    }).then(() => this.createNewPostModal.hide(), (err) => this.alertService.danger(err.toString()));
  }
}
