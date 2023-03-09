import { Field, InputType, Int } from '@nestjs/graphql';

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
}
