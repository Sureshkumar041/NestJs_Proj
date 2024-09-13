import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateHumanInputDto } from './dto/create';
import { CreateHumanResponseDto } from './response-dto/create';

@Resolver()
export class HumanResolver {
  constructor() {}

  @Query(() => String)
  async randomString(): Promise<string> {
    return 'Suresh';
  }

  @Mutation(() => CreateHumanResponseDto)
  async createHuman(
    @Args('createHumanInputDto') createHumanInputDto: CreateHumanInputDto,
  ): Promise<CreateHumanResponseDto> {
    try {
      const res: any = '';
      return res;
    } catch (error) {}
  }
}
