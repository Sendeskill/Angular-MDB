import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 25 ||
      document.documentElement.scrollTop > 25) {
      document.getElementById('navcode').classList.add('bg-color');
    } else {
      document.getElementById('navcode').classList.remove('bg-color');
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
