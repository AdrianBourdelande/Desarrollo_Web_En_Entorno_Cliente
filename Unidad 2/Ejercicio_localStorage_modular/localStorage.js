import { cargarClaves, cargarActuales } from "./funciones.js";


const formLS = document.getElementById('formLS');
const formLSObjeto = document.getElementById('formLSObjeto');
const seleccionarClaveLS = document.getElementById('seleccionarClaveLS');
const LSBorrar = document.getElementById('LSBorrar')
const actualesLS = document.getElementById('actualesLS');
const colorLS = document.getElementById('colorLS');
const localStorageContainer = document.getElementById('localStorageContainer');

formLS.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e);
    const clave = e.target[0].value;
    const valor = e.target[1].value;
    localStorage.setItem(clave,valor);
    cargarClaves(seleccionarClaveLS);
    cargarActuales(actualesLS);

});

formLSObjeto.addEventListener('submit', (e) => {
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
    localStorage.setItem(`Usuario${localStorage.getItem('iL')}`,JSON.stringify(objeto));
    localStorage.setItem('iL', Number(localStorage.getItem('iL'))+1);
    cargarClaves(seleccionarClaveLS);
    cargarActuales(actualesLS);
});

LSBorrar.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(localStorage.length);
    localStorage.removeItem(e.target[0].value);
    console.log(localStorage.length);
    cargarClaves(seleccionarClaveLS);
    cargarActuales(actualesLS);
});

colorLS.addEventListener('change', (e)=>{
    localStorageContainer.style.backgroundColor = `${e.target.value}`;
})

export {seleccionarClaveLS, actualesLS};