import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  Card: any = '';
  constructor(private DataSharing: UserService) {
    DataSharing.SharingData.subscribe((res: any) => {
      this.Card = res;
    })
  }
  ngOnInit(): void {
  }
  onSubmit(data: any) {
    this.DataSharing.changeDataSubject(data);
  }

}
