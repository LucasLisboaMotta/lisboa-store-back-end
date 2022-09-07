import { Request, Response, NextFunction } from 'express';
import { ProductCreateZodSchema } from '../interfaces/IProductCreate';
import validValue from '../helpers/validValue';
import CustomError, { invalid } from '../helpers/CustomError';

const postProductValidator = (
  req: Request, 
  _res: Response, 
  next: NextFunction,
) => {
  console.log('0.5', req.body);
  const isValid = ProductCreateZodSchema.safeParse(req.body);
  console.log('0.55', isValid);
  const isValidValue = validValue.test(req.body.value);
  console.log('0.6');
  if (!isValid || !isValidValue) throw new CustomError(invalid); 
  console.log('0.65');
  return next();
};

export default postProductValidator;
