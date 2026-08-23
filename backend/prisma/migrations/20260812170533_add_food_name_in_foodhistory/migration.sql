/*
  Warnings:

  - Added the required column `foodname` to the `FoodHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FoodHistory" ADD COLUMN     "foodname" TEXT NOT NULL;
