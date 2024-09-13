import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestResolver } from './test.resolver';
import { TestEntity } from 'entities/test.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TestEntity])],
  providers: [TestService, TestResolver],
})
export class TestModule {}
