import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'core-ui-spotlight',
  templateUrl: './spotlight.component.html',
})
export class SpotlightComponent implements AfterViewInit {
  @ViewChild('input') input: ElementRef<HTMLInputElement> | undefined;

  @Output() closeEvent = new EventEmitter<boolean>();

  ngAfterViewInit() {
    this.input?.nativeElement.focus();
  }

  @HostListener('window:keydown', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeEvent.emit(false);
    }
  }

  disableSpotlight() {
    this.closeEvent.emit(false);
  }

  formClick(event: MouseEvent) {
    event.stopPropagation();
  }
}
