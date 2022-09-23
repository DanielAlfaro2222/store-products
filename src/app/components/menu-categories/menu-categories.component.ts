import { Component, OnInit } from '@angular/core';
import { RequestCategoriesService } from 'src/app/services/request-categories/request-categories.service';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.scss']
})
export class MenuCategoriesComponent implements OnInit {
  categorias: string[] = [];

  constructor(private requestCategoriesService: RequestCategoriesService) { }

  ngOnInit(): void {
    this.requestCategoriesService.getAllCategories()
      .subscribe(data => this.categorias = data);
  }
}
