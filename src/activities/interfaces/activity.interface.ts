import { Document } from 'mongoose';

export interface Activity extends Document {
  readonly name: string;
  readonly weekSchedule: string;
  readonly ageLevel: string;
  readonly duration: number;
  readonly description: string;
}
