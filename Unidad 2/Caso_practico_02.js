let media = function(...numeros){
    if (numeros.length===0) return 0;
    let suma=0;
    for(let num of numeros){
        suma=suma+num;
    }
    return suma/numeros.length
}

console.log(media());
console.log(media(2,4));
console.log(media(1));
console.log(media(3,5,7,14));


let funcion1 = (a,b) => (a+b)/2;

let funcion2 = a => {
    let b = 5;
    return a+b;
}

let funcion3 = (a,b) => {
    let c=10;
    return a+b+c;
}

console.log(funcion1(5,10));
console.log(funcion2(3));
console.log(funcion3(4,6));