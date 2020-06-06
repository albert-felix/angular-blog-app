import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  articles = []

  constructor(private dataService: DataServiceService, private router: Router) { }


  ngOnInit(): void {
    this.dataService.currentArticleList.subscribe(list => this.articles = list);
  }

  addArticle(add){
    var newArticle = add.value;
    newArticle['date'] = new Date().toString().slice(0, 16);
    this.dataService.addArticle(newArticle)
    alert("New article created");
    this.router.navigateByUrl('/articles')
  }

}
