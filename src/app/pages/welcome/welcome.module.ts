import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WelcomeRoutingModule } from './welcome-routing.module';
import { AngularSplitModule } from 'angular-split';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule, AngularSplitModule,CommonModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
