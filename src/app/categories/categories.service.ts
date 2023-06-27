import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<Category> | any{
    const categoryUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoryUrl);
  }
}
