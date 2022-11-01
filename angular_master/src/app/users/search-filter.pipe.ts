import { Pipe, PipeTransform } from '@angular/core';
import { User } from './users.model';
import {removeDiacritics} from './accent-filter'

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(Users: User[], filters: string): User[] {
    if(Users.length === 0 || filters === ''){
     return Users;
    }
    filters = filters.replace(/[.,\s]/g, '')
    
     return Users.filter((user) => 
     { 
       return removeDiacritics(user.name).toLowerCase().replace(/[.,\s]/g, '').includes(filters.toLowerCase()
     )})
    }

}
