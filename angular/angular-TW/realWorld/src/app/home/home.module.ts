import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from '../article/article.component'
import { TagComponent } from '../tag/tag.component';

@NgModule({
  declarations: [
    ArticleComponent,
    TagComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
