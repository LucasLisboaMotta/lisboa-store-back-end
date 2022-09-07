import { z } from 'zod';
import { ProductCreateZodSchema } from './IProductCreate';

const ProductZodSchema = z.object({
  created: z.date(),
  updated: z.date(),
}).merge(ProductCreateZodSchema);

type IProduct = z.infer<typeof ProductZodSchema>;

export { ProductZodSchema, IProduct };
