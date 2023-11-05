// let name = prompt("Introduzca su nombre");
//clubs (♣), diamonds (♦), hearts (♥) and spades (♠)
let baraja = [
                ["A_c","2_c","3_c","4_c","5_c","6_c","7_c","8_c","9_c","10_c","J_c","Q_c","K_c"],
                ["A_d","2_d","3_d","4_d","5_d","6_d","7_d","8_d","9_d","10_d","J_d","Q_d","K_d"],
                ["A_h","2_h","3_h","4_h","5_h","6_h","7_h","8_h","9_h","10_h","J_h","Q_h","K_h"],
                ["A_s","2_s","3_s","4_s","5_s","6_s","7_s","8_s","9_s","10_s","J_s","Q_s","K_s"]
];
let mano_J = [];
let mano_D = [];

function numeroAleatorio(min, max) {
    // The maximum is inclusive and the minimum is inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function pedirCarta (mano){
    //A esta funcion le pasamos una mano que será la que pida carta
    let num1=numeroAleatorio(0,3);
    let num2=numeroAleatorio(0,12)
    let carta_aleatoria = baraja[num1][num2];
    //Cada vez que se entrega una carta se resta esa carta de la baraja
    //para hacer esto se quita esa carta de la baraja y por lo tanto el array pierde una posicion
    //Si luego se va a sacar otra carta de ese array y resulta que se va a la posicion 12 esta no existe ya que
    //al haberse restado una carta solo hay de la posicion 0 hasta la 11. 
    //Para evitar esto se fiiltra con un while esa situacion y de darse se saca otra carta hasta que salga una
    //que si exista en la baraja.
    while(typeof carta_aleatoria==="undefined"){
        num1=numeroAleatorio(0,3);
        num2=numeroAleatorio(0,12)
        carta_aleatoria = baraja[num1][num2];
    }
    console.log(`carta aleatoria:${carta_aleatoria}`);
    mano=mano.splice(mano.length, 0, carta_aleatoria);
    baraja[num1].splice(num2,1);
}

function valorarCarta (carta){
    let valor = carta.split("_",1);
    if(valor=="J"||valor=="Q"||valor=="K"){
        valor=11;
    }else if(valor=="A"){
        valor=1;
    }else{
        valor=Number(valor);
    }
    return valor;
}

//Inicio del juego // El Dealer se saca sus cartas hasta llegar a sumar 17 o más
mano_D=[    baraja[numeroAleatorio(0,3)][numeroAleatorio(0,12)],
            baraja[numeroAleatorio(0,3)][numeroAleatorio(0,12)]];
console.log(`mano inicial del Dealer ${mano_D}`);
let contador_D = 0;
let contador_J = 0;
let i = 0;
while(contador_D<17){
    contador_D= contador_D+ valorarCarta(mano_D[i]);
    i = i+1;    
    if(i>1&&contador_D<17){        
        pedirCarta(mano_D);
    }    
}
console.log(`El Dealer ha sacado un total de : ${contador_D} puntos`);
console.log(`Esta es la mano del DEALER ${mano_D}`);

//Turno del jugador
mano_J=[    baraja[numeroAleatorio(0,3)][numeroAleatorio(0,12)],
            baraja[numeroAleatorio(0,3)][numeroAleatorio(0,12)]];
console.log(`mano inicial del JUGADOR ${mano_J}`);
contador_J= contador_J+ valorarCarta(mano_J[0])+ valorarCarta(mano_J[1]);
console.log(`mano actual del JUGADOR vale ${contador_J}`);
i=2;
while(confirm("Pedir carta?")){
    pedirCarta(mano_J);
    contador_J = contador_J + valorarCarta(mano_J[i]);
    i++;
    console.log(contador_J);
}
