import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

const emailRegex =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MinLength(10, { message: 'Name should have 10 characters' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Matches(emailRegex, { message: 'Invalid email id' })
  email: string;
}
