import { Component } from '@angular/core';

import { UserService } from './users.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [UserService]
})
export class CardListComponent{
  Component3Data: any = '';
  constructor(private DataSharing: UserService) {
    DataSharing.SharingData.subscribe((res: any) => {
      debugger
      this.Component3Data = res;
    })
  }
  ngOnInit(): void {
  }
  onSubmit(data: any) {
    this.DataSharing.changeDataSubject(data);
  }
}
