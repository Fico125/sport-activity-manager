import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ActivitesService } from './activities.service';
import { ActivityType } from './dto/create-activity.dto';
import { FilterActivitiesInput } from './filters/filter-activities.input';
import { ActivityInput } from './inputs/activity.input';
import { WeekSchedule } from './scalars/week-schedule.scalar';

@Resolver()
export class ActivitiesResolver {
  constructor(private readonly activitiesService: ActivitesService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [ActivityType])
  async getActivities() {
    return this.activitiesService.findAll();
  }

  @Mutation(() => [ActivityType])
  async getFilteredActivities(@Args('filter') filter: FilterActivitiesInput) {
    return this.activitiesService.filterActivities(filter);
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
