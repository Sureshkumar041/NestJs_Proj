import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateHumanResponseDto {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
}
