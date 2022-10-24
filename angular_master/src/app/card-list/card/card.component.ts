import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  Card: any = '';
  // angular tidak boleh disimpan di constructor
  constructor(private DataSharing: UserService) {
   
  }
  ngOnInit(): void {
     this.DataSharing.SharingData.subscribe((res: any) => {
      this.Card = res;
    })
  }
  onSubmit(data: any) {
    this.DataSharing.changeDataSubject(data);
  }

}
