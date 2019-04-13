import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Category} from '../model/category.model';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Array<Category> = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(
      r => this.categories = r
    );
  }

}
