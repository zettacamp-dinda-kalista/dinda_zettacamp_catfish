import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { User } from '../users.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  filters: string = '';
  Users: any;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.userService.userList$.subscribe(data => {
      this.Users = data;
      console.log(this.Users); 
    })
  }

  editUser(editData: any){
    this.router.navigate(['/form-edit', editData._id]);
  }
}
