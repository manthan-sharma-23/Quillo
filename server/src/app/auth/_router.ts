import { publicProcedure } from "../../trpc/procedures/public";
import { router } from "../../trpc/trpc";
import { SignInHandler } from "./signin.handler";
import { ZSigninInput } from "./signin.schema";
import { SignupHandler } from "./signup.handler";
import { ZSignupInput } from "./signup.schema";

export const authRouter = router({
  signin: publicProcedure.input(ZSigninInput).mutation(SignInHandler),
  signup: publicProcedure.input(ZSignupInput).mutation(SignupHandler),
});
