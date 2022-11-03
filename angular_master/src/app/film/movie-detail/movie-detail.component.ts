import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';
import { Actor, Movie } from '../film.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
[x: string]: any;
  movieDetail: any 
  id: any;

  constructor(private filmService: FilmService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '', 10);
      
    // if(data.length == 0) return
    this.movieDetail = this.filmService.getMoovieById(id);

    console.log(this.movieDetail);
  }
}
