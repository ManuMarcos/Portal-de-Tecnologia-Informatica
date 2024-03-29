export {Equipo};

class Equipo{
    constructor(categoria, marca, modelo, nroDeSerie, precio, img){
        this.categoria = categoria.toUpperCase();
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.precio = parseInt(precio);
        this.img = img;
    }

    mostrarDatosVertical(){
        alert(`
            Categoria: ${this.categoria}
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Precio: $${this.precio}
        `)
    }

    mostrarDatosHorizontal(){
        alert(`Categoria: ${this.categoria}, Marca: ${this.marca}, Modelo: ${this.modelo}, Precio: $${this.precio}`)
    }
}