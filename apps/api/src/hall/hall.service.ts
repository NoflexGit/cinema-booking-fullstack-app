import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HallService {
  constructor(private prisma: PrismaService) {}

  async getHalls() {
    return this.prisma.hall.findMany();
  }

  async getHallById(id: number) {
    return this.prisma.hall.findUnique({
      where: { id },
    });
  }

  async getHallsByCinemaId(cinemaId: number) {
    return this.prisma.hall.findMany({
      where: { cinemaId },
    });
  }
}
