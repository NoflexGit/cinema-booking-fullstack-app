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

  @Field()
  longitude: number;

  @Field()
  latitude: number;

  @Field((type) => [Hall])
  halls: Hall[];
}
