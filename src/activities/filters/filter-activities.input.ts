import { Field, InputType, Int } from '@nestjs/graphql';
import { AgeLevelScalar } from '../scalars/age-level.scalar';
import {
  WeekSchedule,
  WeekScheduleScalar,
} from '../scalars/week-schedule.scalar';

@InputType()
export class FilterActivitiesInput {
  @Field({ nullable: true })
  name?: string;

  @Field(() => WeekScheduleScalar, { nullable: true })
  weekSchedule?: WeekSchedule;

  @Field(() => AgeLevelScalar, { nullable: true })
  ageLevel?: string;

  @Field(() => Int, { nullable: true })
  duration?: number;
}
