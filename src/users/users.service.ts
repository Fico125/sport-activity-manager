import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInput } from './input/user.input';
import { User } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async update(id: string, updatedUser: UserInput): Promise<User> {
    return this.userModel
      .findOneAndUpdate(
        { _id: id },
        {
          $set: {
            name: updatedUser.name,
            surname: updatedUser.surname,
            email: updatedUser.email,
            enrolledClasses: updatedUser.enrolledClasses,
            role: updatedUser.role,
          },
        },
        { new: true },
      )
      .exec();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
