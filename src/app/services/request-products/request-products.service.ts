import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestProductsService {
  baseURL: string = "https://fakestoreapi.com/products";

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product> {
    return this.httpClient.get<Product>(this.baseURL);
  }
}
