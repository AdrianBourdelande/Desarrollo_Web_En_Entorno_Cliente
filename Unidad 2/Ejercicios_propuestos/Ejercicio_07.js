const formulario = document.querySelector("form");
let i = 0;



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    const nombre = e.target[0].value;
    const apellido = e.target[1].value;
    const telefono = e.target[2].value;
    localStorage.setItem(`Usuario${i}`, `${nombre} // ${apellido} // ${telefono}`);
    console.log(nombre);
    console.log(apellido);    
    console.log(telefono);
    i++;
});

