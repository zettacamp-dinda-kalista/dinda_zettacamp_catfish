import { Injectable } from '@angular/core';
import { Movie, Actor } from './film.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  movies: any;
  movie: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  movie$ = this.movie.asObservable();
  actors: any;

  movieList: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  movieList$ = this.movieList.asObservable();

  actorList : BehaviorSubject<Actor[]> = new BehaviorSubject<Actor[]>([]);
  actorList$ = this.actorList.asObservable();

  selectedMovie: BehaviorSubject<Movie | null> = new BehaviorSubject<Movie | null>(null);
  selectedMovie$ = this.selectedMovie.asObservable();
  userData$: any;

  constructor(private httpClient: HttpClient) { 
    this.dummyInitList();
    this.listActor();
  }

   // Movie Card
  dummyInitList() {
    this.fetchUserJson().subscribe(users => {
      this.movies = users;
      // console.log(this.newUser);
      this.setAllUsersLists(users);
    })
  }

  fetchUserJson() {
    return this.httpClient.get<any>('../../assets/movie.json');
  }

  setAllUsersLists(data: Movie[]) {
    this.movieList.next(data);
  }

  // Actor Card
  listActor(){
    this.actorJson().subscribe(actor => {
      this.setAllActorList(actor);
    })
  }

  actorJson() {
    return this.httpClient.get<any>('../../assets/actors.json')
  }

  setAllActorList(actors: Actor[]){
    this.actorList.next(actors);
  }

  setSelectedData(data1: Movie) {
    this.selectedMovie.next(data1);
  }

  addNewUser(userData: any){
    this.movies.push(userData);
    this.movieList.next(this.movies)
    // console.log(userData);
  }

  // get berdasarkan ID
  updateMovie(data:any){
    this.selectedMovie.next(data)
  }
  
  getMovie(): Movie[] {
    return this.movieList.getValue()
  }

  getMoovieById(id: number): Movie{
    
    return this.getMovie().filter(item => item.id == id)[0]
  }
  //update user

  // updateUser(currentId: any, newValue: any){
  //   let index = parseInt(currentId)-1;
  //   console.log(this.newUser);
  //   console.log(index);
    
  //   //else untuk ngepush new value ke dalam new user agar dapat membaca hasil dari add address
  //   if(this.newUser[index]?._id == currentId){
  //     this.newUser[index] = newValue
  //   } else {
  //     this.newUser.push(newValue);
  //   }
    
  // }
  // resetSelectedData() {
  //   this.selectedUser.next(null);
  // }  
}
