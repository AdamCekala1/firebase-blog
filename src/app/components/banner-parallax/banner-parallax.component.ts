import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-parallax',
  templateUrl: './banner-parallax.component.html',
  styleUrls: ['./banner-parallax.component.scss']
})
export class BannerParallaxComponent {
  @Input() backgroundImage: string = './../../../assets/lp-bg.jpg';
  @Input() title: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
  @Input() description: string = 'Aliquam porttitor, purus in venenatis pretium, libero tortor dictum felis, ut hendrerit neque diam a neque. Maecenas nec consectetur tellus, sed semper enim.';
}
