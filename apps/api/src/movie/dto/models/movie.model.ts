import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field()
  id: string;

  @Field()
  name: string;
}
