import { Component, 
        OnInit, 
        HostBinding, 
        Input } from '@angular/core';
import { Article } from '../../model/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
/* ************************************************* */
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
   /* ----------------------------------------------- */
  constructor() {
    /*
    this.article = new Article(
      'Angular',
      'http://angular.io',
      10
    )*/
  }
  /* ----------------------------------------------- */
  ngOnInit(): void {
  }
  /* -----------------------------------------------*/
  voteUp() {
    this.article.voteUp();
    return false;
  }
  voteDown() {
    this.article.voteDown();
    return false;
  }
  /*----------------------------------------------- */
}
/* ************************************************* */
