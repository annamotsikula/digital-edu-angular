import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    // if(form.valid) {
    //   console.log('Form Submitted', form.value)
    //   form.reset();
      
    // } else {
    //   console.log('Not valid')
    // }
    this._router.navigate(['/main/home'])
  }
  gotoRegister() {
    this._router.navigate(['/register'])

  }
}
