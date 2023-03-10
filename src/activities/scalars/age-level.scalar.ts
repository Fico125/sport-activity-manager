import { Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

const VALID_AGES = ['children', 'youth', 'young adults', 'adults'];

@Scalar('AgeLevel')
export class AgeLevelScalar {
  description = 'Age level scalar type';

  parseValue(value: string): string {
    if (!VALID_AGES.includes(value)) {
      throw new Error(`Invalid age level: ${value}`);
    }
    return value;
  }

  serialize(value: string): string {
    return value;
  }

  parseLiteral(ast: ValueNode): string {
    if (ast.kind !== Kind.STRING) {
      throw new Error('Invalid age level value');
    }
    const value = ast.value;
    if (!VALID_AGES.includes(value)) {
      throw new Error(`Invalid age level: ${value}`);
    }
    return value;
  }
}
