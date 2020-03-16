import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TagModel } from '../models/tag.model';

import { Articles } from '../models/articles.model';
import { Article } from '../models/article.model';
import { ApiService } from '../service/api.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

const mockTags: TagModel[] = [
  {
    name: 'programming',
    url: ''
  },
  {
    name: 'javascript',
    url: ''
  },
  {
    name: 'emberjs',
    url: ''
  },
  {
    name: 'angularjs',
    url: ''
  },
  {
    name: 'react',
    url: ''
  },
  {
    name: 'mean',
    url: ''
  },
  {
    name: 'node',
    url: ''
  },
  {
    name: 'rails',
    url: ''
  }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public articles$ = this.apiService.loadData().pipe(map(result => result.articles))
  public tags = mockTags;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  // like(_article: ArticleModel) {
  //   const tempIndex = this.articles.findIndex(article => article.author === _article.author);
  //   console.log('articles: ', this.articles[tempIndex]);
  //   console.log('_article: ', _article);
  // }
}