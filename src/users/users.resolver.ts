import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { Roles } from 'src/roles';
import { RolesGuard } from 'src/roles-guard';
import { UserType } from './dto/create-user.dto';
import { UserInput } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Query(() => [UserType])
  @UseGuards(RolesGuard)
  @Roles('admin')
  async getUsers() {
    return this.usersService.findAll();
  }

  @Mutation(() => UserType)
  @UseGuards(RolesGuard)
  @Roles('user', 'admin')
  async updateUser(
    @Args('id') id: string,
    @Args('updatedUser') updatedUser: UserInput,
  ) {
    return this.usersService.update(id, updatedUser);
  }

  @Mutation(() => UserType)
  @UseGuards(RolesGuard)
  @Roles('user', 'admin')
  async deleteUser(@Args('id') id: string) {
    return this.usersService.delete(id);
  }
}
