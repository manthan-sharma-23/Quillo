import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import jwt from "jsonwebtoken";

export async function createContext({ req }: CreateExpressContextOptions) {
  async function getUserFromHeader() {
    if (req.headers.authorization) {
      const authHeader = req.headers["authorization"];
      const accessToken = authHeader?.split(" ")[1];

      try {
        const result: any = jwt.verify(
          accessToken,
          process.env.ACCESS_TOKEN_SECRET as string
        );

        if (result) {
          return {
            id: result.userId as string,
          };
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    return null;
  }
  const user = await getUserFromHeader();

  return {
    user,
  };
}
export type Context = Awaited<ReturnType<typeof createContext>>;
export type TRPCContext = Awaited<ReturnType<typeof createContext>>;
