import {cargarCookies} from "./funciones.js";

const formCookies = document.getElementById('formCookies');
const cookiesBorrar = document.getElementById('cookiesBorrar');
const seleccionarCookie = document.getElementById('seleccionarCookie');
const UnoEnero1970 = 'Thu, 01 Jan 1970 00:00:00 UTC';
const actualesCookies = document.getElementById('actualesCookies');
const colorCookies = document.getElementById('colorCookies');
const cookiesContainer = document.getElementById('cookiesContainer');

formCookies.addEventListener('submit', (e) => {
    e.preventDefault();
    const clave = e.target[0].value;
    const valor = e.target[1].value;
    const expiracion = new Date();
    const expiracionMilisegundos = expiracion.getTime() + e.target[2].value*1000;
    const expiracionFormato = expiracion.setTime(expiracionMilisegundos);
    const expiracionFormatoRFC7231 = expiracion.toUTCString(expiracionFormato);
    document.cookie = `${clave}=${valor}; expires = ${expiracionFormatoRFC7231}`;
    cargarCookies();
});

cookiesBorrar.addEventListener('submit', (e) => {
    e.preventDefault();   
    const arrayCookies = document.cookie.split(';');
    const objetoValor = arrayCookies.filter((element) => {
        return element.includes(e.target[0].value);
    });
    const arrayValor = JSON.stringify(objetoValor);
    console.log(arrayValor);
    console.log(typeof(arrayValor));
    const valor = arrayValor.split('=');
    document.cookie = `${e.target[0].value}=${valor}; expires=${UnoEnero1970}`;
    // Para borrar una cookie vamos a setear su fecha de expiracion a una fecha pasada
    // en concreto al 1 de eneero de 1970 (esto lo hago así porque quiero, podría ser cualquier
    //otra fecha pasada o incluso simplemente new Date() pero habría que darle formato.)    
    cargarCookies();

});

colorCookies.addEventListener('change', (e)=>{
    cookiesContainer.style.backgroundColor = `${e.target.value}`;
})

export {actualesCookies, seleccionarCookie};