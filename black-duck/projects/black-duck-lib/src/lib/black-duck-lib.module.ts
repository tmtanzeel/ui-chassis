import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlackDuckLibComponent } from './black-duck-lib.component';
import { ButtonComponent } from './button/button.component';
import { TwitterCardComponent } from './twitter-card/twitter-card.component';

@NgModule({
  declarations: [BlackDuckLibComponent, ButtonComponent, TwitterCardComponent],
  imports: [
    CommonModule
  ],
  exports: [BlackDuckLibComponent, ButtonComponent, TwitterCardComponent]
})
export class BlackDuckLibModule { }
