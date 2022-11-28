import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { debounceTime, filter, map, Observable, of, tap } from 'rxjs';
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
export class AppComponent implements OnInit {
 
  testObservable$: Observable<any> = of(24, 50, 520, 89, 10, 1, 96)
  constructor() {}
 
  ngOnInit(): void {
    this.testObservable$.pipe(
      filter(num => num > 50),
      tap(p => console.log(p)),
      map(x => x * 10)
    )
    .subscribe(num => console.log('Value is:  ', num))
  }

}
