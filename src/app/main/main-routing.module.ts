import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { ProductsComponent } from "../shopping-cart/products/products.component";
import { SurveyFormComponent } from "../survey-form/survey-form.component";
import { TodoListComponent } from "../todo-app/todo-list/todo-list.component";
import { MainComponent } from "./main.component";

const ROUTES: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'todo',
        component: TodoListComponent
      },
      {
        path: 'survey',
        component: SurveyFormComponent
      }

    ]
  }
]
@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }
  