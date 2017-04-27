import { Component, OnInit } from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { MyWebAPIService } from '../services/mywebapi.service';

@Component({
  selector: 'scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  constructor(private mywebapiservice: MyWebAPIService) { }

  //fetch the response from the API
  ngOnInit() : void {
  	this.mywebapiservice.fetchResponse().subscribe(response => {
  		this.mywebapiservice.items = response;
  	});
  }

  //parses the string
  convert( value:string ) : string {
    try {
      let p = JSON.parse( value );
      return p;
    } catch( e ) {
      return value;
    }
  }
}
