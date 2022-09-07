import 'express-async-errors';
import express from 'express';
import productRoute from './product.route';
import errorMiddleware from '../middlewares/error.middleware';

const routes = express();
routes.use(express.json());

routes.use('/products', productRoute);

routes.use(errorMiddleware);

export default routes;
