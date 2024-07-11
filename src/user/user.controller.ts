import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiBody({ type: CreateUserDto })
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUserService(createUserDto);
  }
}
