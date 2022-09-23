import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RequestCategoriesService {
  private urlBase: string = "https://fakestoreapi.com/products/categories";

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.urlBase);
  }
}
