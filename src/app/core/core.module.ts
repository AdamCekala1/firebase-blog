import {NgModule} from '@angular/core';

import {UtilsService} from './utils/utils.service';
import {HttpService} from './http/http.service';

@NgModule({
  providers: [
    HttpService,
    UtilsService
  ]
})
export class CoreModule { }
