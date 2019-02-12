import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-sidenav',
  templateUrl: './component-sidenav.component.html',
  styleUrls: ['./component-sidenav.component.css']
})
export class ComponentSidenavComponent implements OnInit {
  opened: boolean;
  shouldRun;

  constructor() {
  }

  ngOnInit() {
    this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  }

}
