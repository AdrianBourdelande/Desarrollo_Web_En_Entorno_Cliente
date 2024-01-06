const formulario = document.querySelector("form");
const tweet = document.getElementById("tweet");
const textoTweet = document.getElementById("textoTweet");
const indicador = document.getElementById("indicador");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    const pregunta = confirm("Quiere mandar el Tweet?");
    if (pregunta){
        console.log("El Tweet ha sido mandado correctamente");
        tweet.value = "";
        textoTweet.value = tweet.value;
        indicador.innerHTML = `${tweet.value.length}/255`;
    }else{
        alert("Operación cancelada por el usuario");
    }

    
});

formulario.addEventListener("change", (eventoChange) => {
    textoTweet.value = tweet.value;
    indicador.innerHTML = `${tweet.value.length}/255`;
});

//keyup event para el input dentro del form 
