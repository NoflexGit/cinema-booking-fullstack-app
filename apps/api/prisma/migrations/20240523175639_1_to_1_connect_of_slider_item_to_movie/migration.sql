/*
  Warnings:

  - A unique constraint covering the columns `[movieId]` on the table `HeroSlide` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movieId` to the `HeroSlide` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "HeroSlide" ADD COLUMN     "movieId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "HeroSlide_movieId_key" ON "HeroSlide"("movieId");

-- AddForeignKey
ALTER TABLE "HeroSlide" ADD CONSTRAINT "HeroSlide_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
