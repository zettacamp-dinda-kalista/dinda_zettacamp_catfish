import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list.component';
import { NewCardComponent } from './new-card/new-card.component';
import { CounterService } from './counter.service';



@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
    NewCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    CardComponent,
    CardListComponent
  ],
  providers: [CounterService],
})
export class CardListModule { }
