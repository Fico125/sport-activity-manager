import { Field, InputType } from '@nestjs/graphql';
import { ArrayMaxSize } from 'class-validator';

@InputType()
export class UserInput {
  @Field()
  readonly name: string;

  @Field()
  readonly surname: string;

  @Field()
  readonly email: string;

  @Field(() => [String])
  @ArrayMaxSize(2)
  readonly enrolledClasses: string[];

  @Field()
  readonly role: string;
}
