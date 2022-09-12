import { Component } from '@angular/core';

@Component({
  selector: 'core-ui-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  open = true;

  onClose() {
    this.open = false;
  }
}
