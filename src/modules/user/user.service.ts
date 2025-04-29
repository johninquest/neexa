import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hi, Welcome to our brand new Nest/Express API'; // GET method response
  }

  createUser(createUserDto: { name: string }): string {
    const { name } = createUserDto;
    return `Hello ${name}`; // POST method response
  }
}