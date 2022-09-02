import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CoreUiModule } from '@lcmp/core-ui';
import { QuickViewLibModule } from '@lcmp/quick-view/lib-quick-view';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  // { path: 'starter', component: StarterComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreUiModule,
    QuickViewLibModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
