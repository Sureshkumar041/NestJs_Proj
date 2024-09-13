import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HumanEntity } from 'src/entities/human.entity';
import { HumanResolver } from './human.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([HumanEntity])],
  controllers: [],
  providers: [HumanResolver],
})
export class HumanModule {}
