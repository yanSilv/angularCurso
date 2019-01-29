import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();

  rates: number[] = [1,2,3,4,5];

  rate: number = 0;

  previousRating: number = 0;

  constructor() { }

  ngOnInit() {
  }

  setRate(r: number) {
    this.rate =r;
    this.previousRating = this.rate;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r: number) {
    this.rate = r;
  }

  clearTemporaryRate() {
    this.rate = this.previousRating;
  }

}
