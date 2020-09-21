import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoThreeRoutingModule } from './demo-three-routing.module';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoThreeRoutingModule
  ]
})
export class DemoThreeModule { }
