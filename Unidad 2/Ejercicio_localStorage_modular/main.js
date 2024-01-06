
import { seleccionarClaveLS, actualesLS} from './localStorage.js';
import { seleccionarClaveSS, actualesSS } from './sessionStorage.js';
import { cargarClaves, cargarCookies, cargarActuales, cargarActualesCookies } from './funciones.js';
import { actualesContainer } from './actuales.js'; // se necesita para poder cambiar el color de fondo de Actuales

cargarClaves(seleccionarClaveLS);
cargarActuales(actualesLS);
cargarClaves(seleccionarClaveSS);
cargarActuales(actualesSS);
cargarCookies();
cargarActualesCookies();

if(!localStorage.getItem('iL')){
    localStorage.setItem('iL', 0);
}
if(!localStorage.getItem('iS')){
    localStorage.setItem('iS', 0);
}
//input type='color';
