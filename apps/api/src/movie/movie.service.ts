import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}

  async getMovies() {
    return this.prisma.movie.findMany();
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
