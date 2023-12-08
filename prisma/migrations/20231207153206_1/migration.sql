/*
  Warnings:

  - You are about to drop the column `metodId` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the `metod` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `metodeId` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `payments` DROP FOREIGN KEY `payments_metodId_fkey`;

-- AlterTable
ALTER TABLE `payments` DROP COLUMN `metodId`,
    ADD COLUMN `metodeId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `metod`;

-- CreateTable
CREATE TABLE `Metode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_metodeId_fkey` FOREIGN KEY (`metodeId`) REFERENCES `Metode`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
