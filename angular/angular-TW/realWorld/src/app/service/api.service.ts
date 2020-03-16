import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articles } from '../models/articles.model';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://localhost:3300/api";
  // private baseUrl = 'https://conduit.productionready.io/api"

  constructor(private http: HttpClient) { }

  loadData() {
    return this.http.get<Articles>(`${this.baseUrl}/articles/`)
      .pipe(map(result => {
        result.articles.forEach(article => {
          article.createdAt = new Date(article.createdAt);
          article.updatedAt = new Date(article.updatedAt);
        });
        return result
      }))
  }
}
