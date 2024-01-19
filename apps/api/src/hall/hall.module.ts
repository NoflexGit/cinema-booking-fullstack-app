import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HallResolver } from './hall.resolver';
import { HallService } from './hall.service';

@Module({
  providers: [PrismaService, HallService, HallResolver],
  exports: [HallService],
})
export class HallModule {}
