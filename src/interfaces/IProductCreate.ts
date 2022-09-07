import { z } from 'zod';

const ProductCreateZodSchema = z.object({
  product: z.string().min(3),
  value: z.string(), // /^\d+(\d{3})*(\.\d{2})$/gm;
  description: z.string().min(3),
});

type IProductCreate = z.infer<typeof ProductCreateZodSchema>;

export { ProductCreateZodSchema, IProductCreate };
