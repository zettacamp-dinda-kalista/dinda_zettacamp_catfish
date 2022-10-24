import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {
  users!: string[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
