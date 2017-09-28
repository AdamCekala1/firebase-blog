import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerParallaxComponent } from './banner-parallax.component';

describe('BannerParallaxComponent', () => {
  let component: BannerParallaxComponent;
  let fixture: ComponentFixture<BannerParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
