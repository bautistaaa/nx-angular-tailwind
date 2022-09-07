import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, ButtonComponent, BannerComponent],
  exports: [HeaderComponent, ButtonComponent, BannerComponent],
})
export class CoreUiModule {}
