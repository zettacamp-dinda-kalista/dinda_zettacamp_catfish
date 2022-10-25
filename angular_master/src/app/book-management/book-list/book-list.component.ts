import { Component, OnInit } from '@angular/core';
import { Data } from '../model/user.model';
import { BookManagementService } from '../book-management.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  constructor(private data:BookManagementService) {};

  bookList: Data[] = [];
  selectedUser: Data | null = null;

  ngOnInit(): void {
    this.data.bookList$.subscribe(bookList => {
      this.bookList = bookList;
      console.log(bookList);
    })
  }

}
