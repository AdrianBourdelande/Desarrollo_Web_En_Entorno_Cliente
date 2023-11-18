//let name = prompt("Introduzca su nombre");
let name = "Adrian";
// GENERAMOS LA BARAJA
let baraja = [];
let palos = ["H","C","S","D"];
for(i=0;i<palos.length;i++){
    for(j=1;j<14;j++){
        if(j<11){
            baraja.push(`${j}${palos[i]}`);
        }
        if(j==11){
            baraja.push(`J${palos[i]}`);
        }
        if(j==12){
            baraja.push(`Q${palos[i]}`);
        }
        if(j==13){
            baraja.push(`K${palos[i]}`);
        }
    }
}
//BARAJAMOS LA BARAJA
baraja = _.shuffle(baraja);
//COMPROBAMOS LA BARAJA QUE ESTÉ BARAJADA
baraja.forEach(element => {
    console.log(element);
});
console.log(baraja.length);
