import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actors-card',
  templateUrl: './actors-card.component.html',
  styleUrls: ['./actors-card.component.css']
})
export class ActorsCardComponent implements OnInit {
  @Input() actors:any;
  constructor() { }

  ngOnInit(): void {
  }

}
