import {actualesCookies, seleccionarCookie} from "./cookies.js";

const cargarClaves = (parametro) =>{
    //Ccon este primer bucle borramos todas las options del select ya que sino
    //se irían añadiendo options debajo de las que ya existen cada vez que se 
    //ejecutase la funcion cargarClavesLS()
    const ClavesLSLength = parametro.length;
    //Se guarda el valor inicial de seleecionarClaveLS.length en una variable porque
    //el seleccionarClaveLS.length va a ir variando según se va ejecutando el bucle for y 
    //se van borrando elementos
    for(let j=0; j<ClavesLSLength; j++){             
       if(parametro.length!=0){
        parametro[0].remove();      
       }
    }
    if(parametro===seleccionarClaveLS){
        for(let j=0; j<localStorage.length; j++){   
            // Con este if se evita que los parametros iL y iS se visualicen en el select de la clave a borrar 
            if(localStorage.key(j)==='iL'||localStorage.key(j)==='iS'){
                
            }   else{
                const elemento = document.createElement('option');
                elemento.value= `${localStorage.key(j)}`;        
                elemento.innerText=`${localStorage.key(j)}`;        
                parametro.appendChild(elemento);
            } 
                        
        }
    }
    if(parametro===seleccionarClaveSS){
        for(let j=0; j<sessionStorage.length; j++){
            if(sessionStorage.key(j)==='IsThisFirstTime_Log_From_LiveServer'){
                
            }   else{        
                const elemento = document.createElement('option');
                elemento.value= `${sessionStorage.key(j)}`;        
                elemento.innerText=`${sessionStorage.key(j)}`;        
                parametro.appendChild(elemento); 
            }           
        }
    }    
};

const cargarCookies = () =>{
    const arrayCookies = document.cookie.split(';');
    const longitudInicial = seleccionarCookie.length;
    // console.log(arrayCookies);
    // console.log(arrayCookies[0]);
    for(let j=0; j<longitudInicial; j++){             
        if(arrayCookies.length!=0){
         seleccionarCookie[0].remove();       
        }
     }
    for(let j=0; j<arrayCookies.length; j++){
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
    for(let j=0; j<actualesLength; j++){             
       if(parametro.length!=0){
        parametro[0].remove();       
       }
    }
    if(parametro===actualesLS){
        for(let j=0; j<localStorage.length; j++){        
            const elemento = document.createElement('input');
            
            elemento.value = `${localStorage.key(j)}`;        
            elemento.type = 'text';    
            elemento.classList = 'input form-control mb-2';  
            elemento.disabled = true;  
            parametro.appendChild(elemento);  
            console.log(elemento);
// filtro para dejar de visualizar los valores iL e iS
            if(localStorage.key(j)=='iL'||localStorage.key(j)=='iS'){
                elemento.type = 'hidden';
            }      
        }
    }


    if(parametro===actualesSS){
        for(let j=0; j<sessionStorage.length; j++){        
            if(sessionStorage.key(j)==='IsThisFirstTime_Log_From_LiveServer'){

            }else{
                const elemento = document.createElement('input');
                elemento.value = `${sessionStorage.key(j)}`;        
                elemento.type = 'text';    
                elemento.classList = 'input form-control mb-2';  
                elemento.disabled = true;  
                parametro.appendChild(elemento);
            }
        }
    }    
};

const cargarActualesCookies = () => {
    
    const actualesLength = actualesCookies.length;
   
    for(let j=0; j<actualesLength; j++){             
       if(actualesCookies.length!=0){
        actualesCookies[0].remove();       
       }
    }    
    for(let j=0; j<document.cookie.split(';').length; j++){  
        //Con este filtro se evita que nos genere un input en los actuales con el valor de clave ''.
        //Si las cookies están vacias, en realidad lo que contienen es un string vacio es decir ''.   
        if(!document.cookie==''){
            const elemento = document.createElement('input');        
            elemento.value = `${document.cookie.split(';')[j].split('=')[0].trim()}`;         
            elemento.type = 'text';    
            elemento.classList = 'input form-control mb-2';  
            elemento.disabled = true;  
            actualesCookies.appendChild(elemento);  
        }
            
               
    }  
};

export {cargarClaves, cargarCookies, cargarActuales, cargarActualesCookies};