/*
  Warnings:

  - You are about to drop the column `picUrl` on the `Dish` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Dish` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Dish" DROP COLUMN "picUrl",
DROP COLUMN "price";
