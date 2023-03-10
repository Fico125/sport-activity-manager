import { Field, InputType, Int } from '@nestjs/graphql';
import { ArrayMaxSize } from 'class-validator';

@InputType()
export class ActivityInput {
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
  @ArrayMaxSize(10)
  readonly enrolledUsers: string[];
}
