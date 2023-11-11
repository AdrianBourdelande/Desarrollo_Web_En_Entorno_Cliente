let name = prompt("Introduzca su nombre");
//let name = "Adrian";
//clubs (♣), diamonds (♦), hearts (♥) and spades (♠)
let baraja = [
                ["A_c","2_c","3_c","4_c","5_c","6_c","7_c","8_c","9_c","10_c","J_c","Q_c","K_c"],
                ["A_d","2_d","3_d","4_d","5_d","6_d","7_d","8_d","9_d","10_d","J_d","Q_d","K_d"],
                ["A_h","2_h","3_h","4_h","5_h","6_h","7_h","8_h","9_h","10_h","J_h","Q_h","K_h"],
                ["A_s","2_s","3_s","4_s","5_s","6_s","7_s","8_s","9_s","10_s","J_s","Q_s","K_s"]
];
let mano_J = [];
let mano_D = [];
let contador_D = 0;
let contador_J = 0;
let i = 0;
let l = 0;
let tiempo = 0;
let nuevaImagen=[];
let nuevaImagenJugador=[];
let puntuacion_D=[];
puntuacion_D[0]=0;
let puntuacion_J=[];
puntuacion_J[0]=0;
let empate = false;
const pedirButton = document.getElementById("pedirButton");
const plantarseButton = document.getElementById("plantarseButton");
const jugadorNombre = document.getElementById("jugadornombre");
const dealer = document.getElementById("dealer");
const puntuacionDealer = document.getElementById("puntuacionDealer");
const puntuacionJugador = document.getElementById("puntuacionJugador");
puntuacionJugador.textContent =`Puntuacion ${name}: ${puntuacion_J[l]}`;
const jugador = document.getElementById("jugador");
const tablero = document.getElementById("tablero");

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
    //Para evitar esto se filtra con un while esa situacion y de darse se saca otra carta hasta que salga una
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

function pintarTablero (){
    console.log("Inicio funcion tablero: la mano del Dealer es: "+mano_D);
    for(let j=0; j<mano_D.length; j++){             
        setTimeout(() => {
            dealer.appendChild(nuevaImagen[j]); 
            dealer.children[j].setAttribute("src", `./img/${mano_D[j]}.png`); 
            puntuacionDealer.textContent = `Puntuacion Dealer: ${puntuacion_D[j]}`;
            setTimeout(() => {
                if(contador_D>21&&(j==mano_D.length-1)){
                    let resultado = document.createElement("div");
                    tablero.appendChild(resultado);
                    resultado.textContent = `${name} ha ganado`;
                    resultado.className = "resultado";
                }                 
            }, 1000);                    
        }, tiempo= tiempo+500);
    }    
}


//Inicio del juego // El Dealer se saca sus cartas hasta llegar a sumar 17 o más
mano_D[i]=baraja[numeroAleatorio(0,3)][numeroAleatorio(0,12)];//Primera carta
console.log("PRUEBA de mano_D: " + mano_D);
contador_D= contador_D + valorarCarta(mano_D[i]);
puntuacion_D[0] = contador_D; 
while(contador_D<17){  
     
    pedirCarta(mano_D);
    i = i+1; 
    contador_D= contador_D + valorarCarta(mano_D[i]); 
    puntuacion_D[i] = contador_D;           
}
for(let k=0;k<mano_D.length;k++){
    console.log(mano_D[k]);
    nuevaImagen[k] = document.createElement("img");
    nuevaImagen[k].setAttribute("src", `./img/${mano_D[k]}.png`);
    nuevaImagen[k].className = "carta";
}

console.log(`Esta es la mano del DEALER ${mano_D}`);
console.log(`El Dealer ha sacado un total de : ${contador_D} puntos`);

pintarTablero();
// jugadorNombre.textContent = `Puntuación ${name}: `;

pedirButton.addEventListener("click", function () {
    if(dealer.children.length==mano_D.length){
        pedirCarta(mano_J);
        console.log(mano_J);
        nuevaImagenJugador[l] = document.createElement("img");
        nuevaImagenJugador[l].setAttribute("src", `./img/${mano_J[l]}.png`);
        nuevaImagenJugador[l].className = "carta";
        jugador.appendChild(nuevaImagenJugador[l]);    
        contador_J=contador_J+ valorarCarta(mano_J[l]);
        puntuacion_J[l]=contador_J;
        puntuacionJugador.textContent =`Puntuacion ${name}: ${puntuacion_J[l]}`;    
        l=l+1;
        if((contador_J>contador_D)&&contador_J<22){
            let resultado = document.createElement("div");
            tablero.appendChild(resultado);
            resultado.textContent = `${name} ha ganado`;
            resultado.className = "resultado";
        }
        if(contador_J>21){
            let resultado = document.createElement("div");
            tablero.appendChild(resultado);
            resultado.textContent = `${name} ha perdido`;
            resultado.className = "resultado";
        }
        if((contador_J==contador_D)&&contador_J<22){            
            empate = true;

        }        
    }      
});
plantarseButton.addEventListener("click", function(){
    if(empate==true){
        let resultado = document.createElement("div");
        tablero.appendChild(resultado);
        resultado.textContent = `Empate!`;
        resultado.className = "resultado";
    }
});




