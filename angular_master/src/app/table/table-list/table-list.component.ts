import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TableService } from '../table.service';
import { Mentor } from '../table.model';
import { Dropdown } from '../dropdown';
import { dropdownOption } from '../drop';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent{
  displayedColumns: string[] = ['name', 'user_type', 'email', 'status'];

  mentorss: Mentor[]=[];

  statusFilter = new FormControl('');
  availableSources: Dropdown[] = dropdownOption;
  filterValues: any = {
    user_status: ''
  };

  dataSource: MatTableDataSource<Mentor> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  // nameFilter = new FormControl();
  // userFilter = new FormControl();
  // emailFilter = new FormControl();

  // filteredValues = { name:'', user_type:'', email:''};
  constructor( private tableService: TableService) {
  }

  ngOnInit(): void {
    this.tableService.mentorList$.subscribe(data => {
      this.mentorss = data

      this. dataSource = new MatTableDataSource(this.mentorss);
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      
      this.fieldListener();
      this.dataSource.filterPredicate = this.createFilter()
      
      // this.nameFilter.valueChanges.subscribe((nameFilterValue)=> {
      //   this.filteredValues['name'] = nameFilterValue;
      //   this.dataSource.filter = JSON.stringify(this.filteredValues);
      //   });
        
      //   this.userFilter.valueChanges.subscribe((userFilterValue)=> {
      //   this.filteredValues['user_type'] = userFilterValue;
      //   this.dataSource.filter = JSON.stringify(this.filteredValues);
      //   });
        
      //   this.emailFilter.valueChanges.subscribe((emailFilterValue)=> {
      //   this.filteredValues['email'] = emailFilterValue;
      //   this.dataSource.filter = JSON.stringify(this.filteredValues);
      //   });
        
      //   this.dataSource.filterPredicate = this.customFilterPredicate();
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  private fieldListener() {
    this.statusFilter.valueChanges
      .subscribe(
        status => {
          this.filterValues.user_status = status;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    }

  
  private createFilter(): (contact: Mentor, filter: string) => boolean {
    let filterFunction = function (contact: any, filter: any): boolean {
      let searchTerms = JSON.parse(filter);

      return contact.user_status.indexOf(searchTerms.user_status) !== -1;
    }

    return filterFunction;
  }


  // customFilterPredicate() {
  //   const myFilterPredicate = function(data: Mentor, filter:string) :boolean {
  //     let searchString = JSON.parse(filter);
  //     let nameFound = data.last_name.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1
  //     let user_typeFound = data.user_type.toString().trim().indexOf(searchString.user_type) !== -1
  //     let emailFound = data.email.toString().trim().indexOf(searchString.email) !== -1
  //     if (searchString.topFilter) {
  //         return nameFound || emailFound || user_typeFound
  //     } else {
  //         return nameFound && emailFound && user_typeFound
  //     }
  //   }
  //   return myFilterPredicate;
  // }


}
 

