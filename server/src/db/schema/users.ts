import {
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    email: varchar("email", { length: 255 }).notNull(),
    username: varchar("username", { length: 255 }).notNull(),
    password: varchar("password").notNull(),

    firstName: varchar("first_name"),
    lastName: varchar("last_name"),
    profilePicture: text("profile_picture"),

    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => ({
    emailIndex: uniqueIndex("user_email_index").on(table.email),
    usernameIndex: uniqueIndex("user_username_index").on(table.username),
  })
);