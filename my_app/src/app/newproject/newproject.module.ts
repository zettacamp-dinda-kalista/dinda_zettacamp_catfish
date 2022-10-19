import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { NewprojectComponent } from './newproject.component';
import { ImagesComponent } from './images/images.component';



@NgModule({
  declarations: [
    CardsComponent,
    NewprojectComponent,
    ImagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ImagesComponent,
    CardsComponent,
    NewprojectComponent
  ]
})
export class NewprojectModule { }
