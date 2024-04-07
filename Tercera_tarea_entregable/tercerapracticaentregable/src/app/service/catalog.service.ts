import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { 

  }
  getAllCars(): Observable<any> {
    return this.http.get('https://raw.githubusercontent.com/itemsapi/itemsapi-example-data/master/items/cars.json');
  }
}
