class Tarea{
    titulo;
    descripcion;
    fecha;
    prioritaria;
    prioridad;
    completa;
    imagen;
    

      
    constructor(titulo, descripcion, prioridad, fecha, prioritaria){
       
        
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.prioritaria = prioritaria;
        this.prioridad = prioridad;
        this.completa = 'false';
        if(prioridad == 'alta'){
            this.imagen= 'https://static-00.iconduck.com/assets.00/high-priority-icon-1024x1024-ryazhwgn.png';
        }
        if(prioridad == 'media'){
            this.imagen= 'https://static-00.iconduck.com/assets.00/medium-priority-icon-512x512-kpm2vacr.png';
        }
        if(prioridad == 'baja'){
            this.imagen= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tANuBJoViapolNoVPmOHlaaFityDbdvSyyhUVpIL_MvB2K3IS6DNmUXkAtzhOPbbHRc&usqp=CAU';
        }
              
    }     
}


// DUDA: cuando pulso el boton completar lo que hago es filtrar el array donde he guardado las tarjetas y lo que hago es
//       sobreescribir el array completo excepto un elemento, el elemento cuyo id coincide con el id del elemento padre del boton
//       pulsado.
//       El sentido común me dice que habría que modificar la propiedad checked del checkbox de la tarjeta completada y luego filtrar
//       según las tareas que este completadas o no
//
//DUDA2: no sabia como hace un id estático en la clase y le generé el id en el toDo.js de forma externa a la instancia de la clase Tarea