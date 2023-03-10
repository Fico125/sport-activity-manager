import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { AgeLevelScalar } from '../scalars/age-level.scalar';

@ObjectType()
export class ActivityType {
  @Field(() => ID)
  id: string;

  @Field()
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
  readonly enrolledUsers: string[];
}
