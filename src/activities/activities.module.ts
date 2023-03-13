import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from 'src/roles-guard';
import { ActivitiesResolver } from './activities.resolver';
import { ActivitySchema } from './activities.schema';
import { ActivitesService } from './activities.service';
import { ActivityNameScalar } from './scalars/activity-name.scalar';
import { AgeLevelScalar } from './scalars/age-level.scalar';
import { WeekScheduleScalar } from './scalars/week-schedule.scalar';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Activity', schema: ActivitySchema }]),
  ],
  providers: [
    ActivitiesResolver,
    ActivitesService,
    AgeLevelScalar,
    ActivityNameScalar,
    WeekScheduleScalar,
    RolesGuard,
  ],
})
export class ActivitiesModule {}
