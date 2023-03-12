import { Document } from 'mongoose';

export interface User extends Document {
  readonly id: string;
  readonly name: string;
  readonly surname: string;
  readonly email: string;
  readonly password: string;
  readonly enrolledClasses: string[];
  readonly role: string;
}
