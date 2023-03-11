import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;

  @Field()
  readonly name: string;

  @Field()
  readonly surname: string;

  @Field()
  readonly email: string;

  @Field()
  readonly password: string;

  @Field(() => [String])
  readonly enrolledClasses: string[];

  @Field()
  readonly role: string;
}
