import { z } from 'zod';

const ProductPatchZodSchema = z.object({
  product: z.string().min(3).optional(),
  value: z.string().optional(), // /^\d+(.\d{3})*(\.\d{2})$/gm;
  description: z.string().min(3).optional(),
});

type IProductPatch = z.infer<typeof ProductPatchZodSchema>;

export { ProductPatchZodSchema, IProductPatch };