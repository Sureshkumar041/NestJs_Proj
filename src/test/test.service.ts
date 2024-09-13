import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestEntity } from 'entities/test.entity';
import { Repository } from 'typeorm';
import { TestUserInput } from './dto/test.dto';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TestEntity)
    private readonly TestRepository: Repository<TestEntity>,
  ) {}

  async CreateTest(userInput: TestUserInput) {
    try {
      const test = this.TestRepository.create(userInput);
      return this.TestRepository.save(test);
    } catch (error) {
      return new Error(error?.message);
    }
  }

  async GetAllTestService() {
    return await this.TestRepository.find();
  }
}
