import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css'],
})
export class ViewAllProductsComponent implements OnInit {
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
