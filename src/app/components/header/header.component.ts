import {Component} from '@angular/core';
import 'rxjs/add/operator/debounceTime';

import {CONSTANTS} from '../../shared/CONSTANTS';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  routerLinks: {link: string, linkReadable: string, icon: string}[] = [
    {link: '', linkReadable: 'Start', icon: 'fa-home'},
    {link: CONSTANTS.ROUTING_URL.CALCULATOR, linkReadable: 'Kalkulator', icon: 'fa-calculator'},
    {link: CONSTANTS.ROUTING_URL.DIET, linkReadable: 'Przepisy', icon: 'fa-book'}
  ];

}
