import {Component, HostListener, OnInit} from '@angular/core';
import {Window} from 'selenium-webdriver';
import 'rxjs/add/operator/debounceTime';
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsedParam: boolean = true;
  screenWidth: Subject<number> = new Subject();
  private widthScreen: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth.next(event.target.innerWidth);
  }

  constructor() { }

  ngOnInit() {
    if(this.widthScreen > 768) {
      this.isCollapsedParam = false;
    }

    this.screenWidth.debounceTime(100).subscribe((width: number) => {
      if (width > 768) {
        this.isCollapsedParam = false;
      }
    });
  }

  toggleCollapse() {
    this.isCollapsedParam = !this.isCollapsedParam;
  }
}
