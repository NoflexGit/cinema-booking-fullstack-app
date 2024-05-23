import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HeroSlideResolver } from './heroSlide.resolver';
import { HeroSlideService } from './heroSlide.service';

@Module({
  providers: [PrismaService, HeroSlideService, HeroSlideResolver],
  exports: [HeroSlideService],
})
export class HeroSlideModule {}
