import { Request, Response, NextFunction } from 'express';
import { ProductPatchZodSchema } from '../interfaces/IProductPatch';
import validValue from '../helpers/validValue';
import CustomError, { invalid } from '../helpers/CustomError';

const patchProductValidator = (
  req: Request, 
  _res: Response, 
  next: NextFunction,
) => {
  const isValid = ProductPatchZodSchema.safeParse(req.body);
  const hasKeys = Object.keys(req.body).length > 0;
  
  if (!isValid || !hasKeys) throw new CustomError(invalid);
  
  const haveValue = req.body.value !== undefined;
  const isValidValue = validValue.test(req.body.value);
   
  if (haveValue && !isValidValue) throw new CustomError(invalid);

  return next();
};

export default patchProductValidator;
