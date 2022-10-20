import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Compenent1Component } from './compenent1/compenent1.component';
import { ListItemComponent } from './list-item.component';



@NgModule({
  declarations: [
    Compenent1Component,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Compenent1Component,
    ListItemComponent
  ]
})
export class ListItemModule { }
