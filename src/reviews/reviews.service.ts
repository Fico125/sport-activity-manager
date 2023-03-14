import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReviewInput } from './input/review.input';
import { Review } from './reviews.schema';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel('Review') private reviewModel: Model<Review>) {}

  async create(createReviewInput: ReviewInput) {
    const { activityId, rating, comment } = createReviewInput;
    let review = await this.reviewModel.findOne({ activityId }).exec();
    if (!review) {
      review = new this.reviewModel({
        activityId,
        ratings: [],
        comments: [],
      });
    }
    review.ratings.push(rating);
    review.comments.push(comment);
    return review.save();
  }

  async findAll(): Promise<Review[]> {
    return this.reviewModel.find().exec();
  }

  async getAverageRatingForActivityID(activityId: string): Promise<number> {
    const review = await this.reviewModel.findOne({ activityId }).exec();
    if (!review) {
      return 0;
    }
    const totalRating = review.ratings.reduce((sum, rating) => sum + rating, 0);
    const averageRating =
      review.ratings.length > 0 ? totalRating / review.ratings.length : 0;
    return averageRating;
  }
}
