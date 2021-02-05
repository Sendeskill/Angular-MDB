import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private animateScrollService: NgAnimateScrollService) { }

  ngOnInit() {
  }

  navigate(location: string, duration?: number) {
    this.animateScrollService.scrollToElement(location, duration);
  }

}
