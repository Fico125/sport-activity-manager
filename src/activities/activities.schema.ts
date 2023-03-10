import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ActivityNameScalar } from './scalars/activity-name.scalar';
import { AgeLevelScalar } from './scalars/age-level.scalar';
import { WeekScheduleScalar } from './scalars/week-schedule.scalar';

@Schema()
export class Activity {
  @Prop({ type: ActivityNameScalar })
  name: string;

  @Prop({ type: WeekScheduleScalar })
  weekSchedule: { day: string; startTime: string };

  @Prop({ type: AgeLevelScalar })
  ageLevel: string;

  @Prop()
  duration: number;

  @Prop()
  description: string;

  @Prop()
  readonly enrolledUsers: string[];
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
