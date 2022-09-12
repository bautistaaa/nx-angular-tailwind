import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'quick-view-intro',
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  keysPressed = new Map<string, boolean>();
  showSpotlight = false;

  constructor(private router: Router) {}

  @HostListener('window:keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    this.keysPressed.set(event.key, true);

    if (this.keysPressed.has('Meta') && this.keysPressed.has('k')) {
      this.showSpotlight = true;
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyUp(event: KeyboardEvent) {
    this.keysPressed.delete(event.key);
  }

  navigate() {
    this.router.navigateByUrl('/starter');
  }

  enableSpotlight(value: boolean) {
    this.showSpotlight = value;
    this.keysPressed.clear();
  }
}
