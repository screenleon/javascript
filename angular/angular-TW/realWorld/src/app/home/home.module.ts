import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { ArticleComponent } from '../article/article.component'
import { TagComponent } from '../tag/tag.component';
import { PaginatorComponent } from '../paginator/paginator.component';

@NgModule({
  declarations: [
    ArticleComponent,
    TagComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
