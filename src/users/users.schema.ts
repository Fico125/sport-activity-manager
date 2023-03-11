import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  enrolledClasses: string[];

  @Prop({ type: String, enum: UserRole, default: UserRole.USER })
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
