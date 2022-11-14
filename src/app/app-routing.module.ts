import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './shopping-cart/products/products.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: 'home',
    redirectTo: ''
  }
  

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
