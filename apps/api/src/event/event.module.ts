
import { Module } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { EventResolver } from './event.resolver';
import { EventService } from './event.service';

@Module({
  providers: [PrismaService, EventService, EventResolver],
  exports: [EventService],
})
export class EventModule {}
