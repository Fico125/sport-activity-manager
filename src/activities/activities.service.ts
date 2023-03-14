import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Activity } from './activities.schema';
import { ActivityInput } from './input/activity.input';
import { FilterActivitiesInput } from './filters/filter-activities.input';

@Injectable()
export class ActivitesService {
  constructor(
    @InjectModel('Activity') private activityModel: Model<Activity>,
  ) {}

  async create(createActivityDto: ActivityInput): Promise<Activity> {
    const createdAct = new this.activityModel(createActivityDto);
    return createdAct.save();
  }

  async findAll(): Promise<Activity[]> {
    return this.activityModel.find().exec();
  }

  async filterActivities(filter: FilterActivitiesInput): Promise<Activity[]> {
    const query = {};

    if (filter.name) {
      query['name'] = filter.name;
    }

    if (filter.weekSchedule) {
      query['weekSchedule'] = filter.weekSchedule;
    }

    if (filter.ageLevel) {
      query['ageLevel'] = filter.ageLevel;
    }

    if (filter.duration) {
      query['duration'] = filter.duration;
    }

    return this.activityModel.find(query).exec();
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
