//let name = prompt("Introduzca su nombre");
let name = "Adrian";
// GENERAMOS LA BARAJA
let baraja = [];
let palos = ["H","C","S","D"];
for(i=0;i<palos.length;i++){
    for(j=1;j<14;j++){  
        if(j==1){
            baraja.push(new Card(`A${palos[i]}`));
        }
        if(j>1&&j<11){
            baraja.push(new Card(`${j}${palos[i]}`));
        }
        if(j==11){
            baraja.push(new Card(`J${palos[i]}`));
        }
        if(j==12){
            baraja.push(new Card(`Q${palos[i]}`));
        }
        if(j==13){
            baraja.push(new Card(`K${palos[i]}`));
        }        
    }
}
//BARAJAMOS LA BARAJA
baraja = _.shuffle(baraja);
//EL DEALER SACA CARTAS HASTA SUMAR MÁS DE 17
let manoDealer = [];
let valorManoDealer =0;

while(valorManoDealer<17){    
        manoDealer.push(baraja.shift());
        valorManoDealer = valorManoDealer + manoDealer[manoDealer.length-1].valor;       
}

//REPRESENTAMOS CARTAS EN EL TABLERO 
const dealer = document.getElementById("dealer");
const puntuacionDealer = document.getElementById("puntuacionDealer");
let tiempo = 500;
valorManoDealer = 0;
for(let i=0; i<manoDealer.length;i++){
    const carta = document.createElement("img");
    carta.className = "carta";
    carta.src = `${manoDealer[i].imagen}`;
    setTimeout(() => {        
        dealer.appendChild(carta); 
        valorManoDealer = valorManoDealer + manoDealer[i].valor;
        puntuacionDealer.innerText ="Puntuación Dealer: " + valorManoDealer;
        if(valorManoDealer>21){
            let resultado = document.createElement("div");
            document.body.prepend(resultado);
            resultado.className = "resultado green";
            resultado.textContent = "Gana el jugador";
        }
    }, tiempo);
    tiempo= tiempo + 1000;    
}

const pedirButton = document.getElementById("pedirButton");
const plantarseButton = document.getElementById("plantarseButton");
const jugador = document.getElementById("jugador");
const puntuacionJugador = document.getElementById("puntuacionJugador");
let valorManoJugador = 0;

pedirButton.addEventListener("click", function(){
    const carta = document.createElement("img");
    carta.className = "carta";
    let cartaActual = baraja.shift();
    carta.src = `${cartaActual.imagen}`;
    jugador.appendChild(carta);
    valorManoJugador = valorManoJugador + cartaActual.valor;
    puntuacionJugador.textContent = "Puntuacion Jugador: " + valorManoJugador;
    
    if(valorManoDealer<valorManoJugador&&valorManoJugador<22){
        let resultado = document.createElement("div");
        document.body.prepend(resultado);
        resultado.className = "resultado green";
        resultado.textContent = "Gana el jugador";        
    }
    if(valorManoJugador>21){
        let resultado = document.createElement("div");
        document.body.prepend(resultado);
        resultado.className = "resultado red";
        resultado.textContent = "Gana el Dealer";        
    }
    console.log(valorManoDealer);
        console.log(valorManoJugador);
});

plantarseButton.addEventListener("click", function(){    
    if(valorManoDealer==valorManoJugador){
        let resultado = document.createElement("div");
        document.body.prepend(resultado);
        resultado.className = "resultado";
        resultado.textContent = `Empate!`;
        
    }
});




