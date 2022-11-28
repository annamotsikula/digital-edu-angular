import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss'],

})
export class RatingStarsComponent implements OnInit {

  @Input() maxNum: number = 0;
  @Output() starRate: EventEmitter<number> = new EventEmitter<number>();

  starMaxNum!: number[]
  @Input() rateNumber!: number;
  constructor() { }

  ngOnInit(): void {
    this.starMaxNum = []
    for(let i=0; i<this.maxNum; i++) {
      this.starMaxNum.push(i+1)
    }
    this.rateNumber = Math.round(this.rateNumber)

  }

  getRateNumber(num: number) {
    if(this.rateNumber === num) {
      this.rateNumber = 0
    } else {
      this.rateNumber = num
    }
    this.starRate.emit(this.rateNumber)

  }



}
