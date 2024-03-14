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

export const editarProducto = async(req, res)=>{
    try {
        //verificar si el producto existe  con el id 
        const productoBuscado = await Producto.findById(req.paras.id)
        //responder si no es correcto 
        if(!productoBuscado){
            return res.status(404).json({mensaje: 'No se encontro el producot buscado'})
        }
        //si el producto existe y su datos son correctos , solicitamos actualizar 
        await Producto.findByIdAndUpdate(req.params.id, req.body )
        //responder al usuario 
        res.status(200).json({mensaje: 'El producto fue editado exitosamente'})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'ocurrio un error no se pudo editar el producto'})
    }
}

// todo lo del 500 es error interno 

export const borrarProducto = async(req, res)=>{
    try {
        //verificar si el producto existe  con el id 
        const productoBuscado = await Producto.findById(req.paras.id)
        //responder si no es correcto 
        if(!productoBuscado){
            return res.status(404).json({mensaje: 'No se encontro el producot buscado'})
        }
        //si el producto existe y su datos son correctos , solicitamos borrar 
        await Producto.findByIdAndDelete(req.params.id)
        //responder al usuario 
        res.status(200).json({mensaje: 'El producto fue eliminado exitosamente'})
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'ocurrio un error no se pudo borrar el producto'})
    }
}
