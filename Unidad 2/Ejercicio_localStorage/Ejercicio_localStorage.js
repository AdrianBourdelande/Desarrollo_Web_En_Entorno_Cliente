
let i = 0; // Cada vez que se recarga la web empieza a meter usuarios desde Usuario0=>
//SOLUCION ESTÁ PENDIENTE
let j = 0;

// Variables para el LocalStorage
const formLS = document.getElementById('formLS');
const formLSObjeto = document.getElementById('formLSObjeto');
const seleccionarClaveLS = document.getElementById('seleccionarClaveLS');
const LSBorrar = document.getElementById('LSBorrar')
const actualesLS = document.getElementById('actualesLS');

//Variables para el sessionStorage
const formSS = document.getElementById('formSS');
const formSSObjeto = document.getElementById('formSSObjeto');
const seleccionarClaveSS = document.getElementById('seleccionarClaveSS');
const SSBorrar = document.getElementById('SSBorrar')
const actualesSS = document.getElementById('actualesSS');

//Variables para las cookies
const formCookies = document.getElementById('formCookies');
const seleccionarCookie = document.getElementById('seleccionarCookie');
const UnoEnero1970 = 'Thu, 01 Jan 1970 00:00:00 UTC';
const actualesCookies = document.getElementById('actualesCookies');

//Eventos para el localSTORAGE
formLS.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e);
    const clave = e.target[0].value;
    const valor = e.target[1].value;
    localStorage.setItem(clave,valor);
    cargarClaves(seleccionarClaveLS);
    cargarActuales(actualesLS);

});

formLSObjeto.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e);
    const nombre = e.target[0].value;
    const apellido= e.target[1].value;
    const telefono = e.target[2].value;
    const disponibilidad = e.target[3].checked;
    const objeto = {
        'nombre': nombre,
        'apellido': apellido,
        'telefono': telefono,
        'disponibilidad': disponibilidad
    }
    localStorage.setItem(`Usuario${i}`,JSON.stringify(objeto));
    i++;
    cargarClaves(seleccionarClaveLS);
    cargarActuales(actualesLS);
});

LSBorrar.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(localStorage.length);
    localStorage.removeItem(e.target[0].value);
    console.log(localStorage.length);
    cargarClaves(seleccionarClaveLS);
    cargarActuales(actualesLS);
});

//Eventos para el sessionStorage
formSS.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    const clave = e.target[0].value;
    const valor = e.target[1].value;
    sessionStorage.setItem(clave,valor);
    cargarClaves(seleccionarClaveSS);
    cargarActuales(actualesSS);

});

formSSObjeto.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e);
    const nombre = e.target[0].value;
    const apellido= e.target[1].value;
    const telefono = e.target[2].value;
    const disponibilidad = e.target[3].checked;
    const objeto = {
        'nombre': nombre,
        'apellido': apellido,
        'telefono': telefono,
        'disponibilidad': disponibilidad
    }
    sessionStorage.setItem(`Usuario${i}`,JSON.stringify(objeto));
    i++;
    cargarClaves(seleccionarClaveSS);
    cargarActuales(actualesSS);
});

SSBorrar.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(e);
    console.log(sessionStorage.length);
    sessionStorage.removeItem(e.target[0].value);
    console.log(sessionStorage.length);
    cargarClaves(seleccionarClaveSS);
    cargarActuales(actualesSS);
});

//Eventos para las cookies
formCookies.addEventListener('submit', (e) => {
    e.preventDefault();
    const clave = e.target[0].value;
    const valor = e.target[1].value;
    const expiracion = new Date();
    const expiracionMilisegundos = expiracion.getTime() + e.target[2].value*1000;
    const expiracionFormato = expiracion.setTime(expiracionMilisegundos);
    const expiracionFormatoRFC7231 = expiracion.toUTCString(expiracionFormato);
    document.cookie = `${clave}=${valor}; expires = ${expiracionFormatoRFC7231}`;
    cargarCookies();
});

cookiesBorrar.addEventListener('submit', (e) => {
    e.preventDefault();   
    const arrayCookies = document.cookie.split(';');
    const objetoValor = arrayCookies.filter((element) => {
        return element.includes(e.target[0].value);
    });
    const arrayValor = JSON.stringify(objetoValor);
    console.log(arrayValor);
    console.log(typeof(arrayValor));
    const valor = arrayValor.split('=');
    document.cookie = `${e.target[0].value}=${valor}; expires=${UnoEnero1970}`;
    // Para borrar una cookie vamos a setear su fecha de expiracion a una fecha pasada
    // en concreto al 1 de eneero de 1970 (esto lo hago así porque quiero, podría ser cualquier
    //otra fecha pasada o incluso simplemente new Date() pero habría que darle formato.)    
    cargarCookies();

});
//Introducimos el parametro para poder utilizar la funcion con localStorage y con sessionStorage

