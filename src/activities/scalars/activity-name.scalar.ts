import { Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

const VALID_ACTIVITY_NAMES = [
  'baseball',
  'basketball',
  'football',
  'boxing',
  'cycling',
  'fitness',
  'golf',
  'running',
  'swimming',
  'tennis',
  'triathlon',
  'volleyball',
];

@Scalar('ActivityName')
export class ActivityNameScalar {
  description = 'Activity name custom scalar type';

  parseValue(value: string): string {
    return this.validate(value);
  }

  serialize(value: string): string {
    return value;
  }

  parseLiteral(ast: ValueNode): string {
    if (ast.kind !== Kind.STRING) {
      throw new Error('Invalid input for ActivityName scalar');
    }

    return this.validate(ast.value);
  }

  private validate(value: string): string {
    if (!VALID_ACTIVITY_NAMES.includes(value)) {
      throw new Error(`Invalid activity name: ${value}`);
    }

    return value;
  }
}
