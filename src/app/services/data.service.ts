import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpC:HttpClient) { }

  getData():Observable<any>{
    return this.httpC.get('./assets/data/about.json');
  }

}