const cargarClaves = (parametro) =>{
    //Ccon este primer bucle borramos todas las options del select ya que sino
    //se irían añadiendo options debajo de las que ya existen cada vez que se 
    //ejecutase la funcion cargarClavesLS()
    const ClavesLSLength = parametro.length;
    //Se guarda el valor inicial de seleecionarClaveLS.length en una variable porque
    //el seleccionarClaveLS.length va a ir variando según se va ejecutando el bucle for y 
    //se van borrando elementos
    for(j=0; j<ClavesLSLength; j++){             
       if(parametro.length!=0){
        parametro[0].remove();      
       }
    }
    if(parametro===seleccionarClaveLS){
        for(j=0; j<localStorage.length; j++){        
            const elemento = document.createElement('option');
            elemento.value= `${localStorage.key(j)}`;        
            elemento.innerText=`${localStorage.key(j)}`;        
            parametro.appendChild(elemento);            
        }
    }
    if(parametro===seleccionarClaveSS){
        for(j=0; j<sessionStorage.length; j++){        
            const elemento = document.createElement('option');
            elemento.value= `${sessionStorage.key(j)}`;        
            elemento.innerText=`${sessionStorage.key(j)}`;        
            parametro.appendChild(elemento);            
        }
    }

    //Añadimos tantas options como claves en el localStoraqe haya
    
};

const cargarCookies = () =>{
    const arrayCookies = document.cookie.split(';');
    const longitudInicial = seleccionarCookie.length;
    console.log(arrayCookies);
    console.log(arrayCookies[0]);
    for(j=0; j<longitudInicial; j++){             
        if(arrayCookies.length!=0){
         seleccionarCookie[0].remove();       
        }
     }
    for(j=0; j<arrayCookies.length; j++){
        const elemento = document.createElement('option');
        elemento.value= `${arrayCookies[j].split('=')[0]}`;        
        elemento.innerText=`${arrayCookies[j].split('=')[0]}`;        
        seleccionarCookie.appendChild(elemento);            
    }    
    cargarActualesCookies();    
};

//Introducimos el parametro para poder utilizar la funcion con localStorage y con sessionStorage
const cargarActuales = (parametro) =>{
    //Ccon este primer bucle borramos todas las options del select ya que sino
    //se irían añadiendo options debajo de las que ya existen cada vez que se 
    //ejecutase la funcion cargarClavesLS()
    const actualesLength = parametro.length;
    //Se guarda el valor inicial de seleecionarClaveLS.length en una variable porque
    //el seleccionarClaveLS.length va a ir variando según se va ejecutando el bucle for y 
    //se van borrando elementos
    for(j=0; j<actualesLength; j++){             
       if(parametro.length!=0){
        parametro[0].remove();       
       }
    }
    if(parametro===actualesLS){
        for(j=0; j<localStorage.length; j++){        
            const elemento = document.createElement('input');
            elemento.value = `${localStorage.key(j)}`;        
            elemento.type = 'text';    
            elemento.classList = 'input form-control mb-2';  
            elemento.disabled = true;  
            parametro.appendChild(elemento);
            
        }
    }
    if(parametro===actualesSS){
        for(j=0; j<sessionStorage.length; j++){        
            const elemento = document.createElement('input');
            elemento.value = `${sessionStorage.key(j)}`;        
            elemento.type = 'text';    
            elemento.classList = 'input form-control mb-2';  
            elemento.disabled = true;  
            parametro.appendChild(elemento);
            
        }
    }
    //Añadimos tantas options como claves en el localStoraqe haya
    
};

const cargarActualesCookies = () => {
    
    const actualesLength = actualesCookies.length;
    const objetoCookies = document.cookie.split(',');
    const stringCookies = JSON.stringify(objetoCookies);
    console.log(stringCookies);
    //Se guarda el valor inicial de seleecionarClaveLS.length en una variable porque
    //el seleccionarClaveLS.length va a ir variando según se va ejecutando el bucle for y 
    //se van borrando elementos
    for(j=0; j<actualesLength; j++){             
       if(actualesCookies.length!=0){
        actualesCookies[0].remove();       
       }
    }    
    for(j=0; j<document.cookie.length; j++){        
        const elemento = document.createElement('input');
        elemento.value = `${stringCookies.split('"')[1].split(';')[j].split('=')[0]}`;        
        elemento.type = 'text';    
        elemento.classList = 'input form-control mb-2';  
        elemento.disabled = true;  
        actualesCookies.appendChild(elemento);            
    }    
    cargarCookies();
    cargarActualesCookies();
};

cargarClaves(seleccionarClaveLS);
cargarActuales(actualesLS);
cargarClaves(seleccionarClaveSS);
cargarActuales(actualesSS);
cargarCookies();
cargarActualesCookies();

//input type='color';