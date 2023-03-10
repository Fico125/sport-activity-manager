import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ArrayMaxSize } from 'class-validator';
import { ActivityNameScalar } from '../scalars/activity-name.scalar';
import { AgeLevelScalar } from '../scalars/age-level.scalar';

@InputType()
export class ActivityInput {
  @Field(() => ActivityNameScalar)
  @Type(() => String)
  readonly name: string;

  @Field()
  readonly weekSchedule: string;

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
