import { Request, Response } from 'express';
import { IController } from './IController';

export interface IProductController extends IController {
  search(req: Request, res: Response): Promise<Response>;
}