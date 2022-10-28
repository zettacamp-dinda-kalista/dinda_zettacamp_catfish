import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  {path: "user-list", component: UserListComponent},
  {path: "user-detail", component: UserDetailComponent},
  {path: "", redirectTo: "user-detail", pathMatch: "full"},
  {path: "form-edit/:id", component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
