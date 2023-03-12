import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput } from './entities/login.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginInput: LoginInput) {
    await this.authService.validateUser(loginInput.email, loginInput.password);
    const token = await this.authService.login(
      loginInput.email,
      loginInput.password,
    );
    return token;
  }
}
