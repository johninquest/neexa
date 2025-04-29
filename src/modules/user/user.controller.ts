import { Controller, Get, Post, Body, BadRequestException, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() createUserDto: UserDto): string {
    // Call the service with the validated DTO
    return this.usersService.createUser(createUserDto);
  }
}