import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class ReviewType {
  @Field(() => ID)
  readonly activityId: string;

  @Field(() => [Int])
  readonly ratings: number[];

  @Field(() => [String])
  readonly comments: string[];
}
