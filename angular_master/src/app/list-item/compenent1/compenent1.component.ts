import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-compenent1',
  templateUrl: './compenent1.component.html',
  styleUrls: ['./compenent1.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class Compenent1Component implements OnInit {
  Name: string = '';
  Alamat: string = '';
  
  @Input() namePerson:any;
  @Output() nameChild: EventEmitter<any>;

  constructor() { 
    this.nameChild = new EventEmitter();
  }

  ngOnInit(): void {
  }
  addName(){
    let newObject = {
      name: this.Name,
      Alamat: this.Alamat
    };
    // console.log(object)
  
    this.nameChild.emit(newObject);
  }


}

