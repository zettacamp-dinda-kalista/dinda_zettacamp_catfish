import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mentor } from './table.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  mentor: any

  mentorList: BehaviorSubject<Mentor[]> = new BehaviorSubject<Mentor[]>([]);
  mentorList$ = this.mentorList.asObservable();

  constructor(private http: HttpClient) {
    this.dummyInitList();
   }

  dummyInitList() {
    this.fetcMentorJson().subscribe(mentors => {
      this.mentor = mentors;
      // console.log(this.newUser);
      this.setAllMentorLists(mentors);
    })
  }

  fetcMentorJson() {
    return this.http.get<any>('../../assets/mentor.json');
  }

  setAllMentorLists(data: Mentor[]) {
    this.mentorList.next(data);
  }
}
