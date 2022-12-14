import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lcmp-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigateByUrl('/starter')
  }
}
