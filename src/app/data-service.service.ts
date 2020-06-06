import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private articleList = new BehaviorSubject([
    {
      title: 'Apple',
      content: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.',
      date: 'Thu Jun 03 2020'
    },
    {
      title: 'Microsoft',
      content: 'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
      date: 'Fri Jun 04 2020'
    },
    {
      title: 'Google',
      content: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. ',
      date: 'Sat Jun 05 2020'
    },
    {
      title: 'Amazon',
      content: 'Amazon.com, Inc., is an American multinational conglomerate technology company based in Seattle that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
      date: 'Sat Jun 05 2020'
    }
  
  ]);

  private isEditable = new BehaviorSubject(true);

  private index = new BehaviorSubject(0)

  currentArticleList = this.articleList.asObservable();
  currentEditState = this.isEditable.asObservable();
  currentIndex = this.index.asObservable();

  constructor() {
  }

  addArticle(add) {
    const currentArticle = this.articleList.value;
    const updatedArticle = [...currentArticle, add]
    this.articleList.next(updatedArticle)
  }

  updateDeletedArticle(i) {
    this.articleList.next(i);
  }

  updateEditState(state) {
    this.isEditable.next(state);
  }

  updateIndex(i) {
    this.index.next(i);
  }

  updateArticle(update) {
    this.articleList.next(update);
  }



}
