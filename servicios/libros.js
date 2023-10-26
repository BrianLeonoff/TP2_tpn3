import LibroMem from "../model/DAOs/librosMem.js";

class ServicioLibros{
    constructor(){
        this.model = new LibroMem()
    }

    async obtenerLibros(id) {
        const libros = await this.model.obtenerLibros(id)
        return libros
    }

    async agregarLibro(libro) {
        let libroAgregado = await this.model.agregarLibro(libro)
        return libroAgregado
    }

    async actualizarLibro(id, nuevoLibro) {
        return await this.model.actualizarLibro(id, nuevoLibro) 
    }

    async eliminarLibro(id){
        return await this.model.eliminarLibro(id)
    }
}

export default ServicioLibros