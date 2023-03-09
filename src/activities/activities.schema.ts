import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Activity {
  @Prop()
  name: string;

  @Prop()
  weekSchedule: string;

  @Prop()
  ageLevel: string;

  @Prop()
  duration: number;

  @Prop()
  description: string;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
