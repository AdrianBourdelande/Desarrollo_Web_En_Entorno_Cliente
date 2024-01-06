import { cargarClaves, cargarActuales } from "./funciones.js";

const formSS = document.getElementById('formSS');
const formSSObjeto = document.getElementById('formSSObjeto');
const seleccionarClaveSS = document.getElementById('seleccionarClaveSS');
const SSBorrar = document.getElementById('SSBorrar')
const actualesSS = document.getElementById('actualesSS');
const colorSS = document.getElementById('colorSS');
const sessionStorageContainer = document.getElementById('sessionStorageContainer');

formSS.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    const clave = e.target[0].value;
    const valor = e.target[1].value;
    sessionStorage.setItem(clave,valor);
    cargarClaves(seleccionarClaveSS);
    cargarActuales(actualesSS);

});

formSSObjeto.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e);
    const nombre = e.target[0].value;
    const apellido= e.target[1].value;
    const telefono = e.target[2].value;
    const disponibilidad = e.target[3].checked;
    const objeto = {
        'nombre': nombre,
        'apellido': apellido,
        'telefono': telefono,
        'disponibilidad': disponibilidad
    }
    sessionStorage.setItem(`Usuario${localStorage.getItem('iS')}`,JSON.stringify(objeto));
    localStorage.setItem('iS', Number(localStorage.getItem('iS'))+1);
    cargarClaves(seleccionarClaveSS);
    cargarActuales(actualesSS);
});

SSBorrar.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(e);
    console.log(sessionStorage.length);
    sessionStorage.removeItem(e.target[0].value);
    console.log(sessionStorage.length);
    cargarClaves(seleccionarClaveSS);
    cargarActuales(actualesSS);
});


colorSS.addEventListener('change', (e)=>{
    sessionStorageContainer.style.backgroundColor = `${e.target.value}`;
})

export {seleccionarClaveSS, actualesSS};