import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ActivitesService } from './activities.service';
import { ActivityType } from './dto/create-activity.dto';
import { ActivityInput } from './inputs/activity.input';

@Resolver()
export class ActivitiesResolver {
  constructor(private readonly activitiesService: ActivitesService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [ActivityType])
  async activities() {
    return this.activitiesService.findAll();
  }

  @Mutation(() => ActivityType)
  async createActivity(@Args('input') input: ActivityInput) {
    return this.activitiesService.create(input);
  }

  @Mutation(() => ActivityType)
  async updateActivity(
    @Args('id') id: string,
    @Args('updatedActivity') updatedActivity: ActivityInput,
  ) {
    return this.activitiesService.update(id, updatedActivity);
  }

  @Mutation(() => ActivityType)
  async deleteActivity(@Args('id') id: string) {
    return this.activitiesService.delete(id);
  }
}
