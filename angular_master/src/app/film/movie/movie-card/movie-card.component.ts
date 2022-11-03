import { Component, OnInit, Input} from '@angular/core';
import { Movie } from '../../film.model';
import { FilmService } from '../../film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movies:any;
  // moviesCard: any;
  
  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
  }

}
