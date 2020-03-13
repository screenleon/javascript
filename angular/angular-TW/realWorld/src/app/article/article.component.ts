import { Component, OnInit, Input } from '@angular/core';
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  private LikeButtonPress: boolean = false;
  // @Output() like = new EventEmitter<ArticleModel>();

  constructor() { 
    // this.LikeButtonPress = this.article.favorited || false;
  }

  ngOnInit(): void {
  }

  clickLike(_article: Article) {
    if (this.likeButtonPress)
      _article.favoritesCount -= 1;
    else
      _article.favoritesCount += 1;
    this.toggleLikeButton();
    // this.like.emit(_article);
  }

  get likeButtonPress() {
    return this.LikeButtonPress;
  }
  private toggleLikeButton() {
    this.LikeButtonPress = !this.LikeButtonPress;
  }
}
