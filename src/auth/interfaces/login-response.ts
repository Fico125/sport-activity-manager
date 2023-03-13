import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.schema';

@ObjectType()
export class LoginResponse {
  @Field(() => UserType)
  readonly user: User;

  @Field()
  readonly accessToken: string;
}
