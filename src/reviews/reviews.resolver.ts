import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';
import { ReviewType } from './dto/review.dto';
import { ReviewInput } from './entities/review.entity';

@Resolver()
export class ReviewsResolver {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Mutation(() => ReviewType)
  createReview(@Args('createReviewInput') createReviewInput: ReviewInput) {
    return this.reviewsService.create(createReviewInput);
  }

  @Query(() => [ReviewType])
  getReviews() {
    return this.reviewsService.findAll();
  }

  @Query(() => Number)
  async getAverageRatingForActivityId(@Args('activityId') activityId: string) {
    return this.reviewsService.getAverageRatingForActivityID(activityId);
  }
}
