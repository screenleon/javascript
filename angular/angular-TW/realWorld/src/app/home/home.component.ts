import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { TagModel } from '../models/tag.model';

import { ApiService } from '../service/api.service';

import { PaginatorComponent } from '../paginator/paginator.component';

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
export class HomeComponent implements OnInit, AfterViewInit {
  // @ViewChild('paginator') paginator: PaginatorComponent;
  @ViewChild(PaginatorComponent) paginator: PaginatorComponent;

  public page$ = new BehaviorSubject(0);

  public source$ = this.page$.pipe(switchMap(offset => this.apiService.loadData({ _limit: 20, _offset: offset })), shareReplay());
  public data$ = this.source$.pipe(map(result => result.articles))
  public tags = mockTags;
  public totalCount$ = this.source$.pipe(map(result => result.articlesCount));



  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  // like(_article: ArticleModel) {
  //   const tempIndex = this.articles.findIndex(article => article.author === _article.author);
  //   console.log('articles: ', this.articles[tempIndex]);
  //   console.log('_article: ', _article);
  // }

  ngAfterViewInit() {
    this.paginator.page$.subscribe(this.page$);
  }
}