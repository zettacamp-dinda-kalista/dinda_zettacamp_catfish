import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  cardDetail: any = { };
  constructor(private DataSharing: AppService) {
    
  }
  ngOnInit() {
    console.log(this.DataSharing.seeDetail().subscribe(
      p => {
        this.cardDetail = p
      }
      
    ))

    console.log(this.cardDetail);
    
 
  }
  // onSubmit(cardData: any) {
  //   this.DataSharing.changeCardData(cardData);
  // }

}
