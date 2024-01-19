import { HallService } from './hall.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Hall } from './dto/models/hall.model';

@Resolver(() => Hall)
export class HallResolver {
  constructor(private readonly hallService: HallService) {}

  @Query(() => [Hall])
  async halls() {
    return this.hallService.getHalls();
  }

  @Query(() => Hall)
  async hall(@Args('id') id: number) {
    return this.hallService.getHallById(id);
  }

  @Query(() => [Hall])
  async hallsByCinemaId(@Args('id') id: number) {
    return this.hallService.getHallsByCinemaId(id);
  }
}
