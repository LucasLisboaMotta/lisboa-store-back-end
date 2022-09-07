import { IProductService } from './interfaces/IProduct.service';
import CustomError, { notFound } from '../helpers/CustomError';
import { IProduct } from '../interfaces/IProduct';
import { IProductCreate } from '../interfaces/IProductCreate';
import { IProductModel } from '../models/interfaces/IProduct.model';
import { IProductPatch } from '../interfaces/IProductPatch';

export default class ProductService 
implements IProductService {
  protected _model: IProductModel;
  constructor(model: IProductModel) {
    this._model = model;
  }

  async search(term: string): Promise<IProduct[]> {
    const findProductsByTerm = await this._model.search(term);
    
    const searchTerm = new RegExp(term, 'i');
    findProductsByTerm.sort((a, b) => {
      if (searchTerm.test(a.product) && !searchTerm.test(b.product)) return -1;
      if (searchTerm.test(b.product) && !searchTerm.test(a.product)) return 1;
      return 0;
    });

    return findProductsByTerm;
  }

  create(product: IProductCreate): Promise<IProduct> {
    return this._model.create(product);
  }

  getAll(): Promise<IProduct[]> {
    return this._model.getAll();
  }

  async getOne(id: string): Promise<IProduct> {
    const product = await this._model.getOne(id);
   
    if (!product) throw new CustomError(notFound);
   
    return product;
  }

  async update(id: string, product: IProductPatch): Promise<IProduct> {
    const productUpdated = await this._model.update(id, product);
   
    if (!productUpdated) throw new CustomError(notFound);
   
    return productUpdated;
  }

  async delete(id: string): Promise<void> {
    const product = await this._model.delete(id);
   
    if (!product) throw new CustomError(notFound);
  }
}