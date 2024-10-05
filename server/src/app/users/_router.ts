import { authedProcedure } from "../../trpc/procedures/authed";
import { router } from "../../trpc/trpc";
import { GetUserHandler } from "./getUser.handler";

export const userRouter = router({
  getUser: authedProcedure.mutation(GetUserHandler),
});
