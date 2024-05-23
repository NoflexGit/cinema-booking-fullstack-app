import { HeroSlideService } from './heroSlide.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { HeroSlide } from './dto/models/heroSlide.model';

@Resolver(() => HeroSlide)
export class HeroSlideResolver {
  constructor(private readonly heroSlideService: HeroSlideService) {}

  @Query(() => [HeroSlide])
  async heroSlides() {
    return this.heroSlideService.getHeroSlides();
  }
}
