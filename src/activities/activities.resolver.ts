import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ActivitesService } from './activities.service';
import { ActivityType } from './dto/activity.dto';
import { FilterActivitiesInput } from './filters/filter-activities.input';
import { ActivityInput } from './entities/activity.entity';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/roles-guard';
import { Roles } from 'src/roles';

@Resolver()
export class ActivitiesResolver {
  constructor(private readonly activitiesService: ActivitesService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [ActivityType])
  @UseGuards(RolesGuard)
  @Roles('user', 'admin')
  async getActivities() {
    return this.activitiesService.findAll();
  }

  @Mutation(() => [ActivityType])
  @UseGuards(RolesGuard)
  @Roles('user', 'admin')
  async getFilteredActivities(@Args('filter') filter: FilterActivitiesInput) {
    return this.activitiesService.filterActivities(filter);
  }

  @Mutation(() => ActivityType)
  @UseGuards(RolesGuard)
  @Roles('admin')
  async createActivity(@Args('input') input: ActivityInput) {
    return this.activitiesService.create(input);
  }

  @Mutation(() => ActivityType)
  @UseGuards(RolesGuard)
  @Roles('admin')
  async updateActivity(
    @Args('id') id: string,
    @Args('updatedActivity') updatedActivity: ActivityInput,
  ) {
    return this.activitiesService.update(id, updatedActivity);
  }

  @Mutation(() => ActivityType)
  @UseGuards(RolesGuard)
  @Roles('admin')
  async deleteActivity(@Args('id') id: string) {
    return this.activitiesService.delete(id);
  }
}
