import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { ChildComponent } from '../child/child.component';
import { ProductsComponent } from '../shopping-cart/products/products.component';
import { TruncateStrPipe } from '../shopping-cart/meta-data/truncate-str.pipe';
import { ElementHighlighter } from '../shopping-cart/meta-data/elemBackground.directive';
import { RatingStarsComponent } from '../shopping-cart/rating-stars/rating-stars.component';
import { TodoListComponent } from '../todo-app/todo-list/todo-list.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ChildComponent,
    ProductsComponent,
    TruncateStrPipe,
    ElementHighlighter,
    RatingStarsComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    ChildComponent,
    ProductsComponent,
    TruncateStrPipe,
    ElementHighlighter,
    RatingStarsComponent,
    TodoListComponent,
  ]
})
export class MainModule { }
