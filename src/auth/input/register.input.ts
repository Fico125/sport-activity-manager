import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterInput {
  @Field()
  readonly name: string;

  @Field()
  readonly surname: string;

  @Field()
  readonly email: string;

  @Field()
  readonly password: string;

  @Field(() => [String], {
    description:
      'Enrolled classes. Choose maximum 2 from the list: baseball, basketball, football, boxing, cycling, fitness, golf, running, swimming, tennis, triathlon, volleyball.',
  })
  readonly enrolledClasses: string[];

  @Field({ description: 'Role of the registered user. Can be user or admin.' })
  readonly role: string;
}
