import { IService } from './IService';
import { IProductCreate } from '../../interfaces/IProductCreate';
import { IProduct } from '../../interfaces/IProduct';
import { IProductPatch } from '../../interfaces/IProductPatch';

export interface IProductService extends IService<IProduct> {
  create(product: IProductCreate): Promise<IProduct>,
  update(id: string, product: IProductPatch): Promise<IProduct>,
  search(term: string): Promise<IProduct[]>,
}