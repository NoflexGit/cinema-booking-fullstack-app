import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CinemaResolver } from './cinema.resolver';
import { CinemaService } from './cinema.service';

@Module({
  providers: [PrismaService, CinemaService, CinemaResolver],
  exports: [CinemaService],
})
export class CinemaModule {}
