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

  title = 'how many elements can you name?';
}
