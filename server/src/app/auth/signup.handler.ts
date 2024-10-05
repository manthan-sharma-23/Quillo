import { eq } from "drizzle-orm";
import { db } from "../../db/db";
import { TRPCContext } from "../../trpc/context";
import { TSignupInput } from "./signup.schema";
import { TRPCError } from "@trpc/server";
import { users } from "../../db/schema";
import bcrypt from "../services/bcrypt";
import jwt from "../services/jwt";

type HandlerInput = {
  ctx: TRPCContext;
  input: TSignupInput;
};

export const SignupHandler = async ({ ctx, input }: HandlerInput) => {
  const { firstName, lastName, email, password } = input;

  const userCheckQuery = await db.query.users.findFirst({
    where: (user) => eq(user.email, email),
  });

  if (userCheckQuery) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "User already exists , please Log in!",
    });
  }

  const hash = await bcrypt.hashPassword(password);

  const user = await db
    .insert(users)
    .values({
      firstName,
      lastName,
      email,
      username: email.split("@")[0],
      password: hash,
    })
    .returning();

  return jwt.sign(user[0].id);
};
