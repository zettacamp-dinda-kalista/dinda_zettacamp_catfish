import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  newUser: any;

  userList: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  userList$ = this.userList.asObservable();

  selectedUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  selectedUser$ = this.selectedUser.asObservable();
  userData$: any;

  constructor(private httpClient: HttpClient) { 
    this.dummyInitList();
  }

  dummyInitList() {
    this.fetchUserJson().subscribe(users => {
      this.newUser = users.Users;
      // console.log(this.newUser);
      this.setAllUsersLists(this.newUser);
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

  addNewUser(userData: any){
    this.newUser.push(userData);
    this.userList.next(this.newUser)
    // console.log(userData);
  }
  
  //update user

  updateUser(currentId: any, newValue: any){
    let index = parseInt(currentId)-1;
    if(this.newUser[index]._id == currentId){
      this.newUser[index] = newValue
    }
  }
}

