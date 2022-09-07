import { IModel } from './IModel';
import { IProductCreate } from '../../interfaces/IProductCreate';
import { IProduct } from '../../interfaces/IProduct';
import { IProductPatch } from '../../interfaces/IProductPatch';

export interface IProductModel extends IModel<IProduct> {
  create(product: IProductCreate): Promise<IProduct>,
  update(id: string, product: IProductPatch): Promise<IProduct>,
  search(term: string): Promise<IProduct[]>,
}
