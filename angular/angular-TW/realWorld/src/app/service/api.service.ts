import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Articles } from '../models/articles.model';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private baseUrl = "http://localhost:3300/api";
  private baseUrl = 'https://conduit.productionready.io/api';

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param limit 單一頁面顯示多少筆資料
   * @param offset 取得offset後面的資料 
   */
  loadData({ limit, offset }) {
    let params = new HttpParams();
    if (limit !== 20) {
      params = params.set('limit', limit);
    }
    if (offset !== 0) {
      params = params.set('offset', offset);
    }
    return this.http.get<Articles>(`${this.baseUrl}/articles`, { params })
      .pipe(map(result => {
        result.articles.forEach(article => {
          article.createdAt = new Date(article.createdAt);
          article.updatedAt = new Date(article.updatedAt);
        });
        return result
      }))
  }

  /**
   * 取得文章
   * @param author 取得特定作者的文章
   * @param offset   取得offset後面的資料 
   */
  getAuthorArticle({ author, offset }) {
    let params = new HttpParams();
    params = params.set('author', author);
    if (offset !== 0) {
      params = params.set('offset', offset);
    }
    return this.http.get<Articles>(`${this.baseUrl}/articles`, { params })
      .pipe(map(result => {
        result.articles.forEach(article => {
          article.createdAt = new Date(article.createdAt);
          article.updatedAt = new Date(article.updatedAt);
        });
        return result
      }))
  }

  getProfile(username) {
    return this.http.get(`${this.baseUrl}/profiles/${username}`).pipe(map((res: any) => res.profile));
  }
}
