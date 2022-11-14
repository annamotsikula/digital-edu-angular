import { Injectable } from '@angular/core';
import { ITodoList } from './todo.interface';

@Injectable({
 providedIn: 'root'
})
export class TodoService {
  private _todoList: ITodoList[] = [
    {
      
      id: 1,
      title: 'delectus aut autem',
      completed: false
    },
    {
     
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false
    },
      {
      
      id: 3,
      title: 'fugiat veniam minus',
      completed: true
      },
      {
      
      id: 4,
      title: 'et porro tempora',
      completed: true
      }
  ]
  constructor() { }

  getTodoList(): ITodoList[] {
    return this._todoList
  }
  addTodoList(title: string) {
    const newTodo: ITodoList = {
      id: this._todoList.length + 1,
      title: title,
      completed: false
    }
    this._todoList.unshift(newTodo)
    console.log(this._todoList)
  }
  removeTodo(id:number) {
    this._todoList = this._todoList.filter(todo => todo.id !== id)
    console.log(this._todoList)
  }
}
