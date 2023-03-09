import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  email: string;

  @Prop()
  enrolledClasses: string[];

  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
