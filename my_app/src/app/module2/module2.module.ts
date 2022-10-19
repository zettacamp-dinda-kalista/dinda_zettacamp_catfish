import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Compenentt1Component } from './compenentt1/compenentt1.component';
import { Compenentt2Component } from './compenentt2/compenentt2.component';
import { Compenentt3Component } from './compenentt3/compenentt3.component';
import { Module1Module } from '../module1/module1.module';



@NgModule({
  declarations: [
    Compenentt1Component,
    Compenentt2Component,
    Compenentt3Component
  ],
  imports: [
    CommonModule,
 
  ],
  exports:[
    Compenentt1Component,
    Compenentt2Component,
    Compenentt3Component
  ]
})
export class Module2Module { }
