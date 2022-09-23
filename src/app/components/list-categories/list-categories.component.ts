import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.models';
import { RequestCategoriesService } from 'src/app/services/request-categories/request-categories.service';
import { RequestProductsByCategoryService } from 'src/app/services/request-products-by-category/request-products-by-category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {
  categoriesWithProducts: Category[] = [];

  constructor(private requestCategoriesService: RequestCategoriesService, private requestProductsByCategory: RequestProductsByCategoryService) { }

  ngOnInit(): void {
    this.requestCategoriesService.getAllCategories()
      .subscribe(data => {
        this.mappingCategoriesWithProducts(data);
      });
  }

  private mappingCategoriesWithProducts(data: string[]): void {
    for (let category of data) {
      this.requestProductsByCategory.getAllProductsByCategory(category)
        .subscribe(products => this.categoriesWithProducts.push({
          title: category,
          products
        }))
    }
  }
}
