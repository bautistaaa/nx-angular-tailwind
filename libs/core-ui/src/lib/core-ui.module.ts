import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { SpotlightComponent } from './spotlight/spotlight.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    HeaderComponent,
    ButtonComponent,
    BannerComponent,
    CardComponent,
    SpotlightComponent,
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    BannerComponent,
    CardComponent,
    SpotlightComponent,
  ],
})
export class CoreUiModule {}
