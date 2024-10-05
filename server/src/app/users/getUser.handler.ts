import { eq } from "drizzle-orm";
import { db } from "../../db/db";
import { TRPCContext } from "../../trpc/context";
import { TRPCError } from "@trpc/server";

type HandlerInput = {
  ctx: TRPCContext;
};
export const GetUserHandler = async ({ ctx }: HandlerInput) => {
  const user = await db.query.users.findFirst({
    where: (user) => eq(user.id, ctx.user?.id!),
  });

  if (!user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Session expired",
    });
  }

  return user;
};
