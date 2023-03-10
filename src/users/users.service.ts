import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInput } from './entities/user.entity';
import { User } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUserDto: UserInput): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

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
