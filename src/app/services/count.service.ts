import { Injectable } from '@angular/core';

@Injectable()
export class CountService {
 
 constructor() { }
 
  public currScore = 0;
 
  get() {
    return this.currScore;
  }
 
  increment() {
    this.currScore++;  
  }

  reset() {
  	this.currScore = 0;
  }
}