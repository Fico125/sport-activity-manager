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

  @Query(() => [ActivityType], {
    description: 'Returns a list of all activities.',
  })
  @UseGuards(RolesGuard)
  @Roles('user', 'admin')
  async getActivities() {
    return this.activitiesService.findAll();
  }

  @Mutation(() => [ActivityType], {
    description: 'Returns a list of activities that match the filter criteria.',
  })
  @UseGuards(RolesGuard)
  @Roles('user', 'admin')
  async getFilteredActivities(@Args('filter') filter: FilterActivitiesInput) {
    return this.activitiesService.filterActivities(filter);
  }

  @Mutation(() => ActivityType, { description: 'Creates a new activity.' })
  @UseGuards(RolesGuard)
  @Roles('admin')
  async createActivity(
    @Args('input', { description: 'Input for creating a new activity.' })
    input: ActivityInput,
  ) {
    return this.activitiesService.create(input);
  }

  @Mutation(() => ActivityType, {
    description: 'Updates an existing activity by ID.',
  })
  @UseGuards(RolesGuard)
  @Roles('admin')
  async updateActivity(
    @Args('id', { description: 'Activity ID' }) id: string,
    @Args('updatedActivity', { description: 'Updated activity data.' })
    updatedActivity: ActivityInput,
  ) {
    return this.activitiesService.update(id, updatedActivity);
  }

  @Mutation(() => ActivityType, { description: 'Deletes an activity by ID.' })
  @UseGuards(RolesGuard)
  @Roles('admin')
  async deleteActivity(@Args('id', { description: 'Activity ID' }) id: string) {
    return this.activitiesService.delete(id);
  }
}
