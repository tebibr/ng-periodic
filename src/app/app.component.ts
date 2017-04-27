import { Component } from '@angular/core';
import { CountService } from './services/count.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
	constructor(private countService: CountService) { }

	//called on elements page to reset the score
	resetScore() {
		this.countService.reset();
	}

  title = 'how many elements can you name?';
}
