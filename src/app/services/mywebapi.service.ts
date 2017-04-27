import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class MyWebAPIService {
  
  constructor(private jsonp: Jsonp) {}

  public update:string[];

  public finished = false;
  public errors = false;

  public items:string[];

  public ref = 'ngteba';

  public username = ''; 
  public score = '';
  public topping = 'pizza topping';
  
  fetchResponse() {
    const apiUrl = 'http://jamfco.com/api.php';
    
    const params = new URLSearchParams();
    params.set('action', 'fetch');
    params.set('ref', this.ref);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(apiUrl, { search: params }).map(response => {
      return <string[]> response.json();
    });
  }

  pushResponse( key: string, body:string ) {
    const apiUrl = 'http://jamfco.com/api.php';
    
    const params = new URLSearchParams();
    params.set('action', 'push');
    params.set('ref', this.ref);
    params.set('fkey', key);
    params.set('body', body);
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(apiUrl, { search: params }).map(response => {
      return <string[]> response.json();
    });
  }
}