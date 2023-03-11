import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Review {
  @Prop({ type: String, required: true })
  activityId: string;

  @Prop({ type: [Number], required: true })
  ratings: number[];

  @Prop({ type: [String], required: true })
  comments: string[];
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
