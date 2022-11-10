import { Component, OnInit } from '@angular/core';
import { TodoService } from '../data-model/todo-service.service';
import { ITodoList } from '../data-model/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoText: string = ''
  todoList: ITodoList[] = []
  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this.todoList = this._todoService.getTodoList()
  }

  addTodo(text: string) {
    if(text !== '') {
      this._todoService.addTodoList(text);
      this.todoText = ''
    }
  }

}
