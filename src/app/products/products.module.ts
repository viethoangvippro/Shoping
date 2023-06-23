import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ProductsSearchComponent } from './products-search/products-search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductFilterPipe } from './product-filter.pipe';
import { SiteFrameworkModule } from "../site-framework/site-framework.module";



@NgModule({
    declarations: [
        ProductsComponent,
        CreateProductComponent,
        ViewProductComponent,
        ViewAllProductsComponent,
        UpdateProductComponent,
        DeleteProductComponent,
        ViewAllProductsByDateComponent,
        ViewAllProductsByCategoryComponent, ProductsSearchComponent,
        ProductFilterPipe
    ],
    exports: [
        ProductsComponent,
        CreateProductComponent,
        ViewProductComponent,
        ViewAllProductsComponent,
        UpdateProductComponent,
        DeleteProductComponent,
        ViewAllProductsByDateComponent,
        ViewAllProductsByCategoryComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        FormsModule,
        NgxPaginationModule,
        SiteFrameworkModule,

    ]
})
export class ProductsModule { }
