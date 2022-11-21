import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {

  surveyForm: FormGroup;
  constructor() { 
    this.surveyForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.minLength(3)),
      email: new FormControl(null),
      age: new FormControl(null, Validators.min(18)),
      gender: new FormControl(null),
      address: new FormGroup({
        country: new FormControl(null),
        city: new FormControl(null),
      }),
      phone: new FormControl(null)
    })
  }

  ngOnInit(): void {
    // console.log(this.surveyForm)
  }
  onSubmit() {
    console.log(this.surveyForm)
  }
  get lastNameControl() {
  
    return this.surveyForm.get('lastName') as FormControl
  }

}
