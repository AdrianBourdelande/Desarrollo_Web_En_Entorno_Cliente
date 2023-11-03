let x = Number(prompt("Introduce un número"));
let y = Number(prompt("Introduce otro número"));
let suma =x+y;
let resta = x-y;
let multiplicacion = x*y;
let division = x/y;
let aceptar=true;

if(x<0||y<0||isNaN(x)||isNaN(y)){
    alert("Se ha producido un error, tipo de dato no válido o número menor que cero");
}else{
    alert(
        `
        La suma del primer número y el segundo es: ${suma}
        La resta del primer número menos el segundo es: ${resta}
        La multiplicación del primer número y del segundo número es: ${multiplicacion}
        La división del primer número entre el segundo es: ${division}`
    );

    while(!(suma<0||resta<0||multiplicacion<0||division<0)&&aceptar==true){
        
        if(confirm("Quiere calcular otra vez las distintas operaciones entre dos números?")==true){
            x = Number(prompt("Introduce un número"));
            y = Number(prompt("Introduce otro número"));
            suma =x+y;
            resta = x-y;
            multiplicacion = x*y;
            division = x/y;
            alert(
                `
                La suma del primer número y el segundo es: ${suma}
                La resta del primer número menos el segundo es: ${resta}
                La multiplicación del primer número y del segundo número es: ${multiplicacion}
                La división del primer número entre el segundo es: ${division}`
            );
        }else{
            aceptar=false;
        }
    }
   
}


