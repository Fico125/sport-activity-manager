import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ReviewInput } from './entities/review.entity';
import { Review } from './reviews.schema';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel('Review') private reviewModel: Model<Review>) {}

  create(createReviewInput: ReviewInput) {
    const createdReview = new this.reviewModel(createReviewInput);
    return createdReview.save();
  }

  async findAll(): Promise<Review[]> {
    return this.reviewModel.find().exec();
  }
}
