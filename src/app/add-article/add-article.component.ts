import { Component, OnInit, Input } from '@angular/core';
import { Form } from '@angular/forms';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  articles = []

  constructor(private dataService: DataServiceService) { }


  ngOnInit(): void {
    this.dataService.currentArticleList.subscribe(list => this.articles = list);
  }

  addArticle(add){
    var newArticle = {}
    newArticle['title'] = add.value.title;
    newArticle['content'] = add.value.content;
    newArticle['date'] = new Date().toString().slice(0, 16);
    this.dataService.updateArticle(newArticle)
  }

}
