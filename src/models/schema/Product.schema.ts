import { Schema, model } from 'mongoose';
import { IProduct } from '../../interfaces/IProduct';

const productSchema = new Schema<IProduct>(
  {
    product: { type: String, required: true },
    value: { type: String, required: true },
    description: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, required: true },
  },
  { versionKey: false },
);

const productMongooseModel = model<IProduct>('product', productSchema);

export default productMongooseModel;