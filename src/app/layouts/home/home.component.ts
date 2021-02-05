import { Component, HostListener, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private animateScrollService: NgAnimateScrollService) { }

    @HostListener('window:scroll', [])
    onWindowScroll() {
      if (document.body.scrollTop > 20 ||     
      document.documentElement.scrollTop > 20) {
        document.getElementById('nav').classList.add('bg-color-roll');
      }else{
        document.getElementById('nav').classList.remove('bg-color-roll');
      }
    }

  ngOnInit() {
  }

  navigate(location: string, duration?: number) {
    this.animateScrollService.scrollToElement(location, duration);
  }
}
