import { Injectable } from '@angular/core';
import {Category} from '../model/category.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = 'http://localhost:8080/category/';

  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.baseUrl, {observe: 'body'});
  }

  public getCategoryById(categoryId: string): Observable<Category> {
    return this.http.get<Category>(this.baseUrl.concat(categoryId), {observe: 'body'});
  }

  public createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category, {observe: 'body'});
  }
}
