import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  cards: BehaviorSubject<any>;
  
  Card = [
    {
      id: 1,
      name: "Dinda Kalista",
      alamat: 'Jalan Madesabara',
      age : 20,
      status: "Kosong",
    },
    {
      id: 2,
      name: "Kalista",
      alamat: 'Jalan Madesabara',
      age : 20,
      status: "Ada"
    },
    {
      id: 3,
      name: "Dinda ",
      alamat: 'Jalan Madesabara',
      age : 20,
      status: "Tidak Ada"
    },
    {
      id: 4,
      name: "Dinda Kalista",
      alamat: 'Jalan Madesabara',
      age : 20,
      status: "Tau Ah"
    },
    {
      id: 5,
      name: "Dinda Kalista",
      alamat: 'Jalan Madesabara',
      age : 20,
      status: "Kosong"
    }
  ]

  constructor() {
    this.cards = new BehaviorSubject(this.Card)
   };

  cardData() {
    return this.cards.asObservable()
  };

  // Detail 
  cardDetail= new BehaviorSubject({});

  addDetail(val: any){
    this.cardDetail.next(val)
  };

  seeDetail(){
    return this.cardDetail.asObservable();
  }

}
