import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  // behavior subject adalah mengassign suatu array agar dapat diakses sesuai compenent yang mau di suscribe

  SharingData = new BehaviorSubject('default');
  
  constructor() { }

   changeDataSubject(users: any) {
     this.SharingData.next(users.value);
   }

}

