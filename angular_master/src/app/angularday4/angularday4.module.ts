import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Angularday4Component } from './angularday4.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    Angularday4Component,
    SidebarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    SidebarComponent,
    TableComponent,
    Angularday4Component
  ]
})
export class Angularday4Module { }
