import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list.component';
import { UserService } from './users.service';



@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    CardComponent,
    CardListComponent, 
  ],
  providers: [UserService],
})
export class CardListModule { }
