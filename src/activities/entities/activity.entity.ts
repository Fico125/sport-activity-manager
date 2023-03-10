import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ArrayMaxSize } from 'class-validator';
import { ActivityNameScalar } from '../scalars/activity-name.scalar';
import { AgeLevelScalar } from '../scalars/age-level.scalar';
import { WeekScheduleScalar } from '../scalars/week-schedule.scalar';

@InputType()
export class ActivityInput {
  @Field(() => ActivityNameScalar)
  @Type(() => String)
  readonly name: string;

  @Field(() => WeekScheduleScalar)
  readonly weekSchedule: { day: string; startTime: string };

  @Field(() => AgeLevelScalar)
  @Type(() => String)
  readonly ageLevel: string;

  @Field(() => Int)
  readonly duration: number;

  @Field()
  readonly description: string;

  @Field(() => [String])
  @ArrayMaxSize(10)
  readonly enrolledUsers: string[];
}
