import { Request, Response } from 'express';
import { IProductService } from '../services/interfaces/IProduct.service';
import { IProductController } from './interfaces/IProduct.controller';

export default class ProductController implements IProductController {
  private _service: IProductService;

  constructor(service: IProductService) {
    this._service = service;
  }

  async create(req: Request, res: Response): Promise<Response> {
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const result = await this._service.getAll();
    return res.status(200).json(result);
  }

  async getOne(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const result = await this._service.getOne(id);
    return res.status(200).json(result);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const result = await this._service.update(id, req.body);
    return res.status(200).json(result);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const result = await this._service.delete(id);
    return res.status(204).json(result);
  }

  async search(req: Request, res: Response): Promise<Response> {
    const term = req.query.q as string;
    const result = await this._service.search(term);
    return res.status(200).json(result);
  }
}