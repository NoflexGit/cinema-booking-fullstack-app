import { MovieService } from './movie.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Movie } from './dto/models/movie.model';

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}
  @Query(() => [Movie])
  async moviesByTag(@Args('tag') tag: string) {
    return this.movieService.getMoviesByTag(tag);
  }
}
