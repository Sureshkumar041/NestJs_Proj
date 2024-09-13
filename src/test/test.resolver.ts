import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TestService } from './test.service';
import { TestEntity } from 'entities/test.entity';
import { TestUserInput } from './dto/test.dto';

@Resolver()
export class TestResolver {
  constructor(private testsService: TestService) {}

  @Mutation((returns) => TestEntity)
  async createTest(@Args('createTest') userInput: TestUserInput) {
    return await this.testsService.CreateTest(userInput);
  }

  @Query((returns) => [TestEntity])
  async getAllTest() {
    return await this.testsService.GetAllTestService();
  }
}
