let frase_array;
let letras;
let frase
do{
    frase = prompt("Introduzca una frase por teclado con al menos 10 letras");
    frase_array = frase.split(" "); 
    letras = frase_array.join("AA").length;
}while(letras<10)

let palabras = frase_array.length;

alert(`  El dato introducido tiene:
    ${letras} letras
    ${palabras} palabras 
    1 frase `);



