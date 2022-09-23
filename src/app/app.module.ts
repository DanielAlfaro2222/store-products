import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailCategoryComponent } from './components/detail-category/detail-category.component';
import { CartComponent } from './components/cart/cart.component';
import { ListCategoriesComponent } from './components/list-categories/list-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DetailProductComponent,
    MenuCategoriesComponent,
    HeaderComponent,
    FooterComponent,
    DetailCategoryComponent,
    CartComponent,
    ListCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
