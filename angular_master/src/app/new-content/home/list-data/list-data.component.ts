import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {

  @Input() card: any;

  constructor(private appService: AppService, private router : Router) { }

  ngOnInit() {
   
  }

  onSubmit(){
    this.appService.addDetail(this.card);
    this.router.navigate(['/detail-component', this.card.id])
  }


}
