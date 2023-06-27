import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../categories';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent {
  categoryList: any;
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe((data: any) => {
      this.categoryList = data;
    });
  }
  getCategories() {
    this.categoriesService.getAllCategories().subscribe(
      (categories: Category[]) => {
        this.categoryList = categories;
      }
    );
  }
}
