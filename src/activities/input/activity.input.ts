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

  @Field(() => WeekScheduleScalar, {
    description:
      'Week schedule for the activity. Needs to be formatted like: { day: "Monday", startTime:"13:00"}. Valid days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. StartTime accepts range 00:00-23:59',
  })
  readonly weekSchedule: { day: string; startTime: string };

  @Field(() => AgeLevelScalar, {
    description:
      'Age level for the class. Valid inputs: children, youth, young adults, adults.',
  })
  @Type(() => String)
  readonly ageLevel: string;

  @Field(() => Int)
  readonly duration: number;

  @Field()
  readonly description: string;

  @Field(() => [String], {
    description:
      'A list of enrolled users. Activity can enroll a maximum of 10 users.',
  })
  @ArrayMaxSize(10)
  readonly enrolledUsers: string[];
}
