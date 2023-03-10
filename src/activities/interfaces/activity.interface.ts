import { Document } from 'mongoose';
import { WeekSchedule } from '../scalars/week-schedule.scalar';

export interface Activity extends Document {
  readonly name: string;
  readonly weekSchedule: WeekSchedule;
  readonly ageLevel: string;
  readonly duration: number;
  readonly description: string;
  readonly enrolledUsers: string[];
}
