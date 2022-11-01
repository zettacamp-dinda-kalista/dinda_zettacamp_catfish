import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { UsersService} from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import Swal  from 'sweetalert2';
import {TranslateService} from '@ngx-translate/core';


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

  // untuk mendisplay pertama kali
  selectedLang = 'en';

  constructor(private userService: UsersService, private router: Router, private rootaktif: ActivatedRoute, private fb: FormBuilder, public translateService: TranslateService) { }


  ngOnInit(): void{
    this.initFrom();

    const id = this.rootaktif.snapshot.paramMap.get('id');
    this.isEdit = id != null;
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

    // Validation and Value Changes

    this.signupForm.get('name')?.valueChanges.subscribe((value : any) => {
      const regex = /[^a-z|\s]/i;
      console.log(value);
      
      let Name : any = value;
      Name = Name?.replace(regex, '');
      this.signupForm.get('name')?.patchValue(Name, {emitEvent: false})

    });
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
      'name': new FormControl(null, [Validators.required,]),
      'age': new FormControl(null, [Validators.required, Validators.min(10)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'position': new FormControl(null, Validators.required),
      'marital_status': new FormControl(null, Validators.required),
      'genders': new FormControl(null, Validators.required),
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

  emailError() {
    if (this.signupForm.get('email')?.hasError('required')) {
      return 'This email is required!';
    } else {
      return this.signupForm.get('email')?.hasError('email') ? 'Invalid Email' : '';
    }
    
    }
  // get value untuk nampilin di form untuk ngedit data
  onSubmit(){
    if (this.id) {
      let updateId = this.id
      let updateData = this.signupForm.value
      // this.data.updateData(updateId, updateData)
      if (this.signupForm.valid) {
          this.userService.updateUser(updateId, updateData)
          console.log('berhasil edit');
          // Sweet Alert
          Swal.fire(
              'success to edit ' + this.signupForm.value.name,
              'Click to close',
              'success'
          )
          this.router.navigate(['/user-detail'])

      } else {
          console.log('gagal edit');
          Swal.fire(
              'Failed to edit ' + this.signupForm.value.name,
              'Click to close',
              'error'
          )
      }
    } else {
      console.log(this.signupForm);
      if (this.signupForm.valid) {
          this.userService.addNewUser(this.signupForm.value)
          console.log('berhasil upload');
          Swal.fire(
              'success to upload user ' + this.signupForm.value.name,
              'Click to close',
              'success'
          )
          this.router.navigate(['/user-detail'])

      } else {
          console.log('gagal upload');
          Swal.fire(
              'Failed to upload ' + this.signupForm.value.name,
              'Click to close',
              'error'
          )
      }
  }
  }
  
  // Transalate

  setLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
