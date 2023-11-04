let x = Number(prompt("Introduzca un número"));
let y = Number(prompt("Introduzca otro número"));

//Declaracion de las funciones
function suma (a,b){
    return a+b;
}

let resta = (a,b) =>{
    return a-b;
}

let multiplicacion = (a,b) => a/b;

function division (a,b){
    return a/b;
}

if(confirm("Quiere realizar las operaciones?")==true){    
    setTimeout(function(){
        console.log(`La suma de ${x} y ${y} es ${x+y}`);
    },2000);
    setTimeout(function(){
        console.log(`La resta entre ${x} y ${y} es ${x-y}`);
    },4000);
    setTimeout(function(){
        console.log(`La multiplicación de ${x} y ${y} es ${x*y}`);
    },6000);
    setTimeout(function(){
        console.log(`La división de ${x} entre ${y} es ${x/y}`);
    },8000);
}

