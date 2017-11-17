import { Component, OnInit } from '@angular/core';
import { Pipe } from "@angular/core";
import { Observable }       from 'rxjs/Observable';
import { MyWebAPIService } from '../services/mywebapi.service';

@Component({
  selector: 'scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css'],
})

export class ScoresComponent implements OnInit {
  constructor(private mywebapiService: MyWebAPIService) {
  }

  ngOnInit() : void {
    const apiUrl = 'http://tebaibrahim.com/periodic-table/periodic-scores.php';

    this.mywebapiService.fetchResponse().subscribe(data => {
      this.mywebapiService.results = JSON.parse(data['_body']).records.sort(function(a, b) {
        return b.score - a.score;
      });
    });
  }
}
