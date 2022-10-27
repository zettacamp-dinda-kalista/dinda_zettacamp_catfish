import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  genders = ['male', 'female'];

  signupForm!: FormGroup;
  // name = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(''),
      'age': new FormControl(''),
      'email': new FormControl(''),
      'position': new FormControl(''),
      'marital_status': new FormControl(''),
      'genders': new FormControl('female'),
      'address': new FormGroup({
        'address': new FormControl(''),
        'zip': new FormControl(''),
        'city': new FormControl(''),
        'country': new FormControl('')
      })
    });
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  // updateName() {
  //   this.name.setValue('Nancy');
  // }

}
