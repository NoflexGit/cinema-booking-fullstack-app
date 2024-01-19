import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Hall {
  @Field()
  id: string;

  @Field()
  name: string;
}
