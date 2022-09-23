import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCategoryComponent } from './components/detail-category/detail-category.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

const routes: Routes = [
  { path: 'category/:slug', component: DetailCategoryComponent },
  { path: 'product/:slug', component: DetailProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
