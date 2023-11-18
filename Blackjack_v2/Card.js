class Card {
    imagen;
    valor;
    representacion;

    constructor(representacion) {
        this.representacion = representacion;
        this.imagen = "./img/" + `${representacion}` + ".png";
        this.valor = this.getValor();
    }

    getValor() {
        //Quitar el ultimo caracter a una cadena
        let valor = this.representacion.slice(0,(this.representacion.length-1));
        if(valor==="J"||valor==="Q"||valor==="K"||valor==="A"){
            if(valor==="A"){
                valor = 1;
            }else{
                valor = 11;
            }
        }else{
            valor = Number(valor);
        }
        return valor;
    }
}
