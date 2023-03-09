import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Activity } from './activities.schema';
import { ActivityInput } from './inputs/activity.input';

@Injectable()
export class ActivitesService {
  constructor(
    @InjectModel('Activity') private activityModel: Model<Activity>,
  ) {}

  async create(createActivityDto: ActivityInput): Promise<Activity> {
    const createdCat = new this.activityModel(createActivityDto);
    return createdCat.save();
  }

  async findAll(): Promise<Activity[]> {
    return this.activityModel.find().exec();
  }

  async delete(id: string): Promise<Activity> {
    return this.activityModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, updatedActivity: ActivityInput): Promise<Activity> {
    return this.activityModel
      .findOneAndUpdate(
        { _id: id },
        {
          $set: {
            name: updatedActivity.name,
            weekSchedule: updatedActivity.weekSchedule,
            ageLevel: updatedActivity.ageLevel,
            duration: updatedActivity.duration,
            description: updatedActivity.description,
            enrolledUsers: updatedActivity.enrolledUsers,
          },
        },
        { new: true },
      )
      .exec();
  }
}
