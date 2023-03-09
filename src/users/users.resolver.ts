import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserType } from './dto/create-user.dto';
import { UserInput } from './inputs/user.input';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

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
}
