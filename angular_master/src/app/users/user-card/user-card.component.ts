import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  users: any;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.userService.userList$.subscribe(data => {
      this.users = data;

      console.log(this.users);
      
    })
  }
  editUser(editData: any){
    this.router.navigate(['/form-edit', editData._id]);
  }

}
