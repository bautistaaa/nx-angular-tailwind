import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarterComponent } from './starter/starter.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StarterComponent],
  exports: [StarterComponent],
})
export class QuickViewLibModule {}
