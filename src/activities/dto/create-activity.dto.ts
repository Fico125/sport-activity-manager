import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ActivityNameScalar } from '../scalars/activity-name.scalar';
import { AgeLevelScalar } from '../scalars/age-level.scalar';
import {
  WeekSchedule,
  WeekScheduleScalar,
} from '../scalars/week-schedule.scalar';

@ObjectType()
export class ActivityType {
  @Field(() => ID)
  id: string;

  @Field(() => ActivityNameScalar)
  @Type(() => String)
  readonly name: string;

  @Field(() => WeekScheduleScalar)
  readonly weekSchedule: WeekSchedule;

  @Field(() => AgeLevelScalar)
  @Type(() => String)
  readonly ageLevel: string;

  @Field(() => Int)
  readonly duration: number;

  @Field()
  readonly description: string;

  @Field(() => [String])
  readonly enrolledUsers: string[];
}
