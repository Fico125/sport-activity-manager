import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field({ description: 'Email of the registered user wishing to log in.' })
  email: string;

  @Field({ description: 'Password of the registered user wishing to log in.' })
  password: string;
}
