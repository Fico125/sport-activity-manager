import { SendGridService } from '@anchan828/nest-sendgrid';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/users.schema';

@Injectable()
export class EmailService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly sendGridService: SendGridService,
  ) {}

  async sendVerificationEmail(user: User) {
    const token = this.jwtService.sign({ sub: user.id });
    const verificationLink = `https://your-frontend-app.com/verify-email?token=${token}`;

    await this.sendGridService.send({
      to: user.email,
      from: 'filipcendak1@gmail.com',
      subject: 'Verify your email',
      text: `Please click the following link to verify your email: ${verificationLink}`,
      html: `Please click the following link to verify your email: <a href="${verificationLink}">${verificationLink}</a>`,
    });
  }
}
