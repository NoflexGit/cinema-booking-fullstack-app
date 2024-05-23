import { Field, ObjectType } from '@nestjs/graphql';
import { Movie } from '../../../movie/dto/models/movie.model';

@ObjectType()
export class HeroSlide {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  subtitle: string;

  @Field()
  media: string;

  @Field(() => Movie)
  movie: Movie;

  @Field()
  createdAt: Date;
}
