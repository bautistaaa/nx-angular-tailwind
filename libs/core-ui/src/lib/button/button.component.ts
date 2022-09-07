import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'core-ui-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Output()
  public clicked: EventEmitter<void> = new EventEmitter();
}
