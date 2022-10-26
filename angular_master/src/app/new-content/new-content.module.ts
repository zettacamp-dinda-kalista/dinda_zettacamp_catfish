import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ListDataComponent } from './home/list-data/list-data.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home-component', component: HomeComponent},
  {path: 'detail-component', component: DetailComponent},
];


@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    ListDataComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)

  ],
  exports: [
    HomeComponent,
    DetailComponent,
    ListDataComponent,
    RouterModule,
  ]
})
export class NewContentModule { }
