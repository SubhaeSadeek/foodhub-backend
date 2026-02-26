/*
  Warnings:

  - You are about to drop the column `name` on the `categories` table. All the data in the column will be lost.
  - Added the required column `category` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('BERGUR_FASTFOOD', 'PIZZA_ITALIAN', 'LOCAL_CLASSIC', 'TRADITIONAL', 'MUGHLAI', 'INDIAN', 'ASIAN_CHINESE', 'MIDDLE_EASTERN', 'MEDITERRANIAN', 'CONTINENTAL', 'THAI');

-- DropIndex
DROP INDEX "categories_name_key";

-- AlterTable
ALTER TABLE "categories" DROP COLUMN "name",
ADD COLUMN     "category" "Categories" NOT NULL;
