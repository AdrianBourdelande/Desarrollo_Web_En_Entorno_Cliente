//Que es mejor? Hacer una funcion anonima y guardarla en una variable o hacer una function tradicional 
//y llamarla por su nombre?

let sumar = function (a,b){
    return a+b;
}

function _sumar (a,b){
    return a+b;
}

console.log(sumar(8,9));
console.log(_sumar(8,9));



