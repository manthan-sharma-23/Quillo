import { TRPCError } from "@trpc/server";
import { publicProcedure } from "./public";

export const authedProcedure = publicProcedure.use(async function isAuthed(
  opts
) {
  const { ctx } = opts;
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({
    ctx: {
      user: ctx.user,
    },
  });
});
