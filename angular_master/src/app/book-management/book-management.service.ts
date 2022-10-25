import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Data } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class BookManagementService {
  bookList: BehaviorSubject<Data[]> = new BehaviorSubject<Data[]>([]);
  bookList$ = this.bookList.asObservable();

  selectedData: BehaviorSubject<Data | null> = new BehaviorSubject<Data | null>(null);
  selectedData$ = this.selectedData.asObservable();

  constructor(private httpClient: HttpClient) { 
    this.dummyInitList();
  }

  dummyInitList() {
    this.fetchUserJson().subscribe(books => {
      let usersData = books.bookList;
      this.setAllUsersLists(usersData);
    })
  }

  fetchUserJson() {
    return this.httpClient.get<any>('../../assets/json/data.json');
  }

  setAllUsersLists(data: Data[]) {
    this.bookList.next(data);
  }

  setSelectedData(data1: Data) {
    this.selectedData.next(data1);
  }
}
