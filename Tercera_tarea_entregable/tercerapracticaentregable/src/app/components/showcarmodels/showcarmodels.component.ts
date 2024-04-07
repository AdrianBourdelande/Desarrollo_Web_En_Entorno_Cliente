import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManufacturerService } from '../../service/manufacturers.service';
import { CarModel } from '../../model/carmodel';


@Component({
  selector: 'app-showcarmodels',
  templateUrl: './showcarmodels.component.html',
  styleUrls: ['./showcarmodels.component.css']
})
export class ShowcarmodelsComponent {
  models: CarModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private servicio: ManufacturerService
  ) {
    const manufacturerId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.servicio.getModelsByManufacturer(manufacturerId).subscribe((item) => {
      item.Results.forEach((element: CarModel) => {
        this.models.push(element);
      });
      console.log(this.models);
    });
  }
}