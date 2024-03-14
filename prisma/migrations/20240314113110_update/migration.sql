/*
  Warnings:

  - The primary key for the `AllowedEmail` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Timer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "AllowedEmail" DROP CONSTRAINT "AllowedEmail_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "AllowedEmail_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "AllowedEmail_id_seq";

-- AlterTable
ALTER TABLE "Timer" DROP CONSTRAINT "Timer_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Timer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Timer_id_seq";
