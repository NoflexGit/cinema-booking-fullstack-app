import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MovieResolver } from './movie.resolver';
import { MovieService } from './movie.service';

@Module({
  providers: [PrismaService, MovieService, MovieResolver],
  exports: [MovieService],
})
export class MovieModule {}
