/*
  Warnings:

  - You are about to drop the column `eventId` on the `Cinema` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cinema" DROP CONSTRAINT "Cinema_eventId_fkey";

-- AlterTable
ALTER TABLE "Cinema" DROP COLUMN "eventId";
