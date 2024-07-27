ALTER TABLE "verification_codes" ALTER COLUMN "expires_at" SET DEFAULT '2024-07-27 05:46:30.519';--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "user_type";