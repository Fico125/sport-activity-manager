import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/users.schema';
import { RegisterInput } from './input/register.input';
import { EmailService } from 'src/email/email.service';
import { LoginResponse } from './interfaces/login-response';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException();
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async validateUserById(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async register(registerInput: RegisterInput): Promise<User> {
    const user = new this.userModel(registerInput);
    user.password = await bcrypt.hash(user.password, 10);
    const savedUser = await user.save();

    await this.emailService.sendVerificationEmail(user);

    return savedUser;
  }

  async login(email: string, password: string): Promise<LoginResponse> {
    const user = await this.validateUser(email, password);
    const payload = { sub: user.id, email: user.email, role: user.role };
    const accessToken = await this.jwtService.signAsync(payload);
    return { user, accessToken };
  }
}
