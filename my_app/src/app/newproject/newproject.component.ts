import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  cards = [
    {title: "Kucing1", content: "Moo Moo"},
    {title: "Kucing2", content: "Moo Moo"},
    {title: "Kucing3", content: "Mbee Mbee"},
    {title: "Kucing4", content: "Moo Moo"},
    {title: "Kucing5", content: "Guk Guk"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
