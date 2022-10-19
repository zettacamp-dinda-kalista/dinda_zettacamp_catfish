import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStat: string = '';
  //event binding with data
  serverName: string = 'Kucing';

  constructor() { 
    setTimeout(()=>{this.allowNewServer = true;}, 2000);
  }
  onServerCreate(){
      this.serverCreationStat = this.serverName;
  }

  ngOnInit(): void {
  }

}
