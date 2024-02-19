class Tarjeta{
    id;
    brand;
    category;
    price;
    image;
    title;

    constructor(producto){
        this.id = producto.id
        this.brand = producto.brand;
        this.category = producto.category;
        this.price = producto.price;
        this.image = producto.images[0];
        this.title = producto.title;

    }
}