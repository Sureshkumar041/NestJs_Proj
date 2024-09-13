import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Test')
export class TestingResolver {
  constructor() {}

  @Query(() => String)
  testingQuery(): String {
    return 'Start Karo';
  }
}
