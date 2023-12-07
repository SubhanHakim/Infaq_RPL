/*
  Warnings:

  - Added the required column `bukti` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payments` ADD COLUMN `bukti` VARCHAR(191) NOT NULL;
