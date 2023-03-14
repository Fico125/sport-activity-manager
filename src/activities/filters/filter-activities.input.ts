import { Field, InputType, Int } from '@nestjs/graphql';
import { AgeLevelScalar } from '../scalars/age-level.scalar';
import {
  WeekSchedule,
  WeekScheduleScalar,
} from '../scalars/week-schedule.scalar';

@InputType()
export class FilterActivitiesInput {
  @Field({ nullable: true, description: 'Name of the activity.' })
  name?: string;

  @Field(() => WeekScheduleScalar, {
    nullable: true,
    description:
      'Week schedule for the activity. Needs to be formatted like: { day: "Monday", startTime:"13:00"}. Valid days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. StartTime accepts range 00:00-23:59',
  })
  weekSchedule?: WeekSchedule;

  @Field(() => AgeLevelScalar, {
    nullable: true,
    description:
      'Age level for the class. Valid inputs: children, youth, young adults, adults.',
  })
  ageLevel?: string;

  @Field(() => Int, { nullable: true })
  duration?: number;
}
