import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ActivityType {
  @Field(() => ID)
  id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly weekSchedule: string;

  @Field()
  readonly ageLevel: string;

  @Field(() => Int)
  readonly duration: number;

  @Field()
  readonly description: string;

  @Field(() => [String])
  readonly enrolledUsers: string[];
}
