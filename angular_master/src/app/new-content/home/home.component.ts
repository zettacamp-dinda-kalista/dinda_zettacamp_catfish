import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() Card: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.cardData().subscribe(
      p => {
        console.log(p)
        this.Card = p
      }
    )
  }

}
