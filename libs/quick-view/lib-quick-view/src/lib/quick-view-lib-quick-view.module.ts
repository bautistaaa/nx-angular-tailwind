import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreUiModule } from '@lcmp/core-ui';

import { IntroComponent } from './intro/intro.component';
import { StarterComponent } from './starter/starter.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsBarComponent } from './stats-bar/stats-bar.component';

@NgModule({
  imports: [CommonModule, CoreUiModule, RouterModule],
  declarations: [
    StarterComponent,
    IntroComponent,
    SidebarComponent,
    DashboardComponent,
    StatsBarComponent,
  ],
  exports: [
    StarterComponent,
    IntroComponent,
    SidebarComponent,
    DashboardComponent,
    StatsBarComponent,
  ],
})
export class QuickViewLibModule {}
