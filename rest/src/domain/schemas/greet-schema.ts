import { z } from 'zod';

export const greetSchema = z.object({
  body: z.object({
    input: z.string().min(1, 'input cannot be empty'),
  }),
});
