import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private http: HttpClient) { 

  }
  getAllManufacturers(): Observable<any> {
    return this.http.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json');
  }
  getModelsByManufacturer(make_ID: Number): Observable<any> {
    return this.http.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${make_ID}?format=json`);
  }
}


