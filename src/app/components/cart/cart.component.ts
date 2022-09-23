import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  total: number = 0;
  quantity: number = this.products.length;

  constructor() { }

  ngOnInit(): void {
  }

}
