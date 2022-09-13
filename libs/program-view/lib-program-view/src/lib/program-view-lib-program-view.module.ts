import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreUiModule } from '@lcmp/core-ui';

import { IntroComponent } from './intro/intro.component';

@NgModule({
  imports: [NoopAnimationsModule, CommonModule, CoreUiModule, RouterModule],
  declarations: [IntroComponent],
  exports: [IntroComponent],
})
export class ProgramViewLibProgramViewModule {}
