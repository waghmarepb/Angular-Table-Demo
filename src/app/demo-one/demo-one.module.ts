import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoOneRoutingModule } from './demo-one-routing.module';
import { DemoComponent } from './demo/demo.component';
import { DemoTableModule } from '../demo-table/demo-table.module';



@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
DemoTableModule,
    DemoOneRoutingModule
  ]
})
export class DemoOneModule { }
