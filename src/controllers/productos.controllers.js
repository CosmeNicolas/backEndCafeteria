import Producto from "../database/models/producto.js";




export  const listarProductos = async (req, res)=>{
 try {
     const productos =await Producto.find();
     res.status(200).json(productos)
 } catch (error) {
    console.log(error)
    res.status(500).json({mensaje: "Error al buscar los productos"})
 }
}

export const crearProducto = async(req, res)=>{
    try {
        //extraer los datos del body 
       /*  console.log(req)
        console.log(req.body) */
        //todo: validar los datos del body 
        //pedir a la base de datos crear el producto
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        //responder al frontEnd
        res.status(201).json({
            mensaje: 'El producto fue creado exitosamente'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'El producto no pudo ser creado'
        })
    }
}

export const obtenerProducto = async(req, res)=>{
    try {
        //extraer el id 
        console.log(req.params.id)
        //solicitar a la base de datos, buscar ese producto 
        const productoBuscado = await Producto.findById(req.params.id)
        //preguntar si no encontre el producto buscado
        if(!productoBuscado){
            return res.status(404).json({mensaje: " No se encontro el producto con el id"})
        }
        //enviar respuesta 
        res.status(200).json(productoBuscado)
    } catch (error) {
        console.log(error)
        res.status(400).json({mensaje: "no se encontro el producto solicitado"})
    }
}