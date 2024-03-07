import mongoose from "mongoose";
import 'dotenv/config';

const mongoURI = process.env.MONGODB_URI;
console.log(mongoURI);

mongoose.connect(mongoURI);

//verificar la conexion
const datosConexion = mongoose.connection

//se transforma en un objeto
datosConexion.once('open', ()=>{
    console.log('BD conectada')
})