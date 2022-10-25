import { Component, OnInit, Input } from '@angular/core';
import { BookManagementService } from '../../book-management.service';
import { Data } from '../../model/user.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() card: any;

  constructor(private data:BookManagementService) {};

  selectData(data1: Data){
    this.data.setSelectedData(data1);
  }

}
