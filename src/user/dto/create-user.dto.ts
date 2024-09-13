import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';
import { EmailRegex, PasswordRegex } from 'common/constant';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MinLength(10, { message: 'Name should have 10 characters' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Matches(EmailRegex, { message: 'Invalid email id' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Matches(PasswordRegex, { message: '' })
  password: string;
}
