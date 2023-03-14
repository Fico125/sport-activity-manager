import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';
import { ReviewType } from './dto/review.dto';
import { ReviewInput } from './input/review.input';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/roles';
import { RolesGuard } from 'src/roles-guard';

@Resolver()
export class ReviewsResolver {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Mutation(() => ReviewType, { description: 'Create a new review.' })
  @UseGuards(RolesGuard)
  @Roles('user', 'admin')
  createReview(
    @Args('createReviewInput', {
      description: 'Input for creating a new review.',
    })
    createReviewInput: ReviewInput,
  ) {
    return this.reviewsService.create(createReviewInput);
  }

  @Query(() => [ReviewType], { description: 'Get all reviews.' })
  @UseGuards(RolesGuard)
  @Roles('admin')
  getReviews() {
    return this.reviewsService.findAll();
  }

  @Query(() => Number, {
    description: 'Get the average rating for the activity ID.',
  })
  @UseGuards(RolesGuard)
  @Roles('admin')
  async getAverageRatingForActivityId(
    @Args('activityId', {
      description: 'ID of the activity for which the average rating is wanted.',
    })
    activityId: string,
  ) {
    return this.reviewsService.getAverageRatingForActivityID(activityId);
  }
}
