import { Component } from '@angular/core';

import { UserService } from './users.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  providers: [UserService]
})
export class CardListComponent{
}
