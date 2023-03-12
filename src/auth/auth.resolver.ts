import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from '../users/users.schema';
import { RegisterInput } from './entities/register.entity';
import { LoginInput } from './entities/login.entity';
import { UserType } from 'src/users/dto/create-user.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => UserType)
  async register(@Args('input') input: RegisterInput): Promise<User> {
    return this.authService.register(input);
  }

  @Mutation(() => UserType)
  async login(@Args('input') input: LoginInput): Promise<User> {
    const { user } = await this.authService.login(input.email, input.password);
    return user;
  }
}
