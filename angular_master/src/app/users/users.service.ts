import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './users.model'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userList: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  userList$ = this.userList.asObservable();

  selectedUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  selectedUser$ = this.selectedUser.asObservable();

  constructor(private httpClient: HttpClient) { 
    this.dummyInitList();
  }

  dummyInitList() {
    this.fetchUserJson().subscribe(users => {
      let usersData = users.Users;
      this.setAllUsersLists(usersData);
    })
  }

  fetchUserJson() {
    return this.httpClient.get<any>('../../assets/user.json');
  }

  setAllUsersLists(data: User[]) {
    this.userList.next(data);
  }

  setSelectedData(data1: User) {
    this.selectedUser.next(data1);
  }
}

