import { Component, OnInit } from '@angular/core';
import { Data } from './model/user.model';
import { BookManagementService } from './book-management.service';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {
  
  selectedData: Data | null = null;

  constructor(private usersService: BookManagementService) {}

  ngOnInit(): void {
    // Observe to selecteduser behaviourSubject, if there is change, then it will update selectedUser
    this.usersService.selectedData$.subscribe((data) => {
      this.selectedData = data;
    });
  }
}
