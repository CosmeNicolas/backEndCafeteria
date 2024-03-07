import express from 'express'
//dotenv, permite procesar variables de entorno
import 'dotenv/config'
import cors from 'cors'
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

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
//middleware de express, q le dafomrato json
app.use(express.json())
//express urlencoded- interpreta los datos del body
app.use(express.urlencoded({extended: true}))
//
const __filename = fileURLToPath(import .meta.url)
const __dirname = path.dirname(__filename)
/* console.log(__filename)
console.log(path.join(__dirname,'/public')) */
app.use(express.static(path.join(__dirname,'/public')))





//3- configurar las rutas
//ex, http://localhost:4001
app.get('/nuevo', (req, res)=>{
    //agregar toda la logica del back
    console.log('procesando una solicitud get')
    res.send('respuesat del back')
})