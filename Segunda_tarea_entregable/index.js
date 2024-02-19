const productos = document.getElementById('productos');
const formulario = document.getElementById('formulario');
const carrito = document.getElementById('carrito');
const carritoContenedor = document.getElementById('carritoContenedor');
let carritoList = [];

async function obtenerProductos() {
    const response = await fetch('https://dummyjson.com/products');
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;    
};

function generarTarjetaHTML(){
    const card = document.createElement('div');
    productos.appendChild(card);
    const title = document.createElement('h3');
    const category = document.createElement('h5');
    const brand = document.createElement('h2');
    const price = document.createElement('h1');
    const image = document.createElement('img');
    const button = document.createElement('button');
    card.appendChild(brand);
    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(image);
    card.appendChild(price);
    card.appendChild(button);
    brand.innerHTML = tarjeta.brand;
    title.innerHTML = tarjeta.title;
    category.innerHTML = tarjeta.category;
    image.src = tarjeta.image;
    image.style.width = '80%';
    image.style.borderRadius = '15px';
    price.innerHTML = tarjeta.price+"€";
    card.style.width = '30%';
    card.style.border = 'black 4px solid';
    card.style.margin = '4px';
    card.style.color = 'white';
    card.style.background = 'grey';
    card.style.borderRadius = '20px';
    card.style.textAlign = 'center';
    card.style.alignItems = 'center';
    button.className = 'btn btn-primary mb-2 anadir';
    button.innerHTML = 'Añadir';  
    card.id=tarjeta.id;

};

//Se carga la web con todos los productos por primera vez
obtenerProductos().then((res) => {
    const tituloProductos = document.createElement('h1');    
    tituloProductos.innerHTML = 'Productos';
    tituloProductos.classList.add('animate__animated','animate__backInLeft');
    
    productos.appendChild(tituloProductos);
    for(i=0;i<res.products.length;i++){
        tarjeta = new Tarjeta(res.products[i]);
        generarTarjetaHTML(); 
     }
}).catch((error) => {
    console.log(error + ": No se han podido cargar los productos");
});

//Se seleccionan los filtros
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const filtroPrecio = Number(e.target[0].value);
    const filtroCategoria = e.target[1].value;
    const filtroMarca = e.target[2].value;
    console.log(filtroPrecio);
    console.log(filtroCategoria);
    console.log(filtroMarca);
    console.log(e);

    obtenerProductos().then((res) => {
        productos.innerHTML ='';
        const tituloProductos = document.createElement('h1');
        tituloProductos.innerHTML = 'Productos';
        productos.appendChild(tituloProductos);
        const filtrado = res.products.filter((element) =>{
            if(filtroCategoria=='void'&&filtroMarca=='void'){
                return Number(element.price)>filtroPrecio
            }else if(filtroCategoria=='void'&&filtroMarca!='void'){
                return Number(element.price)>filtroPrecio&&element.brand==filtroMarca;
            }else if(filtroCategoria!='void'&&filtroMarca=='void'){
                return Number(element.price)>filtroPrecio&&element.category==filtroCategoria;
            }
            return Number(element.price)>filtroPrecio&&element.brand==filtroMarca&&element.category==filtroCategoria;
        } );
        for(i=0;i<filtrado.length;i++){
            tarjeta = new Tarjeta(filtrado[i]);
            generarTarjetaHTML(); 
         }
    }).catch((error) => {
        console.log(error + ": No se han podido cargar los productos");
    });
    
});

//Deteccion de click para añadir al carrito
productos.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('anadir')){
        obtenerProductos().then((res) => {
        carritoList.push(res.products[Number(e.srcElement.parentElement.id)-1])
        console.log(carritoList.length);
        pintarCarrito()        
        });
    }
});
//Deteccion de click para comprar
carrito.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('comprar')){        
        let suma = 0;
        for(i=0;i<carritoList.length;i++){
            suma += Number(carritoList[i].price);
        }
        Swal.fire({
            title: `Vas a realizar una compra por valor de ${suma}€. Estás seguro?`,
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, quiero comprar!"
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Compra realizada con éxito",
                    text: "",
                    icon: "success"
                
                });
                console.log(carritoList);
                carritoList = [];
                pintarCarrito();
                console.log(carritoList);
            }else{
                Swal.fire({
                    title: "Compra cancelada",
                    text: "",
                    icon: "warning"
                  });
            }
          });



        // if (confirm(`Vas a realizar una compra por de ${suma}. Estás seguro?`) == true) {
        //     console.log(carritoList);
        //     carritoList = [];
        //     pintarCarrito();
        //     console.log(carritoList);
        //   } else{
        //     console.log('compra cancelada');
        //   }
    }
});

//Pintar el carrito en pantalla
function pintarCarrito(){
    carritoContenedor.innerHTML = '';
    for(i=0;i<carritoList.length;i++){        
        carritoContenedor.style.color = 'white';
        const nombre = document.createElement('div');
        const precio = document.createElement('div');
        nombre.style.width = '49%';
        precio.style.width = '49%';
        precio.style.marginRight = '0px';
        console.log('pasas por aqui?????????');
        nombre.innerHTML = carritoList[i].title;
        precio.innerHTML = carritoList[i].price+'€';
        carritoContenedor.appendChild(nombre);
        carritoContenedor.appendChild(precio);


    }
    const buttonCarrito = document.createElement('button');
    buttonCarrito.className = 'btn btn-primary mt-2 comprar';
    buttonCarrito.innerHTML = 'Comprar';
    carritoContenedor.appendChild(buttonCarrito);

}