const introduccionDatos = document.getElementById('introduccionDatos');
const resultadosBusqueda = document.getElementById('resultadosBusqueda');
const tareas = document.getElementById('tareas');
const resultados = document.getElementById('resultados');
const contenedorBusqueda = document.getElementById('contenedorBusqueda');
const busquedaSelect = document.getElementById('busquedaSelect');
const select = document.querySelectorAll('select');
let idTarjeta = 0;
let pilaTareas = [];


introduccionDatos.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e);
    //(titulo, descripcion, prioridad, fecha, prioritaria)
    const tarjeta = new Tarea(
        
        e.target[0].value, // para el titulo
        e.target[1].value, // para la descripcion
        e.target[2].value, // para la prioridad
        e.target[3].value, // para la fecha
        e.target[4].checked // para la prioritidad
    );
    // console.log(tarjeta);
    tarjeta.id = `idTarjeta${idTarjeta}`;
    idTarjeta++;
    pilaTareas.push(tarjeta);
    desplegarTareas(pilaTareas);
    actualizarBusqueda('todas');
    botonesCompletar = document.querySelectorAll('button');
});

busquedaSelect.addEventListener('change', (e) => {
    e.preventDefault();

    
    if(e.target.value=='todas'){
        actualizarBusqueda('todas');
    }
    if(e.target.value=='alta'){
        actualizarBusqueda('alta');
    }
    if(e.target.value=='media'){
        actualizarBusqueda('media');
    }
    if(e.target.value=='baja'){
        actualizarBusqueda('baja');
    }
});

tareas.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.classList.contains('botonTarea')){
        pilaTareas = pilaTareas.filter((tarea) => tarea.id!=e.target.parentElement.id);
        desplegarTareas(pilaTareas);
    }
    if(select[1].value=='todas'){
        actualizarBusqueda('todas');
    }
    if(select[1].value=='alta'){
        actualizarBusqueda('alta');
    }
    if(select[1].value=='media'){
        actualizarBusqueda('media');
    }
    if(select[1].value=='baja'){
        actualizarBusqueda('baja');
    }
});

const desplegarTareas = (pilaTareas) =>{
    tareas.innerHTML='';
   for(let i=0; i<pilaTareas.length; i++){
    const tarjeta = document.createElement('div');
    tareas.appendChild(tarjeta);
    const imagen = document.createElement('img');    
    tarjeta.appendChild(imagen);
    const titulo = document.createElement('p');
    tarjeta.appendChild(titulo);
    const descripcion = document.createElement('p');
    tarjeta.appendChild(descripcion);
    const boton = document.createElement('button');
    tarjeta.appendChild(boton);
    //Estilo de la tarjeta    
    tarjeta.style.width = '30%';
    tarjeta.style.border = '2px solid black';    
    tarjeta.classList = 'm-3';    
    tarjeta.id = pilaTareas[i].id;
    //Estilo y contenido de la imagen
    imagen.src = pilaTareas[i].imagen;
    imagen.style.width = '100%';
    imagen.classList = 'mt-2';
    //Estilo y contenido de la prioridad
    titulo.textContent = pilaTareas[i].titulo;
    //Estilo y contenido de la descripcion
    descripcion.textContent = pilaTareas[i].descripcion;
    //Estilo y contenido del boton
    boton.classList = 'btn btn-primary mb-3 botonTarea';
    boton.textContent = 'Completar'; 
   }   
};

const actualizarBusqueda = (cantidad)=>{
    contenedorBusqueda.innerHTML = ''; // borramos todo el contenido del contenedorBusqueda  
    console.log(cantidad);
    if(cantidad == 'todas'){
        for(let i=0; i<pilaTareas.length; i++){
            const parrafo = document.createElement('p');
            parrafo.textContent = `${pilaTareas[i].titulo}`;
            contenedorBusqueda.appendChild(parrafo);
            
        };
    }else{
        const pilaTareasFiltradas = pilaTareas.filter(element => element.prioridad==cantidad); 
        for(let i=0; i<pilaTareasFiltradas.length; i++){
            const parrafo = document.createElement('p');
            parrafo.textContent = `${pilaTareasFiltradas[i].titulo}`;
            contenedorBusqueda.appendChild(parrafo);
            console.log(pilaTareasFiltradas);
            
        };
    }

    console.log(pilaTareas);
    
    
};

