import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CoreUiModule } from '@lcmp/core-ui';
import { IntroComponent, ProgramViewLibProgramViewModule } from '@lcmp/program-view/lib-program-view';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: IntroComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreUiModule,
    ProgramViewLibProgramViewModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
