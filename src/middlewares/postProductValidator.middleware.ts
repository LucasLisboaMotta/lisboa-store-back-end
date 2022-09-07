import { Request, Response, NextFunction } from 'express';
import { ProductCreateZodSchema } from '../interfaces/IProductCreate';
import validValue from '../helpers/validValue';
import CustomError, { invalid } from '../helpers/CustomError';

const postProductValidator = (
  req: Request, 
  _res: Response, 
  next: NextFunction,
) => {
  const isValid = ProductCreateZodSchema.safeParse(req.body);
  const isValidValue = validValue.test(req.body.value);
  if (!isValid || !isValidValue) throw new CustomError(invalid); 
  return next();
};

export default postProductValidator;
