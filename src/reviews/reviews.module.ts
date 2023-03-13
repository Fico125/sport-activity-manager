import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsResolver } from './reviews.resolver';
import { ReviewSchema } from './reviews.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from 'src/roles-guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Review', schema: ReviewSchema }]),
  ],
  providers: [ReviewsResolver, ReviewsService, RolesGuard],
})
export class ReviewsModule {}
