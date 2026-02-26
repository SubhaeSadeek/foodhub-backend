/*
  Warnings:

  - You are about to drop the column `dietry_preference` on the `categories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "dietry_preference";

-- AlterTable
ALTER TABLE "meals" ADD COLUMN     "dietry_preference" "DietryPreference";
