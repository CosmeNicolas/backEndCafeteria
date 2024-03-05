import express from 'express'
//dotenv, permite procesar variables de entorno
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan';

//1- configurar un puerto 
const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('estoy en el puerto ' + app.get('port') )
})
//2- configurar los middleware
//cors, permite obtener conexiones remotas
app.use(cors())
//morgan, nos da info extra en la terminal y debemos pasarle un argumento
app.use(morgan('dev'))
//agregar el resto de los middlewares




//3- configurar las rutas
//ex, http://localhost:3000/productos
app.get('/', (req, res)=>{
    //agregar toda la logica del back
    console.log('procesando una solicitud get')
    res.send('respuesat del back')
})