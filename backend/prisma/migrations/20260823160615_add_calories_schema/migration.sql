/*
  Warnings:

  - Added the required column `calories` to the `FoodHistory` table without a default value. This is not possible if the table is not empty.
  - Made the column `carb` on table `FoodHistory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `protein` on table `FoodHistory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fat` on table `FoodHistory` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "FoodHistory" ADD COLUMN     "calories" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "carb" SET NOT NULL,
ALTER COLUMN "protein" SET NOT NULL,
ALTER COLUMN "fat" SET NOT NULL,
ALTER COLUMN "foodname" DROP NOT NULL;
