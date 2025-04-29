import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  getAuthMessage(): string {
    return 'Authentication module is working!';
  }
}