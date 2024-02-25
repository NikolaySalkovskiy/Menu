/*
  Warnings:

  - Added the required column `picUrl` to the `Dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Dish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dish" ADD COLUMN     "picUrl" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
