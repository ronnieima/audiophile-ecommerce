ALTER TABLE "user" RENAME COLUMN "name" TO "username";--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "username" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "hashedPassword" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "email";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "emailVerified";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "image";