import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component: ListArticleComponent},
  {path: 'add-article', component: AddArticleComponent},
  {path: 'edit-article', component: EditArticleComponent},
  {path: 'articles', component: ListArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
