import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }       from 'rxjs/Observable';
import { CountService } from '../services/count.service';
import { MyWebAPIService } from '../services/mywebapi.service';


@Component({
  selector: 'submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private router: Router, private countService: CountService, private mywebapiService: MyWebAPIService) { }

  ngOnInit() { }

  re = new RegExp('^[a-zA-Z0-9]*$');

  scoreAndRedirect() {
    const body = { name: this.mywebapiService.name, topping: this.mywebapiService.topping, score: this.countService.get() };

    this.mywebapiService.pushResponse(body).subscribe(data => { });

    this.mywebapiService.name = '';
    this.mywebapiService.topping = 'pizza topping';
    this.router.navigate(['/scores']);
  }
}
