import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TestUserInput {
  @Field()
  username: string;

  @Field({ nullable: true })
  email: string;
}
