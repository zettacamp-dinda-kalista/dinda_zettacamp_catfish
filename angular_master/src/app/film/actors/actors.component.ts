import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actorCard: any;
  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
    this.filmService.actorList$.subscribe(data => {
      this.actorCard = data;

      console.log(this.actorCard);
      
    })
  }

  
  actorDetail(detail: any){
    this.router.navigate(['/actor-detail', detail.id])
  }

}
