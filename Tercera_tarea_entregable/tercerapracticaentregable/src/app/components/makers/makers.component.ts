import { Component } from '@angular/core';
import { Manufacturer } from '../../model/manufacturer';
import { ManufacturerService } from '../../service/manufacturers.service';

@Component({
  selector: 'app-makers',
  templateUrl: './makers.component.html',
  styleUrl: './makers.component.css'
})
export class MakersComponent {
  fabricantesDeInteres: string[] = [
    'FERRARI', 'LAMBORGHINI', 'BMW', 'MERCEDES', 'ROLLSROYCE', 'PAGANI', 'KOENIGSEGG', 
    'BUGATTI', 'ASTON MARTIN', 'MASERATI', 'BENTLEY', 'PORSCHE', 'AUDI', 'JAGUAR', 
    'LAND ROVER', 'LEXUS', 'ALFA ROMEO', 'LOTUS', 'MCLAREN', 'FORD', 'CHEVROLET', 
    'DODGE', 'JEEP',  'CADILLAC', 'CHRYSLER', 'LINCOLN', 'NISSAN', 
    'INFINITI', 'TOYOTA', 'HONDA', 'MAZDA', 'SUBARU' 
    
  ];
  //Como que la API venía con los constructores sin imagenes he tenidoq ue meter algunas a manom, no me metido más que 3 porque 
  //rellenarlo llevaria  mucho tiempo y no aporta nada.
  manufacturersImages = {
    "FERRARI": "https://todosobrelogos.com/wp-content/uploads/2022/10/Ferrari-Logo-1994.png",
    "LAMBORGHINI": "https://i.pinimg.com/originals/1d/f5/40/1df540ec0ecb66d6f1a1adb57d6193e8.jpg",
    "BMW": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png",
    "MERCEDES": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Mercedes.svg/1015px-BMW.svg.png",
    "ROLLSROYCE": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Rolls-Royce_logo.svg/1024px-Rolls-Royce_logo.svg.png",
    "PAGANI": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pagani_Logo.svg/1024px-Pagani_Logo.svg.png",
    "KOENIGSEGG": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Koenigsegg_logo.svg/1024px-Koenigsegg_logo.svg.png",
    "BUGATTI": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bugatti_logo.svg/1024px-Bugatti_logo.svg.png",
    "ASTON MARTIN": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Aston_Martin_logo.svg/1024px-Aston_Martin_logo.svg.png",
    "MASERATI": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Maserati_Logo.svg/1024px-Maserati_Logo.svg.png",
    "BENTLEY": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Bentley_logo.svg/1024px-Bentley_logo.svg.png",
    "PORSCHE": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Porsche_logo.svg/1024px-Porsche_logo.svg.png",
    "AUDI": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Audi_logo_detail.svg/1024px-Audi_logo_detail.svg.png",
    "JAGUAR": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Jaguar_Cars_logo.svg/1024px-Jaguar_Cars_logo.svg.png",
    "LAND ROVER": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Land_Rover_logo.svg/1024px-Land_Rover_logo.svg.png",
    "LEXUS": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Lexus_logo.svg/1024px-Lexus_logo.svg.png",
    "ALFA ROMEO": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Alfa_Romeo_logo.svg/1024px-Alfa_Romeo_logo.svg.png",
    "LOTUS": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Lotus_Logo.svg/1024px-Lotus_Logo.svg.png",
    "MCLAREN": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/McLaren_logo.svg/1024px-McLaren_logo.svg.png",
    "FORD": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ford_logo_flat.svg/1024px-Ford_logo_flat.svg.png",
    "CHEVROLET": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Chevrolet_logo.svg/1024px-Chevrolet_logo.svg.png",
    "DODGE": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dodge_logo.svg/1024px-Dodge_logo.svg.png",
    "JEEP": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Jeep_logo.svg/1024px-Jeep_logo.svg.png",
    "CADILLAC": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Cadillac_logo.svg/1024px-Cadillac_logo.svg.png",
    "CHRYSLER": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Chrysler_logo.svg/1024px-Chrysler_logo.svg.png",
    "LINCOLN": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Lincoln_logo.svg/1024px-Lincoln_logo.svg.png",
    "NISSAN": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Nissan_logo.svg/1024px-Nissan_logo.svg.png",
    "INFINITI": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Infiniti_logo.svg/1024px-Infiniti_logo.svg.png",
    "TOYOTA": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Toyota_logo.svg/1024px-Toyota_logo.svg.png",
    "HONDA": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Honda_logo.svg/1024px-Honda_logo.svg.png",
    "MAZDA": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mazda_logo.svg/1024px-Mazda_logo.svg.png",
    "SUBARU": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Subaru_logo.svg/1024px-Subaru_logo.svg.png"    
  };
  manufacturers: Manufacturer [] = [];
  
    constructor(private servicio: ManufacturerService ) {
      
      this.servicio.getAllManufacturers().subscribe((item) => {
        item.Results.forEach((element: Manufacturer) => {
          this.fabricantesDeInteres.forEach((fabricante)=>{
            if(element.Make_Name == fabricante){
              element.image = this.manufacturersImages[element.Make_Name as keyof typeof this.manufacturersImages];
              this.manufacturers.push(element);
            }
          })
        });
      });    
      console.log(this.manufacturers);
         
  }}
