import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivitiesResolver } from './activities.resolver';
import { ActivitySchema } from './activities.schema';
import { ActivitesService } from './activities.service';
import { AgeLevelScalar } from './scalars/age-level.scalar';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Activity', schema: ActivitySchema }]),
  ],
  providers: [ActivitiesResolver, ActivitesService, AgeLevelScalar],
})
export class ActivitiesModule {}
