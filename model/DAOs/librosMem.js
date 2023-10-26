class LibrosMem {
    constructor() {
        this.libros = [
            {id:"1", titulo: "en la playa", autor: "pepe", año: "1995"},
            {id:"2", titulo: "en la montaña", autor: "carlos", año: "1999"},
            {id:"3", titulo: "en la nieve", autor: "sarlos", año: "2005"}
        ]
    }

    getNext_Id(libros) {
        let lg = libros.length
        return lg? String(parseInt(this.libros[lg-1].id) +1) : "1"
    }
/*
    obtenerlibros = => {
        try {
            return this.libros
        }
        catch(error) {
            console.log('error en obtenerlibros', error);
            return {}
        }
    }
*/
    obtenerLibros = id =>{
        try{
            if(id) {
                let libro = this.libros.find(libro => libro.id === id)
                return libro || {}
            }
            else{
                return this.libros
            }
        }
        catch(error){
            console.log('error en obtenerlibro', error);
            return {}
        }
    }

    agregarLibro = async libro => {
        try{
            let id = this.getNext_Id(this.libros)
            libro.id = id
            libro.titulo = String(libro.titulo)
            libro.autor = String(libro.autor)
            libro.anio = Number(libro.anio)
            this.libros.push(libro)

            return libro
        }
        catch(error){
            console.log('error en guardarLibro:', error);
            let libro= {}

            return libro
        }
    }

    actualizarLibro = async (id, libro) => {
        try{
            libro.id = id
            const libroIndex = this.libros.findIndex(libro => libro.id === id)
            if (libroIndex != -1) {
                let libroAnterior = this.libros[libroIndex]
                let libroNuevo = {...libroAnterior, ...libro}
                this.libros.splice(libroIndex,1,libroNuevo)
                return libroNuevo;
            } else {
                this.libros.push(libro)
                return libro;
            }
        }
        catch(error){
            console.log('error actualizando libro:', error);
        }
    }

    eliminarLibro = async(id) => {
        try{
            let libro={}
            const libroIndex = this.libros.findIndex(libro => libro.id === id)
            if (libroIndex !== -1) {
                libro = this.libros.splice(libroIndex, 1)[0];
                console.log('se borro el libro:', libro);
            } else {
                console.log('Libro no encontrado');
            }
            return
        }
        catch(error){
            console.log('error eliminando el libro: ',error);
        }
    }
}

export default LibrosMem