import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() totalCount;
  @Input() pageSize = 20;
  @Output() pageChange = new EventEmitter<number>();

  public page$ = new BehaviorSubject(0);

  public pages = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.totalCount = changes["totalCount"].currentValue;

    if(this.totalCount){
      this.pages = new Array(Math.ceil(this.totalCount / this.pageSize));
      console.log(this.pages);
    }
  }

  setPage(idx: number) {
    console.log('paginator setpage idx: ', idx);
    this.page$.next(idx * this.pageSize);
  }
}
