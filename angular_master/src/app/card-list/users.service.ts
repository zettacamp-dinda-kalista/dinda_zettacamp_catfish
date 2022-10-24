import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  SharingData = new BehaviorSubject('default');
  
  constructor() { }

   changeDataSubject(users: any) {
     this.SharingData.next(users.value);
   }

}

