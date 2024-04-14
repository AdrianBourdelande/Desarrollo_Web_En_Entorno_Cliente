import { Component } from '@angular/core';
import { CatalogService } from '../../service/catalog.service';
import { Cartosell } from '../../model/cartosell';
import { FavouritesService } from '../../service/favourites.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})


export class CatalogComponent {
  
  cartosell: Cartosell [] = [];
  cartosellFiltered: Cartosell [] = [];
  favourites: Cartosell[] = [];
  //Dado que la API no me proporciona los precios de los autos, los he colocado manualmente para tener más datos que mostrar 
  prices = [
    59556,
    11507,
    39543,
    74365,
    80788,
    25585,
    48391,
    86931,
    82292,
    67551,
    21874,
    14325,
    87206,
    60109,
    68427,
    58150,
    38141,
    35918,
    41182,
    43710,
    77713,
    13695,
    63789,
    70073,
    34894,
    52401,
    48713,
    35045,
    39412,
    30139,
    85771,
    26970,
    28550,
    39285,
    67165,
    86810,
    66206,
    35084,
    84646,
    45419,
    10971,
    78588,
    30584,
    66145,
    69431,
    59280,
    49989,
    14904,
    76876,
    64586,
    38113,
    84433,
    87442,
    39238,
    51900,
    77642,
    80657,
    73005,
    65958,
    41090,
    86725,
    75379,
    70373,
    59493,
    87090,
    20744,
    78464,
    73133,
    55923,
    71225,
    87966,
    78096,
    70131,
    32875,
    43632,
    73516,
    76124,
    51402,
    24400,
    13593,
    71968,
    50270,
    26880,
    57738,
    16690,
    90000,
    76688,
    71991,
    72951,
    49032,
    45731,
    22159,
    78325,
    20797,
    70991,
    74778,
    41081,
    29018,
    27830,
    60662,
    39681,
    20758,
    19256,
    84189,
    31293,
    18500,
    36067,
    41864,
    25686,
    74608,
    12110,
    32297,
    14179,
    35553,
    25972,
    46699,
    10031,
    18285,
    58976,
    56035,
    89473,
    27686,
    47833,
    73719,
    74294,
    70535,
    46132,
    78094,
    63613,
    68415,
    68397,
    81991,
    62595,
    67343,
    80250,
    32622,
    86266,
    86648,
    31896,
    77863,
    74736,
    64951,
    40155,
    63685,
    61009,
    31716,
    61053,
    78854,
    24976,
    12159,
    15559,
    27745,
    45197,
    64802,
    32161,
    60908,
    71336,
    20975,
    64208,
    85806,
    47164,
    59537,
    56316,
    76607,
    11506,
    23890,
    60740,
    65783,
    89368,
    45014,
    57606,
    57166,
    71668,
    63893,
    39102,
    80002,
    48201,
    17163,
    63804,
    42320,
    27307,
    47516,
    62017,
    15854,
    44967,
    27411,
    29222,
    35617,
    60628,
    20461,
    28385,
    51013,
    18011,
    46332,
    39101,
    88807,
    85072,
    33629,
    26429,
    16229,
    28819,
    89667,
    31610,
    24968,
    79339,
    20284,
    82159,
    20039,
    85542,
    46964,
    87334,
    87460,
    86034,
    37939,
    37821,
    83586,
    31795,
    11168,
    80611,
    79342,
    62880,
    28602,
    76492,
    63063,
    84367,
    30502,
    32342,
    14443,
    13814,
    50550,
    23644,
    61700,
    89143,
    12868,
    64176,
    50203,
    80079,
    48588,
    68270,
    12425,
    48160,
    43488,
    76187,
    18022,
    58506,
    76530,
    74117,
    34235,
    22862,
    74455,
    82302,
    27747,
    61555,
    54315,
    18669,
    76505,
    27676,
    27256,
    18246,
    80963,
    78243,
    82694,
    20503,
    86730,
    83273,
    28054,
    60907,
    79154,
    17961,
    31134,
    78929,
    87484,
    29074,
    75391,
    32368,
    37929,
    55930,
    84793,
    88796,
    23611,
    48621,
    29803,
    72286,
    73302,
    16674,
    17750,
    58645,
    11543,
    62015,
    27286,
    70192,
    18000,
    64070,
    71729,
    42337,
    43683,
    74998,
    16604,
    44281,
    55679,
    82762,
    62272,
    61505,
    34150,
    76786,
    16130,
    11864,
    86981,
    52465,
    16608,
    33188,
    64727,
    10257,
    60630,
    87968,
    19487,
    80455,
    71626,
    55151,
    15813,
    85976,
    38274,
    36557,
    58009,
    52874,
    35169,
    64389,
    70403,
    34443,
    68001,
    33172,
    47129,
    47282,
    48999,
    56233,
    56419,
    85708,
    43155,
    66171,
    45746,
    53109,
    15017,
    23501,
    70798,
    22396,
    17828,
    43374,
    44216,
    23620,
    38447,
    34217,
    25636,
    10837,
    84299,
    89504,
    36718,
    22054,
    17320,
    76446,
    88374,
    24654,
    81504,
    21457,
    29974,
    44008,
    35990,
    76907,
    37702,
    23754,
    14760,
    15506,
    51491,
    89459,
    59720,
    14654,
    78180,
    32133,
    65084,
    81524,
    21258,
    27461,
    20297,
    43240,
    70426,
    66774,
    50979,
    26636,
    34341,
    79306,
    18941,
    61306,
    30458,
    51890,
    14432,
    66406,
    53523,
    34921,
    69677,
    70890,
    58229,
    75439,
    29260,
    13254,
    56204,
    34436,
    48011,
    44445,
    56655,
    28866,
    16188,
    58023,
    20168,
    87038,
    27893,
    56728,
    52734,
    30899,
    12277,
    43799,
    69619,
    51715,
    76689,
    37397,
    22329,
    77608,
    14663,
    70006,
    49420,
    37501,
    54950,
    79647,
    85140,
    41974,
    38358,
    87030,
    58717,
    38924,
    89929,
    79582,
    50280,
    14435,
    70039,
    85322,
    61368,
    41014,
    50409,
    11184,
    13894,
    60000,
    46811,
    11887,
    78252,
    55779,
    39786,
    32323,
    59561,
    88962,
    58466,
    67846,
    29730,
    18594,
    49947,
    78399,
    41307,
    63353,
    53946,
    11996,
    72822,
    59884,
    25760,
    84954,
    42961,
    10241,
    28889,
    52206,
    56590,
    65143,
    14398,
    85157,
    55327,
    40739,
    11493,
    60144,
    66406,
    55441,
    20465,
    66234,
    40546,
    72625,
    63310,
    18943,
    79350,
    26790,
    66178,
    67051,
    37118,
    47614,
    41331,
    62172,
    79861,
    55907,
    41958,
    69753,
    82176,
    20209,
    15716,
    32243,
    77440,
    79803,
    77850,
    72077,
    31807,
    76155,
    45017,
    38085,
    60998,
    27548,
    60182,
    31866,
    89509,
    86891,
    82283,
    84457,
    78320,
    51482,
    38312,
    84918,
    25612,
    51960,
    42778,
    57910,
    58072,
    68281,
    66830,
    73024,
    34360
  ];
  manufacturers: string [] = [];
  model: string [] = [];
  manufacturerSelected: string = '';
  
  constructor(private servicio: CatalogService, private favouritesService: FavouritesService ) {
    this.servicio.getAllCars().subscribe((item) => {
      item.forEach((element: Cartosell, index: number) => {
        element.price = this.prices[index];
        element.favourite = false;        
      }); 
      this.cartosell = item;
      this.getManufacturer();
      this.cartosellFiltered = this.cartosell;
    });
    
  }

  getManufacturer() {
    this.cartosell.forEach((element) => {
      const manufacturer = element.title.split(' ')[0];
      this.manufacturers.push(manufacturer);
    });
    this.manufacturers = [...new Set(this.manufacturers)];
  }
  
  manufacturersFilter(){  
    console.log(this.manufacturerSelected);  
    
    if(this.manufacturerSelected == 'All'){
      this.cartosellFiltered = this.cartosell;
    }else{
      this.cartosellFiltered = this.cartosell.filter((element) => {
        return element.title.split(' ')[0] == this.manufacturerSelected;
      }); 
    }
  }
  addToFavourites(car: Cartosell){
    car.favourite = true;
    this.favourites.push(car);
    this.favouritesService.changeFavourites([...this.favourites]);
    console.log(this.favourites);

  }
}