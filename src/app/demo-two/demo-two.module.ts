import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoTwoRoutingModule } from './demo-two-routing.module';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoTwoRoutingModule
  ]
})
export class DemoTwoModule { }
