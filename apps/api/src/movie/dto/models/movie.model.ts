import { Field, ObjectType } from '@nestjs/graphql';
import { Category } from '../../../category/dto/models/category.model';

@ObjectType()
export class Movie {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  media: string;

  @Field(() => [Category])
  categories: Category[];
}
