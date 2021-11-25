import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { LoginDto } from './dtos/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() login: LoginDto) {
    console.log('req', login);
    return this.authService.login({ userId: '1', username: 'dawdawdaw' });
  }

  // if you want to use guard only in one method
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req): any {
    return req.user;
  }

  @Public()
  @Get()
  findAll() {
    return [];
  }

  @Get('protected')
  protectedFindAll() {
    return [];
  }
}
