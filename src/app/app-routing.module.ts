import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './shopping-cart/products/products.component';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'login' ,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  { 
    path: '**',
    component: PagenotfoundComponent
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
