import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private articleList = new BehaviorSubject([
    {
      title: 'Article 1',
      content: 'This is my first article',
      date: new Date().toString().slice(0, 16)
    },
    {
      title: 'Article 2',
      content: 'This is my second article'
    }]);


  currentArticleList = this.articleList.asObservable();

  constructor() {
  }

  updateArticle(add) {
    const currentArticle = this.articleList.value;
    const updatedArticle = [...currentArticle,add]
    this.articleList.next(updatedArticle)
  }

}
