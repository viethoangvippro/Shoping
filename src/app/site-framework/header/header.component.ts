import { Component } from '@angular/core';
import { Product } from 'src/app/products/product';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  productList: Product | any;
  items: any;
  p: any;
  pageSize: string | number | undefined;
  searchText: string | any;

  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data) => {
      this.productList = data;
    });
  }
  getProducts() {
    this.productsService.getProducts().subscribe(
      (products: Product[]) => {
        this.productList = products;
      }
    );
  }
}
