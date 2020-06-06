import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {

  articles = [];
  isEditable;
  index;

  constructor(private dataService: DataServiceService, private router: Router) { }


  ngOnInit(): void {
    this.dataService.currentArticleList.subscribe(list => this.articles = list);
    this.dataService.currentEditState.subscribe(state => this.isEditable = state);
    this.dataService.currentIndex.subscribe(value => this.index = value);
  }

  deleteArticle(i) {
    if (confirm("Are you sure to delete this artilce?")) {
      this.articles.splice(i, 1);
      this.dataService.updateDeletedArticle(this.articles);
    }
  }

  editArticle(i) {
    if(this.isEditable) {
      this.dataService.updateEditState(!this.isEditable);
      this.router.navigateByUrl('/edit-article');
      this.dataService.updateIndex(i);
    }
    else {
      this.router.navigateByUrl('/edit-article');
      this.dataService.updateIndex(i);
    }
  }

}
