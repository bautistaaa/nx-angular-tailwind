import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreUiModule } from '@lcmp/core-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
