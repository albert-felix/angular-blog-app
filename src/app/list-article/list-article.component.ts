import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {

  articles = []

  constructor(private dataService: DataServiceService) { }


  ngOnInit(): void {
    this.dataService.currentArticleList.subscribe(list => this.articles = list);
  }


}
