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

alert(`
    La suma de ${x} y ${y} es ${x+y}
    La resta entre ${x} y ${y} es ${x-y}
    La multiplicación de ${x} y ${y} es ${x*y}
    La división de ${x} entre ${y} es ${x/y}
`);