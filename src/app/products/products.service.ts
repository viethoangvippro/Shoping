import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {

  }
  getAllProducts() : Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl);
  };
  getProducts(): Observable<Product[]> {
    const productUrl = 'http://localhost:3000/products'
    return this.httpClient.get<Product[]>(productUrl);
  }
  getCategories() : Observable<Category>{
  const categoryUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoryUrl);
}

   createProduct(productBody: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';

    return this.httpClient.post<Product>(productUrl,productBody);
  };
  updateProduct(productId: any,productBody: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;

    return this.httpClient.put<Product>(productUrl,productBody);
  };
  deleteProduct(productId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;

    return this.httpClient.delete<Product>(productUrl);
  };
  searchCategoryProducts(categoryId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products?categoryId='+categoryId;

    return this.httpClient.get<Product>(productUrl);
  };
  searchDateProducts(dateParam: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/date='+dateParam;

    return this.httpClient.get<Product>(productUrl);
  };
  viewProduct(productId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;

    return this.httpClient.get<Product>(productUrl);
  };
}
