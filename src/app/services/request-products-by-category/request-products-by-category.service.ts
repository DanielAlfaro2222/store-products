import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.models';

@Injectable({
  providedIn: 'root'
})
export class RequestProductsByCategoryService {
  urlBase: string = "https://fakestoreapi.com/products/category/";

  constructor(private httpClient: HttpClient) { }

  getAllProductsByCategory(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.urlBase}${category}`);
  }
}
