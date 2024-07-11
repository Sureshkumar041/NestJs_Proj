import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userModal: Repository<User>,
  ) {}
  createUserService(createUserDto: CreateUserDto): Promise<User> {
    let user: User = new User();
    user.name = createUserDto?.name;
    user.email = createUserDto?.email;
    return this.userModal.save(user);
  }
}
