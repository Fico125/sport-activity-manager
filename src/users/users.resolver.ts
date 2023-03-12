import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { RegisterInput } from 'src/auth/entities/register.entity';
import { UserType } from './dto/create-user.dto';
import { UserInput } from './entities/user.entity';
import { User } from './users.schema';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Query(() => [UserType])
  async getUsers() {
    return this.usersService.findAll();
  }

  @Mutation(() => UserType)
  async createUser(@Args('input') input: UserInput) {
    return this.usersService.create(input);
  }

  @Mutation(() => UserType)
  async updateUser(
    @Args('id') id: string,
    @Args('updatedUser') updatedUser: UserInput,
  ) {
    return this.usersService.update(id, updatedUser);
  }

  @Mutation(() => UserType)
  async deleteUser(@Args('id') id: string) {
    return this.usersService.delete(id);
  }

  @Mutation(() => UserType)
  async register(@Args('input') input: RegisterInput): Promise<User> {
    return this.authService.register(input);
  }

  @Mutation(() => UserType)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.authService.login(email, password);
  }
}
