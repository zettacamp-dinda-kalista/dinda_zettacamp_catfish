import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardArticleComponent } from './article/card-article/card-article.component';
import { CardDetailComponent } from './article/card-detail/card-detail.component';

const routes: Routes = [
  {path: "article", component: CardArticleComponent},
  {path: "detail", component: CardDetailComponent},
  {path: "edit-article/:id", component: CardDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
