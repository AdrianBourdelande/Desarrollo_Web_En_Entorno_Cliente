const formulario = document.querySelector("form");
const convertir = document.getElementById('convertir');
const conversiones = document.getElementById('conversiones');
const numero = document.getElementById('numero');
const parrafo = document.createElement("p");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(formulario[1].value);
    //De $ a €
    if(formulario[1].value==='option0'){
        parrafo.innerHTML += `${formulario[0].value}$ equivale a 
        ${Number((formulario[0].value*0.92).toFixed(2))}€<br>`
        conversiones.appendChild(parrafo);
    }
    //De € a $
    if(formulario[1].value==='option1'){
        parrafo.innerHTML += `${formulario[0].value}€ equivale a 
        ${Number((formulario[0].value/0.92).toFixed(2))}$<br>`
        conversiones.appendChild(parrafo);
    }
    //De mm a m
    if(formulario[1].value==='option2'){
        parrafo.innerHTML += `${formulario[0].value}mm equivale a 
        ${Number((formulario[0].value/1000).toFixed(3))}m<br>`
        conversiones.appendChild(parrafo);
    }
    //De m a mm
    if(formulario[1].value==='option3'){
        parrafo.innerHTML += `${formulario[0].value}m equivale a 
        ${Number((formulario[0].value*1000).toFixed(0))}mm<br>`
        conversiones.appendChild(parrafo);
    }
    //De F a C
    if(formulario[1].value==='option4'){
        parrafo.innerHTML += `${formulario[0].value}F equivale a 
        ${Number(((formulario[0].value-32)*5/9).toFixed(1))}C<br>`
        conversiones.appendChild(parrafo);
    }
    //De C a F
    if(formulario[1].value==='option5'){
        parrafo.innerHTML += `${formulario[0].value}C equivale a 
        ${Number(((formulario[0].value*9/5)+32).toFixed(1))}F<br>`
        conversiones.appendChild(parrafo);
    }
});

