import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { EventModule } from './event/event.module';
import { MovieModule } from './movie/movie.module';
import { CinemaModule } from './cinema/cinema.module';
import { HallModule } from './hall/hall.module';
import { HeroSlideModule } from './heroSlide/heroSlide.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './schema.gql',
    }),
    EventModule,
    MovieModule,
    CinemaModule,
    HallModule,
    HeroSlideModule,
  ],
  providers: [],
})
export class AppModule {}
