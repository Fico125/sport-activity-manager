import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly surname: string;
  readonly email: string;
  readonly enrolledClasses: string[];
  readonly role: string;
}
