import { Pipe, PipeTransform } from '@angular/core';
import { User } from './users.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(Users: User[], filters: string): User[] {
    if(Users.length === 0 || filters === ''){
     return Users;
    }else {
     return Users.filter((user) => 
     { 
       return user.name.toLowerCase().includes(filters.toLowerCase()
     )})
    }
   }

}
