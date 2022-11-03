import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './film/about/about.component';
import { ActorsComponent } from './film/actors/actors.component';
import { MovieComponent } from './film/movie/movie.component';
import { ActorsDetailComponent } from './film/actors-detail/actors-detail.component';
import { MovieDetailComponent } from './film/movie-detail/movie-detail.component';

const routes: Routes = [
  {path: "movie-list", component: MovieComponent},
  {path: "actor-list", component: ActorsComponent},
  {path: "about", component: AboutComponent},
  {path: "actor-detail/:id", component: ActorsDetailComponent},
  {path: "movie-detail/:id", component: MovieDetailComponent},
  // {path: "edit-article/:id", component: CardDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
