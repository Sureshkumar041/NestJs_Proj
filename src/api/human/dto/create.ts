import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateHumanInputDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
