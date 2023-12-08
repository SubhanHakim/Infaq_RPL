/*
  Warnings:

  - Added the required column `norek` to the `Metode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `metode` ADD COLUMN `norek` INTEGER NOT NULL;
