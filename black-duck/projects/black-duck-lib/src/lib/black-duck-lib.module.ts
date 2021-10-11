import { NgModule } from '@angular/core';
import { BlackDuckLibComponent } from './black-duck-lib.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [BlackDuckLibComponent, ButtonComponent],
  imports: [
  ],
  exports: [BlackDuckLibComponent, ButtonComponent]
})
export class BlackDuckLibModule { }
