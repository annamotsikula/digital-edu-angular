import { Component } from '@angular/core';
import { TodoService } from './todo-app/data-model/todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {

  title = 'currENtly unavailable';
  person = {
    name: 'John',
    lastName: 'Doe'
  }
  customNumber: number = 23.45676567;
  date: Date = new Date();
}
