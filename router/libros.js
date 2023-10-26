import express from 'express'
import Controladorlibros from '../controlador/libros.js'




class RouterLibros{
constructor(){
        this.router = express.Router()
        this.controladorLibros = new Controladorlibros()
    }

    start(){
        // this.router.get('/libros', this.controladorLibros.obtenerLibros)
        this.router.get('/:id?', this.controladorLibros.obtenerLibros)
        this.router.post('/', this.controladorLibros.agregarLibro)
        this.router.put('/:id?', this.controladorLibros.actualizarLibro)
        this.router.delete('/:id', this.controladorLibros.eliminarLibro)
        
        return this.router
    }
}

export default RouterLibros