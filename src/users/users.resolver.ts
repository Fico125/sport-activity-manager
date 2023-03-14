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

  @Query(() => [UserType], { description: 'Get all users.' })
  @UseGuards(RolesGuard)
  @Roles('admin')
  async getUsers() {
    return this.usersService.findAll();
  }

  @Mutation(() => UserType, { description: 'Update a user by ID.' })
  @UseGuards(RolesGuard)
  @Roles('user', 'admin')
  async updateUser(
    @Args('id', { description: 'The ID of the user to update' }) id: string,
    @Args('updatedUser', { description: 'The updated user data' })
    updatedUser: UserInput,
  ) {
    return this.usersService.update(id, updatedUser);
  }

  @Mutation(() => UserType, { description: 'Delete a user by ID.' })
  @UseGuards(RolesGuard)
  @Roles('user', 'admin')
  async deleteUser(
    @Args('id', { description: 'The ID of the user to delete' }) id: string,
  ) {
    return this.usersService.delete(id);
  }
}
