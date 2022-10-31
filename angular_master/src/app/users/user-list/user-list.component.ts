import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { UsersService} from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users.model';
import { first } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  isEdit: boolean = false;
  subcription: any;

  id: any;

  //variabel array
  data: any;

  signupForm!: FormGroup;
  // name = new FormControl('');

  constructor(private userService: UsersService, private router: Router, private rootaktif: ActivatedRoute, private fb: FormBuilder) { }


  ngOnInit(): void{
    this.initFrom();

    const id = this.rootaktif.snapshot.paramMap.get('id');
    this.isEdit = id != null;

    // console.log(this.isEdit);
    // console.log(id);


    if (this.isEdit) {
      this.subcription = this.userService.userList$
        .pipe(first((items) => items.length !== 0))
        .subscribe((items) => {
          const user: any = items.find(items => {
            console.log(items);
            console.log(id);
            
            return items._id == Number(id)
          });

          console.log(user);

          for (let i = 0; i < user.address.length; i++) {
            this.onAddAddress();
          }

          this.signupForm.patchValue(user);
        });
    } else {
      this.onAddAddress();
    }
  }

  initFrom(){
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
    // this.onAddAddress();
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
      this.router.navigate(['/user-detail']);
    } else {
      this.userService.addNewUser(this.signupForm.value);
      this.router.navigate(['/user-detail']);
    }
   
    // console.log(this.signupForm);
  }
  get addr() {
    return this.signupForm.controls['address'] as FormArray;
  }

  onAddAddress() {
    // let creds = this.signupForm.controls['address'] as FormArray;
    this.addr.push(new FormGroup({
      address: new FormControl(null, Validators.required),
      zip_code: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required)
    }));
    // console.log(this.addr);
    

  } 

  get controls(): FormArray {
    return this.signupForm.get('address') as FormArray;
  }
  
   removeAddress(i: number) {
    this.controls.removeAt(i);
  }
}


  // const id = this.rootaktif.snapshot.paramMap.get('id');
  //   this.isEdit = id != null;

  //   console.log(this.isEdit);
  //   console.log(id);


  //   if (this.isEdit) {
  //     this.subcription = this.data.userList$
  //       .pipe(first((items: User[]) => items.length !== 0))
  //       .subscribe((items: any[]) => {
  //         const user: any = items.find((items: { id: any; }) => {
  //           console.log(items);
  //           console.log(id);
            
  //           return items.id == this.id
  //         });

  //         console.log(user);

  //         for (let i = 0; i < user.address.length; i++) {
  //           this.onAddAddress();
  //         }

  //         this.signupForm.patchValue(user);
  //       });
  //   } else {
  //     this.onAddAddress();
  //   }