import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class ReviewInput {
  @Field(() => ID)
  id: string;

  @Field(() => Int)
  @Min(1)
  @Max(5)
  readonly rating: number;

  @Field()
  readonly comment: string;
}
