const regExpLetras = /^[a-zA-Z\s]*$/;
const regExpDni = /^\d{8}[a-zA-Z]$/;
const formulario = document.querySelector("form");
const errores = [];
const datos = document.getElementById("datos");
const errorNombre = document.querySelector("#errorNombre");
const errorApellido = document.querySelector("#errorApellido");
const errorTelefono = document.querySelector("#errorTelefono");
const errorDNI = document.querySelector("#errorDNI");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log(e);
    for(i=0;i<e.target.length;i++){
        e.target[i].style.border = "";
    }
    errorNombre.classList.add("d-none");
    errorApellido.classList.add("d-none");
    errorTelefono.classList.add("d-none");
    errorDNI.classList.add("d-none");
    //Filtro Para el Nombre
    if(!regExpLetras.test(e.target[0].value)||e.target[0].value===""){
        errorNombre.classList.remove("d-none");
        errorNombre.style.color = "red";
        errores.push("El nombre no es valido");
        e.target[0].style.border = "2px solid red";    
    }
    if(!regExpLetras.test(e.target[1].value)||e.target[1].value===""){
        errorApellido.classList.remove("d-none");
        errorApellido.style.color = "red";
        errores.push("El apellido no es valido");
        e.target[1].style.border = "2px solid red";   
    }
    //Filtro para el Telefono
    if(e.target[2].value.length>9||e.target[2].value===""){
        errorTelefono.classList.remove("d-none");
        errorTelefono.style.color = "red";
        errores.push("El telefono no es valido");
        e.target[2].style.border = "2px solid red";   
    }
    //Filtro para el DNI
    if(!regExpDni.test(e.target[3].value)||e.target[3].value===""){
        errorDNI.classList.remove("d-none");
        errorDNI.style.color = "red";
        errores.push("El DNI no es valido");
        e.target[3].style.border = "2px solid red";   
    }
    console.log(errores);
    datos.innerHTML = "";
    datos.style.margin= "auto";
    datos.style.border = "10px black solid";
    datos.style.backgroundColor = "#00ECFF";
    for(i=0;i<4;i++){
        
        datos.innerHTML += `<h2>${e.target[i].name}: ${e.target[i].value}</h2>`;
        errores.shift();
    }
    
        
    


    
});

