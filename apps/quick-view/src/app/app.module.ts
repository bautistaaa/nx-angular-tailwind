import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreUiModule } from '@lcmp/core-ui';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // { path: 'starter', component: StarterComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreUiModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
