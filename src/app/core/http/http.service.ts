import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  getData(listName: string, query?: {limitToLast: number, orderByKey: boolean}): Observable<any> {
    return this.angularFireDatabase.list(listName, { query: {
      limitToLast: 9,
      orderByKey: true,
      ...query
    }});
  }
}
