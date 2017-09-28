import * as smoothscroll from 'smoothscroll-polyfill';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() backgroundImage: string = './../../../assets/lp-bg.jpg';
  @Input() title: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
  @Input() description: string = 'Aliquam porttitor, purus in venenatis pretium, libero tortor dictum felis, ut hendrerit neque diam a neque. Maecenas nec consectetur tellus, sed semper enim.';

  scrollDown() {
    window.scroll({ top: 500, left: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    smoothscroll.polyfill();
  }
}
