import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  moviesCard: any = [];

  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
    this.filmService.movieList$.subscribe(data => {
      this.moviesCard = data;

      console.log(this.moviesCard);
      
    })
  }

  detailMovie(detail: any){
    this.router.navigate(['/movie-detail', detail.id])
  }
}
