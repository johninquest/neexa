//src/modules/user/user.dto.ts
import { IsString, IsDate, IsOptional } from 'class-validator';

export class UserDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsDate()
  dateOfBirth: Date;

  @IsOptional()
  @IsString()
  city: string;
}