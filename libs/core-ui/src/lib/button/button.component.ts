import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-ui-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
