import { z } from "zod";

export const ZSigninInput = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

export type TSigninInput = z.infer<typeof ZSigninInput>;
