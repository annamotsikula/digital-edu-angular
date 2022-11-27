import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ageValidator } from './validators/ageValidator';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent implements OnInit {

  surveyForm: FormGroup;
  constructor(private _fb: FormBuilder) { 
    this.surveyForm = this._fb.group({
      firstName: this._fb.control(null, Validators.required),
      lastName: this._fb.control(null, [Validators.minLength(3), Validators.required]),
      email: this._fb.control(null),
      age: this._fb.control(null, [Validators.required, ageValidator]),
      gender: this._fb.control(null),
      address: this._fb.group({
        country: this._fb.control(null),
        city: this._fb.control(null),
      }),
      phone: this._fb.array([
        this._fb.control(null, Validators.required)
      ])
    })
  }

  ngOnInit(): void {
    // this.setDefaultForm()
    // console.log(this.surveyForm)
    console.log(this.phoneList['controls'])
  }
  onSubmit() {
    if(this.surveyForm.valid) {
      alert(JSON.stringify(this.surveyForm.value))
    }
    console.log(this.surveyForm)
  }
  setDefaultForm() {
    this.surveyForm.setValue({
      firstName:  'Alexa',
      lastName: 'Smith',
      email: 'test@test.com',
      age: '25',
      gender: 'fm',
      address: {
        country: 'USA',
        city: 'Washigton',
      },
      phone: [null]
    })
  }
  changeGender() {
    this.surveyForm.patchValue({
      age: '29',
      firstName:  'Alex',
      gender: 'm',
    })
  }
  addNewPhoneControl() {
    this.phoneList.push(this._fb.control(null, Validators.required))

  }
  get phoneList() {
    return this.surveyForm.get('phone') as FormArray
  }
  get lastNameControl() {
    return this.surveyForm.get('lastName') as FormControl
  }
  get firstNameControl() {
    return this.surveyForm.get('firstName') as FormControl
  }
  get age() {
    return this.surveyForm.get('age') as FormControl
  }
}
