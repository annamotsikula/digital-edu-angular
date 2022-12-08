import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup
  constructor(private _router: Router, private _fb: FormBuilder, private _auth: AuthService) { 
    this.authForm = this._fb.group({
      email: this._fb.control('kminchelle', Validators.required),
      pwd: this._fb.control('0lelplR', Validators.required)

    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.authForm.valid) {
      console.log('Form Submitted', this.authForm.value)
      this._auth.authUser(this.authForm.value).subscribe(() => {
        this._router.navigate(['/main/products'])
      })
      
    } else {
      console.log('Not valid')
    }
  }
  gotoRegister() {
    this._router.navigate(['/register'])

  }
}
