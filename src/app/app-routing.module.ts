import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CategoriesComponent} from './categories/categories.component';
import {CategoryComponent} from './category/category.component';
import {AddCategoryComponent} from './categories/add-category/add-category.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'add-category', component: AddCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
