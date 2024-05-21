import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}

  async getMovies() {
    const movies = await this.prisma.movie.findMany({
      include: {
        categories: {
          include: {
            category: true,
          },
        },
      },
    });

    return movies.map((movie) => {
      return {
        ...movie,
        categories: movie.categories.map((categoryRelation) => ({
          id: categoryRelation.category.id,
          name: categoryRelation.category.name,
        })),
      };
    });
  }

  async getMoviesByTag(tag: string) {
    return this.prisma.movie.findMany({
      where: {
        tags: {
          some: {
            tag: {
              name: tag,
            },
          },
        },
      },
    });
  }
}
