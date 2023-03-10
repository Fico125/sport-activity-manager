import { Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

export interface WeekSchedule {
  day: string;
  startTime: string;
}

const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const TIME_REGEX = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

@Scalar('WeekSchedule')
export class WeekScheduleScalar {
  description = 'Week schedule scalar type';

  parseValue(value: WeekSchedule): WeekSchedule {
    this.validateWeekSchedule(value);
    return value;
  }

  serialize(value: WeekSchedule): WeekSchedule {
    this.validateWeekSchedule(value);
    return value;
  }

  parseLiteral(ast: ValueNode): WeekSchedule {
    if (ast.kind !== Kind.OBJECT) {
      throw new Error('Invalid week schedule value');
    }

    const day = (
      ast.fields.find((field) => field.name.value === 'day')?.value as any
    )?.value;
    const startTime = (
      ast.fields.find((field) => field.name.value === 'startTime')?.value as any
    )?.value;

    const weekSchedule = { day, startTime };
    this.validateWeekSchedule(weekSchedule);
    return weekSchedule;
  }

  private validateWeekSchedule(weekSchedule: WeekSchedule) {
    if (!DAYS_OF_WEEK.includes(weekSchedule.day)) {
      throw new Error(`Invalid day of week: ${weekSchedule.day}`);
    }

    if (!TIME_REGEX.test(weekSchedule.startTime)) {
      throw new Error(`Invalid start time: ${weekSchedule.startTime}`);
    }
  }
}
