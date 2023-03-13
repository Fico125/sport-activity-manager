import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';
import { ReviewType } from './dto/review.dto';
import { ReviewInput } from './entities/review.entity';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/roles';
import { RolesGuard } from 'src/roles-guard';

@Resolver()
export class ReviewsResolver {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Mutation(() => ReviewType)
  @UseGuards(RolesGuard)
  @Roles('user', 'admin')
  createReview(@Args('createReviewInput') createReviewInput: ReviewInput) {
    return this.reviewsService.create(createReviewInput);
  }

  @Query(() => [ReviewType])
  @UseGuards(RolesGuard)
  @Roles('admin')
  getReviews() {
    return this.reviewsService.findAll();
  }

  @Query(() => Number)
  @UseGuards(RolesGuard)
  @Roles('admin')
  async getAverageRatingForActivityId(@Args('activityId') activityId: string) {
    return this.reviewsService.getAverageRatingForActivityID(activityId);
  }
}
