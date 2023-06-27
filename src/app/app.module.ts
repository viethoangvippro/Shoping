import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { OrdersModule } from './orders/orders.module';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    HttpClientModule,
    SiteFrameworkModule,
    UserModule,
    FormsModule,
    HomeModule,
    ProductsModule,
    CategoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
