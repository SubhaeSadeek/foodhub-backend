/*
  Warnings:

  - Added the required column `dietry_preference` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DietryPreference" AS ENUM ('VEGAN', 'VEGETARIAN', 'KETO', 'GLUTENFREE', 'DIARYFREE', 'HALAL', 'KOSHER');

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "dietry_preference" "DietryPreference" NOT NULL;
