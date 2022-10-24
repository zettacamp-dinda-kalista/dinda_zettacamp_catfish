import { Component } from '@angular/core';

import { UserService } from './users.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [UserService]
})
export class CardListComponent{
  CardList: any = '';
    // angular tidak boleh disimpan di constructor
  constructor(private DataSharing: UserService) {
  
  }
  ngOnInit(): void {
    this.DataSharing.SharingData.subscribe((res: any) => {
      debugger
      this.CardList = res;
    })
  }
  onSubmit(data: any) {
    this.DataSharing.changeDataSubject(data);
  }
}
