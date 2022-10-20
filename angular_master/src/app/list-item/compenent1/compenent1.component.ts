import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compenent1',
  templateUrl: './compenent1.component.html',
  styleUrls: ['./compenent1.component.css']
})

export class Compenent1Component implements OnInit {


  allowNewServer: boolean = false;
  serverCreationStat: string = '';
  //event binding with data
  Name: string = ' ';

  constructor() { 
    setTimeout(()=>{this.allowNewServer = true;}, 2000);
  }
  onServerCreate(){
      this.serverCreationStat = this.Name;
  }

  ngOnInit(): void {
  }

}

