import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  articles = [];
  isEditable;
  index;

  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.currentArticleList.subscribe(list => this.articles = list);
    this.dataService.currentEditState.subscribe(state => this.isEditable = state);
    this.dataService.currentIndex.subscribe(value => this.index = value);
  }

  updateArticle(update) {
    var editedArticle = update.value;
    editedArticle['date'] = new Date().toString().slice(0, 16);
    this.articles[this.index] = editedArticle;
    this.dataService.updateArticle(this.articles);
    this.dataService.updateEditState(!this.isEditable);
    alert("Artilce Updated");
    this.router.navigateByUrl('/articles')
  }

}
