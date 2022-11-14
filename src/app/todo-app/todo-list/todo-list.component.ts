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
  canEdit: boolean = false
  todoList: ITodoList[] = []
  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodoList();
  }
  

  getTodoList() {
    this.todoList = this._todoService.getTodoList().map(obj => ({...obj, editMode: false}))
    console.log(this.todoList)
  
  }
   
  addTodo(text: string) {
    if(text !== '') {
      this._todoService.addTodoList(text);
      this.todoText = ''
      this.getTodoList();
    }
  }
  updateTodo(todo: ITodoList) {
    if(todo.title !== '') {
      todo.editMode = false;
    }
  }
  get completedTodos() {
    return this.todoList.filter(todo=> todo.completed)
  }
  get activeTodos() {
    return this.todoList.filter(todo=> !todo.completed)
  }
  removeItem(id: number) {
    this._todoService.removeTodo(id);
    this.getTodoList();
  }

  cancel() {
    console.log('Esc was clicked.')

  }
}
