import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  tipo: { type: String, required: true },
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  almacenamiento: { type: String, required: true },
  ram: { type: String, required: true },
  procesador: { type: String, required: true },
  pantalla: { type: String, required: true },
  precio: { type: Number, required: true },
  url_Imagen: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

export default Product;