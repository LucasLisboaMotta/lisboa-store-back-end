import express from 'express';

import idValidator from '../middlewares/idValidator.middleware';
import postProductValidator 
  from '../middlewares/postProductValidator.middleware';
import patchProductValidator
  from '../middlewares/patchProductValidator.midleware';

import productMongooseModel from '../models/schema/Product.schema';
import ProductModel from '../models/Product.model';
import ProductService from '../services/Product.service';
import ProductController from '../controllers/Product.controller';

const productModel = new ProductModel(productMongooseModel);
const productService = new ProductService(productModel);
const productController = new ProductController(productService);

const productRoute = express.Router();

productRoute.get('/', (req, res) => productController.getAll(req, res));
productRoute.get('/search', (req, res) => productController.search(req, res));

productRoute.get(
  '/:id', 
  idValidator, 
  (req, res) => productController.getOne(req, res),
);

productRoute.post(
  '/',
  postProductValidator,
  (req, res) => productController.create(req, res),
);

productRoute.put(
  '/:id',
  idValidator,
  postProductValidator,
  (req, res) => productController.update(req, res),
);

productRoute.patch(
  '/:id',
  idValidator,
  patchProductValidator,
  (req, res) => productController.update(req, res),
);

productRoute.delete(
  '/:id',
  idValidator,
  (req, res) => productController.delete(req, res),
);

export default productRoute;
