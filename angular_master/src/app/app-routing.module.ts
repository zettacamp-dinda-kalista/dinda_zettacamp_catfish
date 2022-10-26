import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './new-content/home/home.component';
import { DetailComponent } from './new-content/detail/detail.component';


const routes: Routes = [
  {path: 'home-component', component: HomeComponent},
  {path: 'detail-component', component: DetailComponent},
  {path:'detail-component/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
