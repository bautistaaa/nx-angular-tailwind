import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, ButtonComponent],
  exports: [HeaderComponent, ButtonComponent],
})
export class CoreUiModule {}
