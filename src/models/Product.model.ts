import GenericModel from './Generic.model';
import { IProductModel } from './interfaces/IProduct.model';
import { IProduct } from '../interfaces/IProduct';
import { IProductPatch } from '../interfaces/IProductPatch';
import { IProductCreate } from '../interfaces/IProductCreate';

export default class ProductModel
  extends GenericModel<IProduct> 
  implements IProductModel {
  async create(product: IProductCreate): Promise<IProduct> {
    console.log(3);
    return this._modelMongoose.create({ ...product, updated: Date.now() });
  }

  async update(id: string, product: IProductPatch): Promise<IProduct> {
    return this._modelMongoose
      .findByIdAndUpdate(
        id,
        product,
        { returnOriginal: false },
      ) as unknown as Promise<IProduct>;
  }

  search(term: string): Promise<IProduct[]> {
    const regexParam = { $regex: new RegExp(term, 'i') };
    return this._modelMongoose.find({
      $or: [ 
        { product: regexParam },
        { description: regexParam },
      ] }) as unknown as Promise<IProduct[]>;
  }
}
