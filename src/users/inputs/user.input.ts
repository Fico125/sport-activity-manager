import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly name: string;

  @Field()
  readonly surname: string;

  @Field()
  readonly email: string;

  @Field(() => [String])
  readonly enrolledClasses: string[];

  @Field()
  readonly role: string;
}
