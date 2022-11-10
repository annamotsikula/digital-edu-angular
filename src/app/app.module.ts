import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ProductsComponent } from './shopping-cart/products/products.component';
import { TruncateStrPipe } from './shopping-cart/meta-data/truncate-str.pipe';
import { ElementHighlighter } from './shopping-cart/meta-data/elemBackground.directive';
import { RatingStarsComponent } from './shopping-cart/rating-stars/rating-stars.component';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ChildComponent,
    ProductsComponent,
    TruncateStrPipe,
    ElementHighlighter,
    RatingStarsComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
