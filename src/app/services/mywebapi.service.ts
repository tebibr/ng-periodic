import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class MyWebAPIService {
  
  constructor(private http: Http) {}

  public results: string[];

  public name = ''; 
  public score = '';
  public topping = 'pizza topping';
  
  fetchResponse() {
    const apiUrl = 'http://tebaibrahim.com/periodic-table/periodic-scores.php';

    return this.http.get(apiUrl);
  }

  pushResponse(body) {
    const apiUrl = 'http://tebaibrahim.com/periodic-table/periodic-scores.php';

    return this.http.get(`${apiUrl}?name=${body.name}&topping=${body.topping}&score=${body.score}`);
  }
}