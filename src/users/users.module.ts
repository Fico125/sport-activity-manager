import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserSchema } from './users.schema';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { jwtConstants } from 'src/auth/constants';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    AuthModule,
  ],
  providers: [UsersResolver, UsersService],
  exports: [UsersService, MongooseModule],
})
export class UsersModule {}
