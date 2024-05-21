import { Field, ObjectType } from '@nestjs/graphql';
import { Hall } from '../../../hall/dto/models/hall.model';

@ObjectType()
export class Cinema {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  longitude: number;

  @Field({ nullable: true })
  latitude: number;

  @Field({ nullable: true })
  media: string;

  @Field((type) => [Hall])
  halls: Hall[];
}
