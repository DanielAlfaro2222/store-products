import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Product } from 'src/app/models/product.models';
import { RequestProductsByCategoryService } from 'src/app/services/request-products-by-category/request-products-by-category.service';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.scss']
})
export class DetailCategoryComponent implements OnInit {
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private requestProductsByCategory: RequestProductsByCategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.requestProductsByCategory.getAllProductsByCategory(params['slug'])
        .subscribe(data => this.products = data);
    });
  }

}
