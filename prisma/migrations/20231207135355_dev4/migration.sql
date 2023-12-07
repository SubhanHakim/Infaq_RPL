/*
  Warnings:

  - Added the required column `metodId` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payments` ADD COLUMN `metodId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Metod` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_metodId_fkey` FOREIGN KEY (`metodId`) REFERENCES `Metod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
