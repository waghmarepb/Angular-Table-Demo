import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoTableRoutingModule } from './demo-table-routing.module';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    DemoTableRoutingModule
  ],
  exports:[TableComponent]
})
export class DemoTableModule { }
