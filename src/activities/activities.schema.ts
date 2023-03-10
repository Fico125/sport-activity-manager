import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ActivityNameScalar } from './scalars/activity-name.scalar';
import { AgeLevelScalar } from './scalars/age-level.scalar';

@Schema()
export class Activity {
  @Prop({ type: ActivityNameScalar })
  name: string;

  @Prop()
  weekSchedule: string;

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
