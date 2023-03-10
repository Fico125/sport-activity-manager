import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class ReviewType {
  @Field(() => ID)
  id: string;

  @Field(() => Int)
  readonly rating: number;

  @Field()
  readonly comment: string;
}
