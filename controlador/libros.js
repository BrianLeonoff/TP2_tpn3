import ServicioLibros from "../servicios/libros.js"

class ControladorLibros {
    constructor() {
        this.servicioLibros = new ServicioLibros()
    }

        obtenerLibros = async (req, res) => {
            try {
                const {id} = req.params
                const libro = await this.servicioLibros.obtenerLibros(id)
                console.log(libro);
                res.json(libro)
            }
            catch (error) {
                console.log('error obtenerLibro', error);
            }
        }

      /*  obtenerLibros = (req, res) => {
            try {
                
                const libros = this.servicioLibros.obtenerLibros()
                console.log(libros);
                res.json(libros)
            }
            catch (error) {
                console.log('error obtenerLibro', error);
            }
        }
*/
        agregarLibro = async (req, res) => {
            try{
                let libro = req.body
                let libroAgregado = await this.servicioLibros.agregarLibro(libro)
                console.log(libroAgregado);
                res.json(libroAgregado)
            }
            catch(error){
                console.log('error obtenerLibros', error);
            }
        }

        actualizarLibro = async (req, res) => {
            try{
                const { id } = req.params
                let nuevoLibro = req.body
                let libroActualizado = await this.servicioLibros.actualizarLibro(id, nuevoLibro)
                console.log(libroActualizado);
                res.json(libroActualizado)
            }
            catch(error){
                console.log('error actualizarLibro: ', error);
            }
        }

        eliminarLibro = async (req, res) => {
            try{
                let libroEliminado = await this.servicioLibros.eliminarLibro(req.params.id)
                console.log(libroEliminado);
                res.json(libroEliminado)
            }
            catch(error){
                console.log('error eliminarLibro: ', error);
            }
        }
}

export default ControladorLibros