/*
  Warnings:

  - You are about to drop the column `movieId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_movieId_fkey";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "movieId";

-- CreateTable
CREATE TABLE "TagsOnMovies" (
    "id" SERIAL NOT NULL,
    "tagId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "TagsOnMovies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TagsOnMovies" ADD CONSTRAINT "TagsOnMovies_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnMovies" ADD CONSTRAINT "TagsOnMovies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
