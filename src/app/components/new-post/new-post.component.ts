import { AlertService } from 'ngx-alerts';
import { cloneDeep } from 'lodash';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';

import { HttpService } from '../../core/http/http.service';
import { InputFile } from '../../core/http/http.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  quickCreatePost: FormGroup;
  private uploadImage: {file?: InputFile, url?: string, error?: string} = {};
  @ViewChild('createNewPostModal') createNewPostModal: ModalDirective;

  constructor(private alertService: AlertService,
              private formBuilder: FormBuilder,
              private httpService: HttpService) {}

  createNewPost() {
    const inputsValues = cloneDeep(this.quickCreatePost.value);

    delete inputsValues.file;

    this.httpService.postData( 'posts', inputsValues, this.uploadImage.file)
      .then(() => this.createNewPostModal.hide(), (err: {error: string}) => this.alertService.danger(err.error));
  }

  readInputFile(event) {
    const data: {file?: InputFile} = this.httpService.readInputFile(event);

    if(data.file) {
      this.uploadImage.file = data.file;
    } else {
      this.quickCreatePost.get('file').reset();
    }
  }

  clearInputs() {
    this.uploadImage = {};
    this.quickCreatePost.reset();
  }

  ngOnInit() {
    this.quickCreatePost = this.formBuilder.group({
      title: ['', Validators.required ],
      content: ['', Validators.required ],
      file: ''
    });
  }
}
