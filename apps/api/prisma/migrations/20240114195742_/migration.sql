/*
  Warnings:

  - You are about to drop the `_CategoryToMovie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToMovie" DROP CONSTRAINT "_CategoryToMovie_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToMovie" DROP CONSTRAINT "_CategoryToMovie_B_fkey";

-- DropTable
DROP TABLE "_CategoryToMovie";

-- CreateTable
CREATE TABLE "CategoriesOnMovies" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "CategoriesOnMovies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoriesOnMovies" ADD CONSTRAINT "CategoriesOnMovies_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnMovies" ADD CONSTRAINT "CategoriesOnMovies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
