import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cartosell } from '../model/cartosell';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private favouritesSource = new BehaviorSubject<Cartosell[]>([]); // Specify the type as an array of Cartosell objects
  currentFavourites =  this.favouritesSource.asObservable();

  constructor() { }

  changeFavourites(favourites: Cartosell[]) {
    this.favouritesSource.next(favourites);
  }
}