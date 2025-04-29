import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UsersController], // Register the controller
  providers: [UserService], // Register the service
})
export class UserModule {}