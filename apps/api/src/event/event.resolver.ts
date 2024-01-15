import { EventService } from './event.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Event } from './dto/models/event.model';

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query(() => [Event])
  async events() {
    return this.eventService.getAll();
  }

  @Query(() => [Event])
  async eventsByTag(@Args('tag') tag: string) {
    return this.eventService.getEventsByTag(tag);
  }
}
