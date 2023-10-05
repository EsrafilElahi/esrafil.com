/*
  Warnings:

  - Added the required column `image` to the `Technology` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Technology" ADD COLUMN     "image" TEXT NOT NULL;
