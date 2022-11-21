import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPerson } from './person.interface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , AfterViewInit {
  @ViewChild('getUser') usrname!: ElementRef;
  name: string = 'Angular Project has started.'
  student: IPerson;
  userInputName: string = '456789'
  constructor() { 
  this.student =  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    email: "Shanna@melissa.tv",
    employed: true,
    salary: 1000,
    phone: '10-692-6593',
    website: "hildegard.orgt",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
    }
  }
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // console.log(this.usrname.nativeElement.innerHTML)
  
  }
  getEmployStatus(student: IPerson) {
    if(student.employed) {
      console.log('EMployed')
    } else {
      console.log('Open to work')
    }
  }

  setUserName(name: string) {
    this.student.name = name 
  }
 receiveData(data: boolean) {
  console.log(`From Child, I'm sending the value of: ${data}`)
 }

  
}
