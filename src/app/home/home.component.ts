import { Component, OnInit } from '@angular/core';
import { IPerson } from './person.interface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string = 'Angular Project has started.'
  student: IPerson;
  constructor() { 
    this.student = {
      fistName: 'Joe',
      lastName: 'Doe',
    }
  }

  ngOnInit(): void {
    console.log('Component initialized')
  }

  printUserName(name: string) {
    this.student.fistName = name
  }

  selectChange() {
    
  }
}
