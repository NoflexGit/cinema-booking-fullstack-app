import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CinemaService {
  constructor(private prisma: PrismaService) {}

  async getCinemas() {
    return this.prisma.cinema.findMany({
      include: {
        halls: true,
      },
    });
  }

  async getCinemaById(id: number) {
    return this.prisma.cinema.findUnique({
      where: { id },
      include: {
        halls: true,
      },
    });
  }
}
