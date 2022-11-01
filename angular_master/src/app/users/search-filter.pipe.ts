import { Pipe, PipeTransform } from '@angular/core';
import { User } from './users.model';

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {

  transform(Users: User[], filters: string): User[] {
   if(Users.length == 0 || filters == ''){
    console.log(Users.length);
    return Users;
   }else {
    return Users.filter((user) => 
    { 
      return user.name.toLowerCase().includes(filters.toLowerCase()
    )})
   }   
  }

  // transform(
  //   value: { name : string }[],
  //   search: string
  // ) : { name : string }[] {
  //   if (value) {
  //     const regexp = new RegExp(search, '');
  //     const properties = Object.keys(value[0]);
  //     return [
  //       ...value.filter((item) => {
  //         return properties.some((property) => regexp.test(item[property]));
  //       }),
  //     ];
  //   }
  // }

}