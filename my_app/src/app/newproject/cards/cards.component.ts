import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  allowNewCards = false;
  // cardsCreationStatus = 'Mooo Mooo';
  @Input() card:any
  title: any

  constructor() { 
    setTimeout(() => {
      this.allowNewCards = true;
    })
  }

  ngOnInit(): void {
    this.card = this.card
  }

  onCreateCards(){
    if (!this.title) {
      this.card.content = 'Meong Meong' 
    } else {
      this.card = ""
    }
    
  }

}
