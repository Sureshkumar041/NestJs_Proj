import { Module } from '@nestjs/common';
import { TestingController } from './testing.controller';
import { TestingResolver } from './testing.resolver';

@Module({
  imports: [],
  controllers: [TestingController],
  providers: [TestingResolver],
})
export class TestingModule {}
