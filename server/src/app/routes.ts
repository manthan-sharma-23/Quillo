import { router } from "../trpc/trpc";
import { authRouter } from "./auth/_router";
import { userRouter } from "./users/_router";

export const appRouter = router({
  auth: authRouter,
  users: userRouter,
});
