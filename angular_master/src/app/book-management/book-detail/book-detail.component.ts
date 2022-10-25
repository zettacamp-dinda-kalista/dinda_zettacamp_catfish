import { Component, OnInit } from '@angular/core';
import { BookManagementService } from '../book-management.service';
import { Data } from '../model/user.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  constructor(private data: BookManagementService) { }

  ngOnInit(): void {
    this.data.selectedData$.subscribe((data1) => {
      this.selectedData = data1;
    });
  }

  selectedData: Data | null = null;

  // books: any[] = [];
  // // angular tidak boleh disimpan di constructor
  // constructor(private DataSharing: BookManagementService) {
   
  // }
  // ngOnInit(): void {
  //    this.DataSharing.Books.subscribe((res: any) => {
  //     this.books = res;
  //   })
  // }
  // onSubmit(books: any) {
  //   this.DataSharing.changeDataSubject(books);
  // }


}
