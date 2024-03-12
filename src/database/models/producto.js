import mongoose from "mongoose";

const { Schema } = mongoose;

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    unique: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 50,
    max: 10000
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor)=> {
        const pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/
        return pattern.test(valor)
      },
      message: dato => `${dato.value} no es una URL de imágen válida.`
    }
  },
  categoria: {
    type: String,
    required: true,
    enum: [
      "infusiones",
      "batidos",
      "cafeComun",
      "cafeEspecialidad",
      "materiaPrima",
      "panaderiaDulce",
      "panaderiasalado",
      "bocadillos",
    ],
  },
  descripcion_breve: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 260,
  },
});

// Crear el modelo del producto
const Producto = mongoose.model("producto", productoSchema);

export default Producto;
