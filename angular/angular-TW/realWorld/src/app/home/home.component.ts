import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TagModel } from '../models/tag.model';

import { Articles } from '../models/articles.model';
import { Article } from '../models/article.model';

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
  public articles: Article[] = [];
  public tags = mockTags;
  private baseUrl = "http://localhost:3300/api";

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.http.get<Articles>(`${this.baseUrl}/articles/`).subscribe({
      next: res => {
        console.log(res);
        res.articles.forEach(article => {
          article.createdAt = new Date(article.createdAt);
          article.updatedAt = new Date(article.updatedAt);
        });
        this.articles = res.articles;
      }
    });
  }

  ngOnInit(): void {
  }

  // like(_article: ArticleModel) {
  //   const tempIndex = this.articles.findIndex(article => article.author === _article.author);
  //   console.log('articles: ', this.articles[tempIndex]);
  //   console.log('_article: ', _article);
  // }
}