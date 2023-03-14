import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from '../users/users.schema';
import { RegisterInput } from './entities/register.entity';
import { LoginInput } from './entities/login.entity';
import { UserType } from 'src/users/dto/create-user.dto';
import { LoginResponse } from './interfaces/login-response';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => UserType, { description: 'Registers a new user.' })
  async register(
    @Args('input', { description: 'Input for registering a new user.' })
    input: RegisterInput,
  ): Promise<User> {
    return this.authService.register(input);
  }

  @Mutation(() => LoginResponse, { description: 'Logs in a registered user.' })
  async login(
    @Args('input', { description: 'Input for logging in a registered user.' })
    input: LoginInput,
  ): Promise<LoginResponse> {
    const { email, password } = input;
    const { user, accessToken } = await this.authService.login(email, password);
    console.log(accessToken);
    return { user, accessToken };
  }
}
