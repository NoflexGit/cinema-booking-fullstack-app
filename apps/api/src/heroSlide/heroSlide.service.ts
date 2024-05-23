import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HeroSlideService {
  constructor(private prisma: PrismaService) {}

  async getHeroSlides() {
    return this.prisma.heroSlide.findMany({ include: { movie: true } });
  }
}
