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
  constructor(private DataSharing: UserService) {
    DataSharing.SharingData.subscribe((res: any) => {
      debugger
      this.CardList = res;
    })
  }
  ngOnInit(): void {
  }
  onSubmit(data: any) {
    this.DataSharing.changeDataSubject(data);
  }
}
