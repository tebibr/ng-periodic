import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }       from 'rxjs/Observable';
import { CountService } from '../services/count.service';
import { MyWebAPIService } from '../services/mywebapi.service';


@Component({
  selector: 'play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private router: Router, private countService: CountService, private mywebapiservice: MyWebAPIService) { }

  ngOnInit() { }

  re = new RegExp('^[a-zA-Z0-9]*$');

  //pushes score, username, and pizza topping to API and navigates to scores page
  scoreAndRedirect() {
  	const body = { username: this.mywebapiservice.username, topping: this.mywebapiservice.topping, score: this.countService.get() };

  	this.mywebapiservice
        .pushResponse( this.mywebapiservice.username, JSON.stringify( body ) )
        .subscribe( 
            message => this.mywebapiservice.update = message, 
            error => console.log("Error: ", error));

    this.mywebapiservice.username = '';
    this.mywebapiservice.topping = 'pizza topping';
  	this.router.navigate(['/scores']);
  }
}
