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

  constructor(private userService: UsersService, private router: Router, private rootaktif: ActivatedRoute, private fb: FormBuilder) { }


  ngOnInit() {
    if(this.rootaktif.snapshot.params['id']) {
      this.id = this.rootaktif.snapshot.params['id'];
      // console.log(this.id);
    } else{
      this.id = null;
    }
    this.signupForm = new FormGroup({
      '_id': new FormControl(null, Validators.required ),
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'position': new FormControl(null, Validators.required),
      'marital_status': new FormControl(null, Validators.required),
      'genders': new FormControl(null),
      'address': new FormArray([])
    });
    this.onAddAddress();
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

  // get value untuk nampilin di form untuk ngedit data
  onSubmit(){
    if (this.id){
      let updateId = this.id;
      let updateValue = this.signupForm.value;
      this.userService.updateUser(updateId, updateValue);
    } else {
      let data = this.signupForm.value;
      this.userService.addNewUser(this.signupForm.value);
    }
    this.router.navigate(['/user-detail']);
    // console.log(this.signupForm);
  }
  

  onAddAddress() {
    let creds = this.signupForm.controls['address'] as FormArray;
    creds.push(new FormGroup({
      address: new FormControl(null, Validators.required),
      zip_code: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required)
    }));

  } 
  get controls() {
    return (this.signupForm.get('address') as FormArray).controls;
  }
  

}


//   ngOnInit() {
//     if(this.rootaktif.snapshot.params['id']) {
//       this.id = this.rootaktif.snapshot.params['id'];
//       // console.log(this.id);
//     } else{
//       this.id = null;
//     }
//     this.signupForm = this.fb.group({
    //   '_id': '',
    //   'name': '',
    //   'age': '',
    //   'email': '',
    //   'position': '',
    //   'marital_status': '',
    //   'genders': '',
    //   'address': this.fb.array([
    //     {'address': ''},
    //     {'zip_code': ''},
    //     {'city': ''},
    //     {'country': ''},
    // ]),
//     });
//     // this.id = this.rootaktif.snapshot.params['id'];
//     // console.log(this.id);
//     // this.signupForm.patchValue()
//     this.getUserDatas();
//   }
//

//   get address() : FormArray {
//     return this.signupForm.get("address") as FormArray
//   }

//   newAddress(): FormGroup {
//     return this.fb.group({
//       address: '',
//       zip_code: '',
//       city: '',
//       country: ''
//     })
//   }
 
//   addAddress() {
//     this.address.push(this.newAddress());
//  }
  
// }
