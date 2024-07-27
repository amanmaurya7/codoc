import { boolean, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
  id: text("id").primaryKey(),
  username: text("username").unique().notNull(),
  email: text("email").unique().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// auth table
export const emailUser = pgTable("email_users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").references(() => user.email),
  password: text("password").notNull(),
  isVerified: boolean("is_verified").default(false),
});

export const googleOauthUser = pgTable("google_oauth_users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").references(() => user.email),
  google_id: text("google_id").unique().default(""),
});

export const VerificationCode = pgTable("verification_codes", {
  id: uuid("id").primaryKey().defaultRandom(),
  verificationCode: text("verification_code").notNull(),
  userId: text("user_id").references(() => user.id),
  purpose: text("purpose").default("verify_account"),
  expiry: timestamp("expires_at").default(
    new Date(Date.now() + 1000 * 60 * 60)
  ),
});

export const session = pgTable("sessions", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
