import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivitiesResolver } from './activities.resolver';
import { ActivitySchema } from './activities.schema';
import { ActivitesService } from './activities.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Activity', schema: ActivitySchema }]),
  ],
  providers: [ActivitiesResolver, ActivitesService],
})
export class ActivitiesModule {}
