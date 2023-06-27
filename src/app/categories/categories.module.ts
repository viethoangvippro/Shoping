import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAllComponent } from './view-all/view-all.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewAllComponent,
    CreateCategoryComponent,
    DeleteCategoryComponent,
    UpdateCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[

  ]
})
export class CategoriesModule { }
