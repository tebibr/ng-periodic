import { Component, OnInit } from '@angular/core';
import { CountService } from '../services/count.service';
import { ElementsService } from '../services/elements.service';

@Component({
  selector: 'elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  constructor(private countService: CountService, private elementsService: ElementsService) { }

  ngOnInit() { 
    this.clearGame();
  }

  //if the user's input matches an element name, doesn't already exist, and isn't empty, then add a score, reset the input, and show the element name
  eleGuessCheck(event) {
    this.elementsService.eleArr.forEach(element => {
      if (element.name === event.target.value.toLowerCase() && element.name !== '' && element.showName === false) {
        this.countService.increment();
        element.showName = true;
        event.target.value = '';
      }
    });
  }

  clearGame() {
    this.countService.reset();

    this.elementsService.eleArr.forEach(element => {
      element.showName = false;
    });
  }
}
