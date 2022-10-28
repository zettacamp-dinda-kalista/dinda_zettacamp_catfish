import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { UsersService} from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  id: any;

  //variabel array
  data: any;

  signupForm!: FormGroup;
  // name = new FormControl('');

  constructor(private userService: UsersService, private router: Router, private rootaktif: ActivatedRoute) { }


  ngOnInit() {
    if(this.rootaktif.snapshot.params['id']) {
      this.id = this.rootaktif.snapshot.params['id'];
      // console.log(this.id);
    } else{
      this.id = null;
    }
    this.signupForm = new FormGroup({
      '_id': new FormControl(null),
      'name': new FormControl(null),
      'age': new FormControl(null),
      'email': new FormControl(null),
      'position': new FormControl(null),
      'marital_status': new FormControl(null),
      'genders': new FormControl(null),
      'address': new FormGroup({
        'address': new FormControl(null),
        'zip_code': new FormControl(null),
        'city': new FormControl(null),
        'country': new FormControl(null)
      })
    });
    // this.id = this.rootaktif.snapshot.params['id'];
    // console.log(this.id);
    // this.signupForm.patchValue()
    this.getUserDatas();
  }

  getUserDatas() {
    this.userService.userList$.subscribe((x: any) => {
      this.data = x;
      // console.log(this.dataUserss);
      let userId = this.data.filter((x: { _id: any; }) => x._id == this.id);
      this.signupForm.patchValue(userId[0]);
      // console.log(userId);
      
    });
  }

  // update data
  onSubmit(){
    if (this.id){
      let updateId = this.id;
      let updateValue = this.signupForm.value;
      this.userService.updateUser(updateId, updateValue);
    } else {
      this.userService.addNewUser(this.signupForm.value);
    }
    this.router.navigate(['/user-detail']);
    // console.log(this.signupForm);
  }
  
  // get value untuk nampilin di form untuk ngedit data

  

}



