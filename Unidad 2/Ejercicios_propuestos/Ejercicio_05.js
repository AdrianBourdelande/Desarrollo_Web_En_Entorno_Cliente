const formulario = document.querySelector("form");
const suma =document.getElementById('suma');
const resta =document.getElementById('resta');
const multiplicacion =document.getElementById('multiplicacion');
const division =document.getElementById('division');
const igual =document.getElementById('igual');
const borrar =document.getElementById('borrar');
const parrafo = document.createElement("p");
const resultados = document.getElementById("resultados");
const display = document.getElementById("display");
let operando1 = 0;
let operando2 = 0;
let operacion = "";

suma.addEventListener('click', (e) =>{
    operando1 = Number(display.value);
    operacion = '+';
    // parrafo.innerHTML += `Has presionado el boton suma <br>`;
    display.value = "";
});
resta.addEventListener('click', (e) =>{
    operando1 = Number(display.value);
    operacion = '-';
    // parrafo.innerHTML += `Has presionado el boton suma <br>`;
    display.value = "";
});
multiplicacion.addEventListener('click', (e) =>{
    operando1 = Number(display.value);
    operacion = '*';
    // parrafo.innerHTML += `Has presionado el boton suma <br>`;
    display.value = "";
});
division.addEventListener('click', (e) =>{
    operando1 = Number(display.value);
    operacion = '/';
    // parrafo.innerHTML += `Has presionado el boton suma <br>`;
    display.value = "";
});

borrar.addEventListener('click', (e) =>{
    display.value = 0;
    operacion = "";
});

igual.addEventListener('click', (e) => {
    operando2 = display.value;
    operando2 = Number(display.value);
    if(operacion==='+'){
        parrafo.innerHTML += `${operando1}${operacion}${operando2}=${operando1+operando2}<br>`;
    }
    if(operacion==='-'){
        parrafo.innerHTML += `${operando1}${operacion}${operando2}=${operando1-operando2}<br>`;
    }
    if(operacion==='*'){
        parrafo.innerHTML += `${operando1}${operacion}${operando2}=${operando1*operando2}<br>`;
    }
    if(operacion==='/'){
        parrafo.innerHTML += `${operando1}${operacion}${operando2}=${operando1/operando2}<br>`;
    }
    resultados.appendChild(parrafo);
    display.value = "";
});