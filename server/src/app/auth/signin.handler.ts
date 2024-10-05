import { eq } from "drizzle-orm";
import { db } from "../../db/db";
import { TRPCContext } from "../../trpc/context";
import { TSigninInput } from "./signin.schema";
import { TRPCError } from "@trpc/server";
import bcrypt from "../services/bcrypt";
import jwt from "../services/jwt";

type HandlerInput = {
  input: TSigninInput;
  ctx: TRPCContext;
};

export const SignInHandler = async ({ ctx, input }: HandlerInput) => {
  const user = await db.query.users.findFirst({
    where: (user) => eq(user.email, input.email),
  });

  if (!user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "No user was found with that email",
    });
  }

  const comparePass = await bcrypt.checkPassword(input.password, user.password);

  if (!comparePass) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Provided credentials are incorrect",
    });
  }

  return jwt.sign(user.id);
};
