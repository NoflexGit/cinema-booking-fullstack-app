import { CinemaService } from './cinema.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Cinema } from './dto/models/cinema.model';

@Resolver(() => Cinema)
export class CinemaResolver {
  constructor(private readonly cinemaService: CinemaService) {}

  @Query(() => [Cinema])
  async cinemas() {
    return this.cinemaService.getCinemas();
  }

  @Query(() => Cinema)
  async cinema(@Args('id') id: number) {
    return this.cinemaService.getCinemaById(id);
  }
}
