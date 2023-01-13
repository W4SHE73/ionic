import { Component, OnInit } from '@angular/core';
import { NewsArticlesService } from 'src/app/api/news-articles.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  // no funciono de la forma topHeadlines = []
  topHeadlines = Array();

  constructor(private articleService:NewsArticlesService) {
    articleService.getTopHeadlines().subscribe((results) => {
      //console.log(results.articles);
      //this.topHeadlines = results.articles
      this.topHeadlines.push(...results.articles)
      console.log(this.topHeadlines);
    })
   }

  ngOnInit() {
  }

}
