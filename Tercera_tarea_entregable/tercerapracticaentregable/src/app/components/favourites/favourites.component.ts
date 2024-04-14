import { Component } from '@angular/core';
import { Cartosell } from '../../model/cartosell';
import { ManufacturerService } from '../../service/manufacturers.service';
import { ActivatedRoute } from '@angular/router';

import { Inject } from '@angular/core';
import { FavouritesService } from '../../service/favourites.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent {

  favourites: Cartosell[] = [];

  constructor(@Inject(FavouritesService) private favouritesService: FavouritesService) {
    this.favouritesService.currentFavourites.subscribe(item => this.favourites.push(...item));
    console.log(this.favourites);
  } 

  removeFromFavourites(car: Cartosell){
    car.favourite = false;
    const index = this.favourites.indexOf(car);
    this.favourites = this.favourites.filter((element, i) => i !== index)
    
    console.log(this.favourites);
  }


}

