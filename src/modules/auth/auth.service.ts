import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getAuthMessage(): string {
    return 'Authentication service is working!';
  }
}