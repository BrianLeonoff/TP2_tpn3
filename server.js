import express from 'express'
import RouterLibros from './router/libros.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
 app.use(express.static('public'))

const routerLibros = new RouterLibros()

app.use('/api/libros', routerLibros.start())


const PORT = 8080
const server = app.listen(PORT,
    () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))

server.on('error', error => console.log('Servidor express en error: ',error))