import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { sql } from "drizzle-orm";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./app/routes";
import { createContext } from "./trpc/context";
import { db } from "./db/db";

import serviceRouter from "./app/services/router";

const app: Express = express();
dotenv.config();

app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true, limit: "500mb" }));
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
  })
);
app.use(cors());
morgan.token("date", () => {
  return new Date().toLocaleString();
});
app.use(morgan("[:date] :method :url :status - :response-time ms"));

app.use(
  "/api",
  createExpressMiddleware({
    router: appRouter,
    createContext,
    onError: (opts) => {
      console.log(opts.error);
    },
  })
);

app.use("/service", serviceRouter);

const PORT: number = parseInt(process.env.PORT as string) || 5001;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);

  db.execute(sql`SELECT 1 + 1 AS result`).then(() => {
    console.log("Connected to database");
  });
});

export type AppRouter = typeof appRouter;
