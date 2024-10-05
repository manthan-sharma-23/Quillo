import { router } from "../trpc/trpc";
import { userRouter } from "./auth/_router";

export const appRouter = router({
  user: userRouter,
});
