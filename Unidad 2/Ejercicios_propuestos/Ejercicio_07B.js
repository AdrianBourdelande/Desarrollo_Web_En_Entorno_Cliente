const formulario = document.querySelector("form");
let i = 0;
const usuarios = [];
const listaUsuarios = document.getElementById('listaUsuarios');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);    
    const usuario = {
        nombre: e.target[0].value,
        apellido: e.target[1].value,
        telefono: e.target[2].value
    }
    usuarios.push(usuario);
    localStorage.setItem(`Usuario${i}`, `${JSON.stringify(usuarios[i])}`);
    console.log(nombre);
    console.log(apellido);    
    console.log(telefono);
    
    const itemUsuario = document.createElement('li');
    itemUsuario.innerHTML = JSON.parse(localStorage.getItem(`Usuario${i}`)).nombre+ " "+
        JSON.parse(localStorage.getItem(`Usuario${i}`)).apellido;
    listaUsuarios.appendChild(itemUsuario);

    i++;

});


