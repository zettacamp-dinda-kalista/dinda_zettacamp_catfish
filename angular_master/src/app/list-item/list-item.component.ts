import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ListItemComponent implements OnInit {
  person = [
    {name: "Dinda Kalista", Alamat: "Jalan Ki Hajar"},
    {name: "Dinda Kalista", Alamat: "Jalan Ki Hajar"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addNewName(row: { name:string; Alamat:string}) {
    this.person.push(row);
  }

}


