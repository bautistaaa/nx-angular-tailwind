import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'quick-view-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigateByUrl('/starter');
  }
}
