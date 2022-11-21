import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component } from '@angular/core';
import { TodoService } from './todo-app/data-model/todo-service.service';
interface IPerson {
  name: string,
  lastName: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'currENtly unavailable';
  person: IPerson = 
  {
    name: 'John',
    lastName: 'Doe'
  }
  customNumber: number = 23.45676567;
  date: Date = new Date();
  randomNums: number[] = []
  // array of strings 
  numArray: number[] = [23, 12, 1 , 5 , 709, 45, 34, 39]
  

  constructor() {
    // this.stringArray.push('3')
    this.randomNums = this.generateNumArray(8);
    // console.log(this.randomNums)
  }
  checkNum(num: number): boolean {
    if(num % 2 == 0) {
      return true
    } 
    return false
  }

  generateNumArray(len: number): number[] {
    return Array.from({length: len}, () =>  Math.floor(Math.random() * 100))
   
  }
}
