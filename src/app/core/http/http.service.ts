import * as firebase from 'firebase';
import {AlertService} from 'ngx-alerts';
import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {CONSTANTS} from '../../shared/CONSTANTS';
import {InputFile} from './http.interface';

@Injectable()
export class HttpService {
  constructor(private alertService: AlertService,
              private angularFireDatabase: AngularFireDatabase) { }

  getData(listName: string, query?: {limitToLast: number, orderByKey: boolean}): Observable<any> {
    return this.angularFireDatabase.list(listName, { query: {
      limitToLast: 9,
      orderByKey: true,
      ...query
    }});
  }

  saveImgToStorageFromInput(file: InputFile): Promise<{fileUrl?: string, error?: string}> {
    const storageRef = firebase.storage().ref();
    const imgRef = storageRef.child(`images/${file.name}-${this.uuidv4()}`);

    return <Promise<{fileUrl?: string, error?: string}>>imgRef.put(file).then(data => {
      if (data.downloadURL) {
        return {fileUrl:  data.downloadURL};
      } else {
        this.alertService.danger('Niepoprawny plik');
        return {error: 'Niepoprawny plik'};
      }
    });
  }

  private uuidv4(): string {
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }
}
