import { z } from "zod";

export const ZSignupInput = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export type TSignupInput = z.infer<typeof ZSignupInput>;
