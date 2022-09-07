import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';
import CustomError, { invalidId } from '../helpers/CustomError';

const idValidator = (req: Request, _res: Response, next: NextFunction) => {
  const { id } = req.params;
  
  const isValid = Types.ObjectId.isValid(id);
  if (!isValid) throw new CustomError(invalidId);

  return next();
};

export default idValidator;
