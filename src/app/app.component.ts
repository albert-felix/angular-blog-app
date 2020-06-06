import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'blog-app';
  active;
  articles = [
    {
      title:'Article 1',
      content:'This is my first article',
      date: new Date().toString().slice(0,16)
    },
    {
      title:'Article 2',
      content:'This is my second article'
    }
  ]

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate([''])
  }

}
