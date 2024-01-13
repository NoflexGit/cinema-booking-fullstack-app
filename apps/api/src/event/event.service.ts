import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";


@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}
  
  async getAll() {
    return this.prisma.event.findMany();
  }
}
