import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';



@NgModule({
  declarations: [
    ImagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagesComponent
  ]
})
export class HeroModule { }
